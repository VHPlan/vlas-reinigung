"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";
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
        <div className="mb-32 text-center flex flex-col items-center justify-center">
          <div className="h-2 w-16 bg-[#0047AB] mb-10" />
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none mb-8">
            KONTAKT & <span className="text-[#0047AB]">ANGEBOT.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-3xl leading-relaxed uppercase tracking-widest">
            SICHERN SIE SICH JETZT IHR INDIVIDUELLES REINIGUNGSKONZEPT. WIR FREUEN UNS AUF IHRE ANFRAGE UND MELDEN UNS SCHNELLSTMÖGLICH.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-800 mb-12">
              LASSEN SIE UNS SPRECHEN
            </h2>

            <div className="space-y-8 mb-16">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex shrink-0 items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">ANSCHRIFT</h4>
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
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
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">TELEFON</h4>
                  <span className="text-xl font-black text-slate-800 uppercase tracking-tighter group-hover:text-[#0047AB] transition-colors">
                    0176 55700551
                  </span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">MO. - FR. 08:00 - 18:00 UHR</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@vlas-reinigung.de" className="flex items-start gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex shrink-0 items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#0047AB] mb-2">E-MAIL</h4>
                  <span className="text-lg font-black text-slate-800 uppercase tracking-tight group-hover:text-[#0047AB] transition-colors">
                    INFO@VLAS-REINIGUNG.DE
                  </span>
                </div>
              </a>
            </div>

            {/* Benefits Block */}
            <div className="p-10 bg-slate-50 rounded-[30px] border border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
                IHR VORTEIL BEI VLAS
              </h4>
              <ul className="space-y-5">
                {["Kostenlose Erstbesichtigung", "Angebot in 48 Stunden", "Keine versteckten Kosten", "Persönlicher Ansprechpartner"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-700">
                    <CheckCircle2 size={20} className="text-[#0047AB]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl shadow-blue-900/5 border-2 border-slate-50 relative">
            <div className="absolute -top-5 right-10 bg-[#0047AB] text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full shadow-lg">
              SCHNELLANFRAGE
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-800 mb-10">
              ANGEBOT ANFORDERN
            </h3>
            
            <form action={formAction} className="space-y-8">
              {state?.message && (
                <div className={`p-4 rounded-xl text-sm font-bold ${state.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {state.message}
                </div>
              )}

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
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">GEWÜNSCHTE LEISTUNG (MEHRFACHAUSWAHL MÖGLICH IM TEXT)</label>
                <select name="service" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800 uppercase tracking-widest cursor-pointer">
                  <option>UNTERHALTSREINIGUNG</option>
                  <option>BÜROREINIGUNG</option>
                  <option>PRAXISREINIGUNG</option>
                  <option>GLAS- UND FENSTERREINIGUNG</option>
                  <option>FASSADENREINIGUNG</option>
                  <option>BAUREINIGUNG (GROB & FEIN)</option>
                  <option>GRUNDREINIGUNG</option>
                  <option>TREPPENHAUSREINIGUNG</option>
                  <option>INDUSTRIEREINIGUNG</option>
                  <option>TEPPICH- UND POLSTERREINIGUNG</option>
                  <option>HAUSMEISTERSERVICE</option>
                  <option>SONSTIGES / INDIVIDUELLE ANFRAGE</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">IHRE NACHRICHT (OPTIONAL)</label>
                <textarea name="message" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-[#0047AB] focus:bg-white focus:outline-none transition-all text-sm font-bold text-slate-800 resize-none" rows={4} placeholder="ZUSÄTZLICHE INFORMATIONEN ZU IHREM OBJEKT..."></textarea>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <input type="checkbox" name="privacy" className="mt-1 w-4 h-4 accent-[#0047AB]" required />
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
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
