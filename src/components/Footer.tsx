import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-4 group flex-shrink-0 mb-6">
              <div className="text-3xl font-black tracking-tighter text-[#0047AB] whitespace-nowrap uppercase">
                VLAS
              </div>
              <div className="h-6 w-[2px] bg-slate-200 mx-1 flex-shrink-0" />
              <div className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 whitespace-nowrap">
                GEBÄUDEREINIGUNG
              </div>
            </Link>
            <p className="text-xs text-slate-500 font-bold leading-relaxed max-w-[250px] mb-6">
              VLAS Gebäudereinigung und Service – Ihr zuverlässiger Partner für professionelle Sauberkeit in Karlsruhe und Umgebung.
            </p>
          </div>

          {/* Leistungen Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-6">Unsere Leistungen</h4>
            <ul className="space-y-3">
              <li><Link href="/leistungen/unterhaltsreinigung-karlsruhe" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Unterhaltsreinigung</Link></li>
              <li><Link href="/leistungen/glasreinigung-karlsruhe" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Glasreinigung</Link></li>
              <li><Link href="/leistungen/baureinigung-karlsruhe" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Baureinigung</Link></li>
              <li><Link href="/leistungen/industriereinigung-karlsruhe" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Industriereinigung</Link></li>
              <li><Link href="/leistungen/teppichreinigung-karlsruhe" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Teppichreinigung</Link></li>
              <li><Link href="/einsatzgebiet" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Einsatzgebiet</Link></li>
              <li>
                <Link href="/leistungen" className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#0047AB] hover:text-blue-800 transition-colors mt-2">
                  Alle ansehen <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-500 leading-relaxed">VLAS Gebäudereinigung und Service<br/>Königsberger Str. 4D<br/>76139 Karlsruhe</span>
              </li>
              <li>
                <a href="tel:+4917655700551" className="flex items-center gap-3 group">
                  <Phone size={16} className="text-slate-400 group-hover:text-[#0047AB] transition-colors flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-500 group-hover:text-[#0047AB] transition-colors">0176 55700551</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@vlas-reinigung.de" className="flex items-center gap-3 group">
                  <Mail size={16} className="text-slate-400 group-hover:text-[#0047AB] transition-colors flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-500 group-hover:text-[#0047AB] transition-colors">info@vlas-reinigung.de</span>
                </a>
              </li>
              <li className="text-xs font-bold text-slate-400 pt-1">Mo–Fr 08:00–18:00 Uhr</li>
            </ul>
          </div>

          {/* Unternehmen Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              <li><Link href="/ueber-uns" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Über uns</Link></li>
              <li><Link href="/referenzen" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Referenzen</Link></li>
              <li><Link href="/faq" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">FAQ</Link></li>
              <li><Link href="/ratgeber" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Ratgeber</Link></li>
              <li><Link href="/impressum" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors">AGB</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col items-center justify-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            © {new Date().getFullYear()} VLAS GEBÄUDEREINIGUNG UND SERVICE
          </p>
        </div>

      </div>
    </footer>
  );
}
