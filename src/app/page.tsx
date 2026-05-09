"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Building2, Droplets, Sparkles, PhoneCall, Star, Users, ExternalLink, ChevronDown, MapPin } from "lucide-react";
import Link from "next/link";

// TODO: replace PLACEHOLDER with real Google Business Profile URL before launch
const GOOGLE_PROFILE_URL = "https://g.page/r/PLACEHOLDER";

const faqTeaser = [
  {
    q: "Arbeiten Sie ausschließlich mit eigenem Personal?",
    a: "Ja. Wir setzen ausschließlich festangestelltes Eigenpersonal ein – keine Subunternehmer. Das garantiert gleichbleibende Qualität, Diskretion und volle Verantwortung für jede Reinigung.",
  },
  {
    q: "Wie kurzfristig können Sie einen Einsatz übernehmen?",
    a: "In der Regel starten wir innerhalb von 48–72 Stunden mit einer kostenlosen Erstbegehung. Bei dringenden Fällen bemühen wir uns um schnellstmögliche Reaktion.",
  },
  {
    q: "Was kostet eine Unterhaltsreinigung?",
    a: "Die Kosten hängen von Objektgröße, Reinigungsintervall und Leistungsumfang ab. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.",
  },
];

function FaqTeaser() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqTeaser.map((faq, i) => (
        <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-5 text-left font-black text-slate-800 hover:bg-slate-50 transition-colors text-sm"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="pr-4">{faq.q}</span>
            <ChevronDown size={18} className={`flex-shrink-0 text-[#0047AB] transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-4 text-sm">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const services = [
    {
      title: "Unterhaltsreinigung",
      desc: "Tägliche, zuverlässige Pflege für Büros und Praxen. Wir garantieren ein stets repräsentatives und hygienisches Umfeld für Ihre Mitarbeiter und Kunden.",
      icon: <Building2 size={32} strokeWidth={1.5} />,
      href: "/leistungen/unterhaltsreinigung-karlsruhe",
    },
    {
      title: "Glasreinigung",
      desc: "Streifenfreier Glanz für Fenster, Schaufenster und Fassaden. Wir reinigen schonend und sicher, auch in schwer zugänglichen Höhen.",
      icon: <Droplets size={32} strokeWidth={1.5} />,
      href: "/leistungen/glasreinigung-karlsruhe",
    },
    {
      title: "Baureinigung",
      desc: "Von der Baugrobreinigung bis zur feinen Bauendreinigung. Wir beseitigen Handwerkerschmutz für die reibungslose Schlüsselübergabe.",
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      href: "/leistungen/baureinigung-karlsruhe",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-slate-800 selection:bg-[#0047AB] selection:text-white">

      {/* 1. HERO */}
      <section className="relative bg-[#0047AB] pt-40 pb-40 lg:pt-56 lg:pb-56 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Ihr Profi für <br />
              Gebäudereinigung <br />
              in Karlsruhe.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
              Sauberkeit, die man nicht nur sieht, sondern auch spürt. Wir kümmern uns im Hintergrund um Ihr Gebäude, damit Sie sich voll und ganz auf Ihren Erfolg konzentrieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0047AB] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
                Kostenloses Angebot <ArrowRight size={18} />
              </Link>
              <a href="tel:+4917655700551" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300">
                <PhoneCall size={18} /> 0176 55700551
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto ml-auto rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white/20 animate-[blob_8s_infinite_alternate] bg-white flex items-center justify-center p-12">
              <img src="/logo.png" alt="VLAS Gebäudereinigung und Service Logo" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 brightness-[1.1] contrast-[1.2] mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[radial-gradient(#ffffff33_2px,transparent_2px)] [background-size:16px_16px]" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px] lg:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,130.2,201.5,118.8,242.45,112.16,282.8,96.34,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* 2. STATS BANNER — 4 pills */}
      <section className="bg-white py-10 relative z-20 -mt-10 lg:-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[30px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 lg:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y-0 divide-slate-100 lg:divide-x">
            <div className="flex flex-col items-center justify-center">
              <Sparkles size={40} className="text-[#0047AB] mb-4" />
              <h2 className="text-3xl font-black text-slate-800 mb-1">Sauber</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Ohne Kompromisse</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Clock size={40} className="text-[#0047AB] mb-4" />
              <h2 className="text-3xl font-black text-slate-800 mb-1">Schnell</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Flexibler Einsatz</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ShieldCheck size={40} className="text-[#0047AB] mb-4" />
              <h2 className="text-3xl font-black text-slate-800 mb-1">Zuverlässig</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Geprüftes Personal</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Users size={40} className="text-[#0047AB] mb-4" />
              <h2 className="text-3xl font-black text-slate-800 mb-1">Versichert</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Haftpflichtversicherung</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#0047AB] font-bold uppercase tracking-widest text-sm mb-4">Leistungen</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-6">Ihre Reinigung in besten Händen.</h2>
            <p className="text-slate-600 font-medium text-lg">Wir nehmen Ihnen Ihre Glasreinigung, Unterhaltsreinigung und Baureinigung ab. Immer auf höchstem Niveau.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-white rounded-3xl p-10 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,71,171,0.15)] border border-slate-100 hover:border-[#0047AB]/20 transition-all duration-500 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047AB]/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 bg-[#0047AB]/10 text-[#0047AB] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0047AB] group-hover:text-white transition-all duration-500 relative z-10">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 relative z-10">{srv.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow relative z-10">{srv.desc}</p>
                <Link href={srv.href} className="inline-flex items-center gap-2 text-[#0047AB] font-bold group-hover:gap-4 transition-all relative z-10">
                  Mehr erfahren <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-800 font-bold rounded-full hover:bg-[#0047AB] hover:text-white transition-colors duration-300">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / TRUST */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#0047AB] font-bold uppercase tracking-widest text-sm mb-4">Über uns</p>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-8">Sie buchen – Wir organisieren.</h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>VLAS Gebäudereinigung und Service ist ein inhabergeführtes Reinigungsunternehmen aus Karlsruhe. Qualität und Zuverlässigkeit sind für uns keine Versprechen, sondern gelebte Praxis.</p>
                <p>Lehnen Sie sich ganz entspannt zurück – ab hier übernimmt Ihr persönlicher Ansprechpartner Alexandru Vlas und sein Team. Egal ob Büro, Praxis oder Industriehalle: Wir haben die Erfahrung und das Personal für das perfekte Sauberkeitsergebnis.</p>
                <p className="text-slate-800 font-bold border-l-4 border-[#0047AB] pl-6 py-2">Wir überzeugen lieber durch unsere Leistung. Treten Sie am besten noch heute mit uns in Kontakt.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-6">
              <div className="bg-white p-10 rounded-3xl shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full translate-x-10 -translate-y-10" />
                <div className="flex gap-1 text-[#0047AB] mb-6 relative z-10">
                  {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 relative z-10">&ldquo;Hervorragender Service!&rdquo;</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10 italic">&ldquo;Wir haben lange nach einem zuverlässigen Partner gesucht. VLAS überzeugt durch Pünktlichkeit, extreme Gründlichkeit und sehr freundliches Personal. Die beste Entscheidung für unser Bürogebäude.&rdquo;</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#0047AB] font-bold text-lg">M</div>
                  <div>
                    <p className="font-bold text-slate-800">Michael S.</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Facility Manager</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0047AB] p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full translate-x-10 translate-y-10" />
                <h3 className="text-xl font-black mb-6 relative z-10">Warum VLAS Gebäudereinigung und Service?</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-blue-300 shrink-0" /> Ausschließlicher Einsatz von Eigenpersonal</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-blue-300 shrink-0" /> Feste, verlässliche Ansprechpartner</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-blue-300 shrink-0" /> Digitale Qualitätskontrolle</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#0047AB] font-bold uppercase tracking-widest text-sm mb-4">Ablauf</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-6">In 4 Schritten zur Sauberkeit.</h2>
            <p className="text-slate-600 font-medium text-lg">Ein transparenter und effizienter Onboarding-Prozess für unsere Neukunden.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-slate-100 z-0" />
            {[
              { num: "1", title: "Kontakt", desc: "Sie senden uns Ihre Anfrage online oder rufen uns an. Wir reagieren umgehend." },
              { num: "2", title: "Besichtigung", desc: "Kostenlose Objektbegehung vor Ort zur genauen Analyse Ihres Bedarfs." },
              { num: "3", title: "Angebot", desc: "Sie erhalten ein faires, transparentes und maßgeschneidertes Konzept." },
              { num: "4", title: "Reinigungsstart", desc: "Unsere festen Teams starten pünktlich nach höchsten Qualitätsstandards." },
            ].map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group px-4">
                <div className="w-16 h-16 bg-white border-4 border-slate-100 group-hover:border-[#0047AB] rounded-full flex items-center justify-center text-2xl font-black text-slate-300 group-hover:text-[#0047AB] group-hover:shadow-[0_0_20px_rgba(0,71,171,0.2)] transition-all duration-300 mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8a. TRUST BAR */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="text-2xl font-black text-[#0047AB] group-hover:text-blue-700 transition-colors">⭐ 5,0</div>
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Google Bewertung</div>
            </a>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-black text-[#0047AB]">✓</div>
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Inhabergeführt</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-black text-[#0047AB]">✓</div>
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest">100% Eigenpersonal</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-black text-[#0047AB]">✓</div>
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Haftpflichtversichert</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8b. EINSATZGEBIET TEASER */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight mb-6">Wir sind in Karlsruhe und Umgebung für Sie da</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Karlsruhe", "Ettlingen", "Bruchsal", "Rastatt", "Baden-Baden", "Pforzheim", "Germersheim", "Heidelberg", "Mannheim"].map((city) => (
                  <span key={city} className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-slate-700">
                    <MapPin size={12} className="text-[#0047AB]" /> {city}
                  </span>
                ))}
              </div>
              <Link href="/einsatzgebiet" className="inline-flex items-center gap-2 text-[#0047AB] font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                Alle Standorte ansehen <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=K%C3%B6nigsberger+Str.+4D,+76139+Karlsruhe&output=embed"
                width="100%" height="280"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                title="VLAS Standort Karlsruhe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8c. FAQ TEASER */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-10 text-center">Häufige Fragen</h2>
          <FaqTeaser />
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[#0047AB] font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
              Alle Fragen ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-[#0047AB] py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-8">Bereit für perfekte Sauberkeit?</h2>
          <p className="text-blue-100 text-lg md:text-xl font-medium mb-12">Schreiben Sie uns einfach eine E-Mail oder rufen Sie uns an: Wir freuen uns auf ein Kennenlernen.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0047AB] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
              Jetzt kontaktieren <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}} />
    </main>
  );
}
