"use client";

import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Loader2, Clock } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { sendEmail } from "../actions/sendEmail";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full py-6 bg-[#0047AB] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>WIRD GESENDET... <Loader2 size={16} className="animate-spin" /></>
      ) : (
        <>JETZT ANGEBOT ANFRAGEN <ArrowRight size={16} /></>
      )}
    </button>
  );
}

export default function KontaktPage() {
  const [state, formAction] = useActionState(sendEmail, null);

  return (
    <main className="bg-white min-h-screen pt-48 pb-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        
        {/* Minimal Centered Hero */}
        <div className="mb-20 text-center flex flex-col items-center justify-center">
          <div className="h-2 w-16 bg-[#0047AB] mb-10" />
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none mb-8">
            KONTAKT &amp; <span className="text-[#0047AB]">ANGEBOT.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-3xl leading-relaxed uppercase tracking-widest">
            SICHERN SIE SICH JETZT IHR INDIVIDUELLES REINIGUNGSKONZEPT. WIR FREUEN UNS AUF IHRE ANFRAGE UND MELDEN UNS SCHNELLSTMÖGLICH.
          </p>
        </div>

        {/* Trust Bar */}
        <div className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          {["✓ Kostenlose Erstbesichtigung", "✓ Angebot in 48h", "✓ Kein Risiko"].map((item) => (
            <div key={item} className="text-sm font-black text-slate-700 uppercase tracking-wider">
              <span className="text-[#0047AB]">{item.slice(0, 1)}</span>{item.slice(1)}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-800 mb-12">
              LASSEN SIE UNS SPRECHEN
            </h2>

            <div className="space-y-8 mb-10">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex shrink-0 items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">ANSCHRIFT</h3>
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                    VLAS Gebäudereinigung und Service<br />
                    KÖNIGSBERGER STR. 4D <br /> 76139 KARLSRUHE
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+4917655700551" className="flex items-start gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex shrink-0 items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">TELEFON</h3>
                  <span className="text-xl font-black text-slate-800 uppercase tracking-tighter group-hover:text-[#0047AB] transition-colors">
                    0176 55700551
                  </span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">MO. – FR. 08:00 – 18:00 UHR</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@vlas-reinigung.de" className="flex items-start gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex shrink-0 items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">E-MAIL</h3>
                  <span className="text-lg font-black text-slate-800 uppercase tracking-tight group-hover:text-[#0047AB] transition-colors">
                    INFO@VLAS-REINIGUNG.DE
                  </span>
                </div>
              </a>

              {/* Opening Hours */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex shrink-0 items-center justify-center text-[#0047AB]">
                  <Clock size={28} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">ÖFFNUNGSZEITEN</h3>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed">
                    Montag – Freitag: 08:00 – 18:00 Uhr<br />
                    Samstag &amp; Sonntag: Nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Block */}
            <div className="p-10 bg-slate-50 rounded-[30px] border border-slate-100 mb-10">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
                IHR VORTEIL BEI VLAS
              </h4>
              <ul className="space-y-5">
                {[
                  "Kostenlose Erstbesichtigung",
                  "Angebot in 48 Stunden",
                  "Keine versteckten Kosten",
                  "Persönlicher Ansprechpartner",
                  "100% Eigenpersonal",
                  "Haftpflichtversichert",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-700">
                    <CheckCircle2 size={20} className="text-[#0047AB]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=K%C3%B6nigsberger+Str.+4D,+76139+Karlsruhe&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="VLAS Gebäudereinigung und Service – Standort Karlsruhe"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl shadow-blue-900/5 border-2 border-slate-50 relative">
            <div className="absolute -top-5 right-10 bg-[#0047AB] text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full shadow-lg">
              SCHNELLANFRAGE
            </div>
            
            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800 mb-10">
              ANGEBOT ANFORDERN
            </h2>
            
            <form action={formAction} className="space-y-8">
              {state?.message && (
                <div className={`p-4 rounded-xl text-sm font-bold ${state.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {state.message}
                </div>
              )}

              {/* Honeypot spam field — hidden via CSS, NOT display:none */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  placeholder="Website"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">NAME ODER UNTERNEHMEN *</label>
                  <input type="text" name="name" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800" placeholder="Max Mustermann / Muster GmbH" required />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">TELEFONNUMMER FÜR RÜCKFRAGEN *</label>
                  <input type="tel" name="phone" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800" placeholder="+49 (0) 123 456 789" required />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">E-MAIL ADRESSE *</label>
                <input type="email" name="email" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800" placeholder="kontakt@beispiel.de" required />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">GEWÜNSCHTE LEISTUNG *</label>
                <select name="service" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800 uppercase tracking-widest cursor-pointer" required>
                  <option value="">Bitte wählen...</option>
                  <option>UNTERHALTSREINIGUNG</option>
                  <option>BÜROREINIGUNG</option>
                  <option>PRAXISREINIGUNG</option>
                  <option>GLASREINIGUNG</option>
                  <option>FASSADENREINIGUNG</option>
                  <option>BAUREINIGUNG (GROB &amp; FEIN)</option>
                  <option>GRUNDREINIGUNG</option>
                  <option>TREPPENHAUSREINIGUNG</option>
                  <option>INDUSTRIEREINIGUNG</option>
                  <option>TEPPICH- UND POLSTERREINIGUNG</option>
                  <option>HAUSMEISTERSERVICE</option>
                  <option>SONSTIGES / INDIVIDUELLE ANFRAGE</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">OBJEKTGRÖSSE (CA.)</label>
                  <select name="objektgroesse" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800 cursor-pointer">
                    <option value="">Bitte wählen...</option>
                    <option>Unter 200 m²</option>
                    <option>200–500 m²</option>
                    <option>500–1000 m²</option>
                    <option>Über 1000 m²</option>
                    <option>Nicht sicher</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">WIE DRINGEND?</label>
                  <select name="dringlichkeit" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800 cursor-pointer">
                    <option value="">Bitte wählen...</option>
                    <option>So schnell wie möglich</option>
                    <option>Innerhalb von 2 Wochen</option>
                    <option>Kein fester Termin</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">IHRE NACHRICHT (OPTIONAL)</label>
                <textarea name="message" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800 resize-none" rows={4} placeholder="Zusätzliche Informationen zu Ihrem Objekt..."></textarea>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <input type="checkbox" name="privacy" id="privacy-kontakt" className="mt-1 w-4 h-4 accent-[#0047AB]" required />
                <label htmlFor="privacy-kontakt" className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                  ICH AKZEPTIERE DIE <Link href="/datenschutz" className="text-[#0047AB] underline hover:text-blue-800">DATENSCHUTZERKLÄRUNG</Link>. *
                </label>
              </div>

              <SubmitButton />
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
