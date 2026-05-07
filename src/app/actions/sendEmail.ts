"use server";

import nodemailer from "nodemailer";

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !phone || !email || !service) {
      return { success: false, message: "Bitte füllen Sie alle Pflichtfelder aus." };
    }

    // Configurare Nodemailer cu datele din .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Detaliile email-ului ce va fi trimis către proprietar
    const mailOptions = {
      from: `VLAS Website <${process.env.SMTP_USER}>`,
      to: "vlasalexandru@yahoo.com",
      replyTo: email,
      subject: `🔥 Neue Anfrage: ${service} von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0047AB; margin-bottom: 20px;">Neue Anfrage von der Website</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; width: 150px; border-bottom: 1px solid #e2e8f0;">Firma/Name:</td>
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
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #64748b; font-size: 14px; text-transform: uppercase;">Nachricht:</h3>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message || "<i>Keine zusätzliche Nachricht angegeben.</i>"}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            Diese E-Mail wurde automatisch vom VLAS Kontaktformular gesendet.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet." };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns an." };
  }
}
