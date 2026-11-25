# jernyao.de
Jern Yao by Hans Moehlng

## Auslegung und Experten-Konfigurator

Die fünf Hauptseiten binden `/auslegung/?lang=de&embedded=1` direkt ein und verlinken `/konfigurator/?lang=de`. Entsprechend gelten `en`, `it`, `sl` und `zh`. Beide Module liefern technische Maschinenfunde ohne Maschinenpreise. Der bestehende separate Auftritt auf `jern-yao.de` behält seine Preise.

Die Module werden aus dem gemeinsamen Rechenkern und der Oberfläche im Repository [hansmoehling/jern-yao.de](https://github.com/hansmoehling/jern-yao.de) erzeugt. Dort zuerst `python quelle/bauen.py`, danach `python quelle/integration_bauen.py <dieser Checkout>/docs` ausführen. Der Export entfernt die Preisdaten aus dem Maschinenkatalog, erhält seine Rangfolge und deaktiviert die Preisausgabe einschließlich Druck und E-Mail. Keine Schlüssel oder privaten Wissensdateien gehören in dieses Repository.

Der vorhandene Cloudflare-Dienst bestimmt die Preisfreigabe zusätzlich serverseitig anhand der Herkunft und speichert sie bei Anfragen. Upload, Queue, Analyse, Folgechat und Status verwenden dieselbe Vorgabe. Die öffentliche Dienstadresse steht im erzeugten Modul; die Zugänge bleiben ausschließlich im Dienst.

`docs/assets/auslegung-embed.js` übernimmt Höhenänderungen nur von der eingebetteten Seite derselben Herkunft. Die vorhandenen Hauptseiteninhalte und Sprachpfade bleiben erhalten. GitHub Pages veröffentlicht `main:/docs` auf `jernyao.de`.
