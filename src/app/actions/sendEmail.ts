"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

// In-memory rate limiter: max 3 submissions per IP per hour
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true; // allowed
  }
  if (entry.count >= 3) return false; // blocked
  entry.count++;
  return true; // allowed
}

export async function sendEmail(prevState: unknown, formData: FormData) {
  try {
    // --- Honeypot check (spam bot trap) ---
    const honeypot = formData.get("website") as string;
    if (honeypot && honeypot.length > 0) {
      // Bot filled the hidden field — silently succeed to avoid fingerprinting
      return { success: true, message: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet." };
    }

    // --- Rate limiting by IP ---
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headersList.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return {
        success: false,
        message:
          "Zu viele Anfragen. Bitte warten Sie eine Stunde oder rufen Sie uns direkt an: 0176 55700551.",
      };
    }

    // --- Field extraction ---
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const service = (formData.get("service") as string)?.trim();
    const objektgroesse = (formData.get("objektgroesse") as string)?.trim();
    const dringlichkeit = (formData.get("dringlichkeit") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    // --- Server-side validation ---
    if (!name || !phone || !email || !service) {
      return { success: false, message: "Bitte füllen Sie alle Pflichtfelder aus." };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
    }

    // --- Nodemailer transport (hostico.ro SMTP) ---
    const transporter = nodemailer.createTransport({
      host: "glc42.hostico.ro",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailTo = process.env.EMAIL_TO || "info@vlas-reinigung.de";

    const subject = `Neue Anfrage: ${service} – ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #0047AB; margin-bottom: 20px;">Neue Anfrage von der Website</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; width: 170px; border-bottom: 1px solid #e2e8f0;">Firma/Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Telefon:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}" style="color: #0047AB; font-weight: bold;">${phone}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">E-Mail:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #0047AB;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Leistung:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${service}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Objektgröße:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${objektgroesse || "Keine Angabe"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Dringlichkeit:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${dringlichkeit || "Keine Angabe"}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #64748b; font-size: 14px; text-transform: uppercase;">Nachricht:</h3>
          <p style="white-space: pre-wrap; margin-bottom: 0;">${message || "<i>Keine zusätzliche Nachricht angegeben.</i>"}</p>
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
          Diese E-Mail wurde automatisch vom VLAS Kontaktformular gesendet.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `VLAS Website <${process.env.EMAIL_USER}>`,
      to: emailTo,
      replyTo: email,
      subject,
      html,
    });

    return {
      success: true,
      message:
        "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
    };
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Email send error:", errMsg);
    return {
      success: false,
      message: `Fehler: ${errMsg}`,
    };
  }
}
