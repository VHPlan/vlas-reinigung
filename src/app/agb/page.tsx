import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | VLAS Gebäudereinigung",
  description: "Allgemeine Geschäftsbedingungen der VLAS Gebäudereinigung.",
};

export default function AGBPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <section className="max-w-[800px] mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-12">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen der VLAS Gebäudereinigung gegenüber ihren Kunden. <br />
              (2) Abweichende oder entgegenstehende Bedingungen des Kunden werden von uns nicht anerkannt, sofern wir diesen nicht ausdrücklich schriftlich zugestimmt haben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">§ 2 Leistungsumfang und Ausführung</h2>
            <p>
              (1) Die Art, der Umfang und die Häufigkeit der Reinigungsleistungen werden im jeweiligen Dienstleistungsvertrag oder in der Auftragsbestätigung schriftlich festgelegt.<br />
              (2) Die VLAS Gebäudereinigung stellt die für die Reinigungsarbeiten erforderlichen Geräte und Reinigungsmittel, sofern nicht anders vereinbart.<br />
              (3) Wir sind berechtigt, die Ausführung der Leistungen durch fachkundige Dritte (Subunternehmer) vornehmen zu lassen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
            <p>
              (1) Alle Preise verstehen sich netto zzgl. der jeweils geltenden gesetzlichen Mehrwertsteuer.<br />
              (2) Rechnungen sind sofort nach Rechnungserhalt ohne Abzug fällig, sofern auf der Rechnung kein anderes Zahlungsziel angegeben ist.<br />
              (3) Bei Zahlungsverzug sind wir berechtigt, die vertraglichen Leistungen bis zur vollständigen Bezahlung einzustellen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">§ 4 Haftung und Gewährleistung</h2>
            <p>
              (1) Mängel der Reinigungsleistungen sind der VLAS Gebäudereinigung unverzüglich, spätestens jedoch binnen 24 Stunden nach Leistungserbringung, schriftlich anzuzeigen.<br />
              (2) Wir haften für Schäden, die nachweislich durch unser Personal bei der Ausführung der Reinigungsarbeiten schuldhaft verursacht wurden. Die Haftung beschränkt sich auf den vertragstypischen, vorhersehbaren Schaden.<br />
              (3) Eine Haftung für Mangelfolgeschäden ist ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">§ 5 Vertragslaufzeit und Kündigung</h2>
            <p>
              (1) Laufende Reinigungsverträge werden, sofern nicht anders vereinbart, auf unbestimmte Zeit geschlossen.<br />
              (2) Sie können von beiden Parteien mit einer Frist von drei Monaten zum Quartalsende schriftlich gekündigt werden.<br />
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">§ 6 Schlussbestimmungen</h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland.<br />
              (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist, soweit gesetzlich zulässig, Karlsruhe.<br />
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
