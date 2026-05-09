import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | VLAS Gebäudereinigung und Service",
  description: "Impressum und rechtliche Angaben der VLAS Gebäudereinigung und Service.",
  alternates: { canonical: "https://www.vlas-reinigung.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <section className="max-w-[800px] mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-12">
          Impressum
        </h1>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              VLAS Gebäudereinigung und Service<br />
              Königsberger Str. 4D<br />
              76139 Karlsruhe
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Vertreten durch:</h2>
            <p>Alexandru Vlas</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Kontakt</h2>
            <p>
              Telefon: +49 (0) 176 55700551<br />
              E-Mail: info@vlas-reinigung.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Steuerliche Angaben</h2>
            <p>
              Steuernummer: 35173/03496<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE458723815
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
