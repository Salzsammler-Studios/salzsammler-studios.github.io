export default function SchalterPrivacy() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1.5rem 4rem", color: "#1a1a1a", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
      <h1>Datenschutzerklärung</h1>
      <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "2rem" }}>
        App: <strong>Der Schalter</strong> &nbsp;|&nbsp; Zuletzt aktualisiert: Februar 2026
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Schäfer & Schilling GbR, Salzsammler <br />
        E-Mail: <a href="mailto:info@salzsammler.de">info@salzsammler.de</a>
      </p>

      <h2>2. Grundsatz</h2>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese Datenschutzerklärung erläutert,
        welche Daten die App <em>Der Schalter</em> erhebt, wie sie verwendet werden und welche Rechte Sie haben.
      </p>

      <h2>3. Kamerazugriff und QR-Code-Scan</h2>
      <p>Die App verwendet die Kamera Ihres Geräts ausschließlich, um QR-Codes zu erkennen. Es werden dabei:</p>
      <ul>
        <li>keine Fotos oder Videos aufgenommen,</li>
        <li>keine Kamerabilder gespeichert oder weitergeleitet,</li>
        <li>keine Bilddaten an Server übertragen.</li>
      </ul>
      <p>
        Die Kameraverarbeitung findet vollständig lokal auf Ihrem Gerät statt. Sobald ein QR-Code erkannt
        wurde, wird nur der darin enthaltene Text (ein Stationsbezeichner) intern weiterverarbeitet.
      </p>
      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>

      <h2>4. Gewinnspiel-Formular</h2>
      <p>Wenn Sie freiwillig am Gewinnspiel teilnehmen, werden folgende Daten erhoben:</p>
      <ul>
        <li><strong>Name</strong></li>
        <li><strong>E-Mail-Adresse</strong></li>
      </ul>
      <p>
        Diese Daten werden per HTTPS an unseren Server (<code>salzsammler.de</code>) übermittelt und
        anschließend an die <strong>Sparkasse Selb</strong> als Veranstalterin des Gewinnspiels weitergeleitet.
        Die Sparkasse ist für die weitere Verarbeitung Ihrer Daten im Rahmen des Gewinnspiels
        verantwortlich. Wir selbst speichern oder verwenden die Daten nicht darüber hinaus.
      </p>
      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>

      <h2>5. Keine weiteren Datenerhebungen</h2>
      <p>
        Die App erhebt keine weiteren personenbezogenen Daten. Es werden keine Standortdaten,
        Gerätekennungen, Nutzungsstatistiken oder Absturzberichte an externe Dienste übermittelt.
        Es werden keine Tracking- oder Werbebibliotheken von Drittanbietern eingesetzt.
      </p>

      <h2>6. Datenspeicherung</h2>
      <p>
        Alle Spielfortschritte und App-Daten werden ausschließlich lokal auf Ihrem Gerät gespeichert.
        Es gibt keine Nutzerkonten und keine Cloud-Synchronisierung.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte:{" "}
        <a href="mailto:info@salzsammler.de">info@salzsammler.de</a>
      </p>

      <h2>8. Datensicherheit</h2>
      <p>
        Die Übermittlung von Gewinnspieldaten erfolgt verschlüsselt via HTTPS/TLS.
      </p>

      <h2>9. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
        Die jeweils aktuelle Version ist unter der URL erreichbar, unter der Sie dieses Dokument gefunden haben.
      </p>
    </div>
  );
}
