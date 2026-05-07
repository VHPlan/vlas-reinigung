import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | VLAS Gebäudereinigung",
  description: "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten auf der VLAS Website.",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <section className="max-w-[800px] mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-12">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-bold text-slate-700 mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-lg font-bold text-slate-700 mb-2">Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-bold text-slate-700 mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="text-lg font-bold text-slate-700 mb-2">Verantwortliche Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              VLAS Gebäudereinigung<br />
              Alexandru Vlas<br />
              Königsberger Str. 4D<br />
              76139 Karlsruhe<br />
              E-Mail: vlasalexandru@yahoo.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-bold text-slate-700 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Sie helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Die von uns verwendeten Cookies sind technisch notwendige Session-Cookies, die nach Schließen des Browsers automatisch gelöscht werden. 
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
