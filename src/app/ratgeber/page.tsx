import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Ratgeber | VLAS Gebäudereinigung und Service Karlsruhe",
  description:
    "Tipps und Wissen rund um die Gebäudereinigung – von Kostenfragen bis zur Wahl der richtigen Reinigungsfirma in Karlsruhe.",
  alternates: { canonical: "https://www.vlas-reinigung.de/ratgeber" },
};

const articles = [
  {
    slug: "unterhaltsreinigung-kosten",
    title: "Unterhaltsreinigung: Was kostet die Büroreinigung pro m²?",
    excerpt: "Wie viel kostet eine professionelle Unterhaltsreinigung wirklich? Wir erklären die wichtigsten Preisfaktoren und zeigen, worauf Sie bei einem Angebot achten sollten.",
    date: "2026-05-01",
  },
  {
    slug: "reinigungsfirma-karlsruhe-finden",
    title: "Reinigungsfirma in Karlsruhe finden: Worauf Sie achten sollten",
    excerpt: "Eigenpersonal oder Subunternehmer? Versichert oder nicht? Diese und andere Kriterien helfen Ihnen, die richtige Reinigungsfirma für Ihr Unternehmen zu finden.",
    date: "2026-05-05",
  },
  {
    slug: "unterhaltsreinigung-vs-grundreinigung",
    title: "Unterhaltsreinigung vs. Grundreinigung: Was ist der Unterschied?",
    excerpt: "Viele Unternehmen fragen sich, ob sie regelmäßige Unterhaltsreinigung oder eine intensive Grundreinigung benötigen. Wir erklären den Unterschied und wann was sinnvoll ist.",
    date: "2026-05-08",
  },
];

export default function RatgeberPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      {/* BREADCRUMB */}
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <li><Link href="/" className="hover:text-[#0047AB] transition-colors">Startseite</Link></li>
          <li className="text-slate-200">/</li>
          <li className="text-[#0047AB]">Ratgeber</li>
        </ol>
      </nav>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-black text-[#0047AB] tracking-tighter uppercase mb-6">
          Ratgeber: Tipps rund um die Gebäudereinigung
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Praktisches Wissen für Facility Manager, Hausverwaltungen und Unternehmen – verständlich erklärt von VLAS Gebäudereinigung und Service.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/ratgeber/${article.slug}`}
              className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,71,171,0.15)] hover:border-[#0047AB]/20 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                <Calendar size={14} />
                {new Date(article.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
              </div>
              <h2 className="text-xl font-black text-slate-800 mb-4 group-hover:text-[#0047AB] transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow text-sm">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-[#0047AB] font-bold text-sm group-hover:gap-4 transition-all">
                Weiterlesen <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
