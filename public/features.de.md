# Über RelaySMS

## Inhaltsverzeichnis

- [Geschichte und Anwendungsfälle](#geschichte-und-anwendungsfälle)
  - [Geschichte](#geschichte)
  - [Anwendungsfälle](#anwendungsfälle)
- [Technischer Überblick](#technischer-überblick)
  - [Zentrale Softwarekomponenten](#zentrale-softwarekomponenten)
- [Weitere Möglichkeiten](#weitere-möglichkeiten)
- [Plattformen](#plattformen)
- [Bridges](#bridges)
- [Clients](#clients)
- [Gateway-Clients](#gateway-clients)
- [Self-Hosting (wird auf Basis tatsächlicher Erfahrungen geschrieben)](#self-hosting-wird-auf-basis-tatsächlicher-erfahrungen-geschrieben)
- [Gewonnene Erkenntnisse](#gewonnene-erkenntnisse)

---

## Geschichte und Anwendungsfälle

### Geschichte

Das Projekt SMSWithoutBorders begann 2021 und wurde 2022 dank eines Zuschusses von Internews und späterer fortlaufender Förderung durch den Open Technology Fund (OTF) zu einem Werkzeug gegen Internetabschaltungen.

SMSWithoutBorders begann mit einem einzigen Android-Client namens SWOB (für SMSWithoutBorders), der später in RelaySMS umbenannt wurde. In den folgenden Jahren, ab 2023, begannen wir mit der Entwicklung von DekuSMS – einer SMS-App mit Unterstützung für Ende-zu-Ende-Verschlüsselung.

Zu diesem Zeitpunkt nutzten wir für RelaySMS einen Raspberry Pi und USB-Sticks zur SMS-Weiterleitung. Das war wegen Stromversorgung und anderer logistischer Probleme ineffizient. Die Ausfallzeiten des Dienstes waren extrem hoch, was zu einer geringen und dauerhaft langsamen Verbreitung führte.

Später verlagerten wir die Weiterleitung zu DekuSMS, was eine bessere Leistung brachte und die Ausfallzeiten um mehr als 90 % verringerte. Das verbesserte die Erfahrung für neue Nutzer und führte zu einer gewissen Verbreitung des Dienstes.

Unsere Erfahrung bei der Entwicklung von RelaySMS beruht darauf, dass wir selbst in einem Umfeld gelebt haben, in dem das Internet aus politischen Gründen abgeschaltet wurde. Die Abschaltung dauerte in zwei Regionen des Landes mehr als 90 Tage – ein afrikanischer Rekord. Das war 2016 in Kamerun.

### Anwendungsfälle

RelaySMS ist eine Open-Source-Kommunikationsplattform, die Kommunikation über das Internet mithilfe von SMS ermöglichen soll. Das ist vor allem in Gebieten ohne aktive Internetverbindung nützlich – häufig in abgelegenen Regionen und in Zeiten von Unruhen.

Es ist bekannt, dass Regierungen das Internet als Waffe gegen die eigene Bevölkerung einsetzen, indem sie es vollständig (in manchen Fällen teilweise) abschalten. Das hindert Menschen daran, Nachrichten und lebensrettende Informationen zu erhalten. Es behindert auch Handel und sichere Kommunikation. Unter diesen Umständen funktionieren Werkzeuge wie VPNs und viele gängige Umgehungstechniken nicht, weil sie zumindest einen gewissen Internetzugang benötigen.

Genau für diese Umstände entwickeln wir RelaySMS. Wir wissen, dass auch SMS in Zeiten von Unruhen manchmal blockiert werden, doch meist werden sie schneller wieder freigegeben als Internetverbindungen. Das könnte daran liegen, dass Gegner SMS (über die lokale Kommunikation zwischen Personen hinaus) noch nicht als Bedrohung einstufen.

---

## Technischer Überblick

RelaySMS kann auf zwei Arten genutzt werden: über Bridges oder über Plattformen (mehr dazu unten). Unabhängig vom gewählten Modus gilt:

- Der Inhalt der Nachricht wird auf dem Gerät des Nutzers verschlüsselt – mit dem Double-Ratchet-Algorithmus von Signal für Forward Secrecy.
- Die Nachrichten werden an einen Gateway-Client gesendet (meist ein Android-Gerät mit DekuSMS). Dieses Gerät leitet die eingehende Nachricht (weiterhin verschlüsselt) an eine Cloud-Instanz weiter, auf der ein Gateway-Server läuft.
- Der Gateway-Server bestimmt, für welchen Modus die Nachricht gedacht ist, und leitet sie zur Veröffentlichung an einen Bridge- oder Plattform-Server weiter.
- Die Nachricht wird dann mit Schlüsseln aus dem Vault entschlüsselt (serverseitige Software, die die Zugangsdaten der Nutzer sichert und speichert). Anschließend wird die entschlüsselte Nachricht veröffentlicht.
- Bei der Veröffentlichung auf Online-Plattformen wie Gmail erhält der Nutzer eine SMS, die den Status der Anfrage bestätigt – erfolgreich veröffentlicht oder fehlgeschlagen.

**Hinweis:** Die von Bridges empfangenen Nachrichten sind Antworten auf eine erste, vom Client gesendete Nachricht. Damit wird die Double-Ratchet-Sitzung abgeschlossen, d. h. es werden neue Schlüssel erzeugt (Ratcheting).

### Zentrale Softwarekomponenten

- Clients (Android- oder iOS-Apps)
- Gateway-Clients: Android-Geräte mit DekuSMS
- Gateway-Server: Software, die bestimmt, wohin die Nachrichten veröffentlicht werden
- Bridges – mehr dazu unten
- Plattformen – mehr dazu unten
- Vault – eine sichere Software, die sensible Daten im Namen der Nutzer speichert. Dazu gehören Sicherheitsschlüssel und Token zur Online-Veröffentlichung (mehr unter Plattformen)

---

## Weitere Möglichkeiten

Kurzfristig könnten Werkzeuge wie RelaySMS genutzt werden, um mit Online-Plattformen zu kommunizieren, die eingehende Informationen an Abonnenten weiterverbreiten. Das können Messaging-Kanäle wie WhatsApp-, Signal- oder Telegram-Gruppen sein.

---

## Plattformen

Dies ist der erste und ursprüngliche Kommunikationsmodus von RelaySMS. Dafür muss der Nutzer den Zugriff auf seine Online-Plattformen auf einer Cloud-Instanz speichern, auf der der Vault von RelaySMS läuft. Gespeichert werden OAuth2.0-Token (nur mit Veröffentlichungsrechten) und Konto-Token (für Plattformen wie Telegram). Diese Token sollen es einem Dritten ermöglichen, im Namen des Nutzers zu handeln; über die Berechtigungen (Scopes) legt der Nutzer fest, in welchem Umfang der Dritte handeln darf.

Der Nutzer muss dem Dritten vertrauen, um diese Token zu gewähren, da die Möglichkeit besteht, dass der Dritte ohne seine Zustimmung in seinem Namen handelt.

RelaySMS zeigt Nutzern, wie sie überprüfen können, ob ein Dritter über ihre eigenen Anfragen hinaus in ihrem Namen gehandelt hat. Das ist bei fast allen Plattformen Standard, da die vom Nutzer gewährten Berechtigungen es dem Dienst nicht erlauben, Aufzeichnungen über seine Aktionen zu verändern (weder zu löschen noch zu ändern).

Die eigenen Online-Plattformen auf diese Weise zu nutzen, hat Vorteile wie Beständigkeit, die Vertrauen schafft: Die Empfänger wissen, wer der Absender ist. In sozialen Medien hat der Nutzer vielleicht eine große Anhängerschaft, die davon profitiert, live über Ereignisse informiert zu werden, während der Nutzer offline ist. Diese Anhängerschaft lässt sich nicht auf ein anderes Konto übertragen, und die Nachricht muss gehört werden. Dasselbe gilt für Gruppen, in denen der Nutzer Mitglied ist.

Diese Schritte muss der Nutzer durchführen, solange er Zugang zum Internet hat. Wir empfehlen dringend, dies frühzeitig in die Vorbereitung auf eine Internetabschaltung einzubeziehen. Hier finden sich einige Anleitungen zur Vorbereitung auf eine Internetabschaltung, weitere Ressourcen unten.

Derzeit unterstützte Plattformen:

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

---

## Bridges

Dieser Veröffentlichungsmodus von RelaySMS gilt als zweitrangig, ist aber entscheidend. Wenn der Nutzer keinen Internetzugang hat, um seine Online-Plattformen zu speichern, oder Informationen versenden möchte, ohne seine Hauptkonten zu verwenden, nutzt er Bridges.

Bridges verwandeln die Telefonnummer des Nutzers in einen dauerhaften E-Mail-Alias, der Nachrichten sowohl senden als auch empfangen kann. Ein Beispielszenario:

Ein Nutzer mit der Telefonnummer +237123456789 verfasst und sendet eine Nachricht mit einem der Clients (Android oder iOS). Die Nachricht wird auf dem Gerät verschlüsselt und an einen Gateway-Client gesendet, der sie an den Gateway-Server weiterleitet. Der Gateway-Server erkennt, dass es sich um eine Bridge-Nachricht handelt, und leitet sie an den Bridge-Server weiter. Der Bridge-Server erstellt dann aus der Telefonnummer des Nutzers einen Alias und speichert die zugehörigen öffentlichen Schlüssel sicher im Vault. Ein Beispiel-Alias für die Telefonnummer dieses Nutzers wäre: 237123456789@relaysms.me.

Die Nachricht des Nutzers wird über diesen Alias an die vorgesehenen Empfänger gesendet. Das ist ein großer Vorteil, wenn die Telefonnummer des Nutzers dem Empfänger bereits bekannt ist – so entsteht Vertrauen in die Herkunft der Nachricht.

Antwortet der Empfänger auf die Nachricht, wird die Antwort verschlüsselt und per SMS an den Nutzer zurückgeleitet. Der Nutzer kann sie dann in seinem RelaySMS-Client (App) entschlüsseln.

Dieser Modus ermöglicht Kommunikation in beide Richtungen zwischen Absender und Empfänger. Sobald der Alias erstellt ist, wird jede an ihn gesendete Nachricht verschlüsselt und per SMS an den Nutzer weitergeleitet.

[Hier sollten weitere Informationen darüber folgen, was das Postfach des Alias ist und wie es gesichert wird, bis die Nachricht an den Nutzer weitergeleitet wird]

---

## Clients

Die am besten unterstützten Clients für RelaySMS sind die Android- und iOS-Clients. Sie bieten unterschiedliche Funktionen, wobei der Android-Client schneller Updates erhält als der iOS-Client.

Alle Clients integrieren dieselben standardisierten Protokolle für die Kommunikation mit dem Vault und die Veröffentlichung von Nachrichten. Jeder Client muss folgende Standards integrieren:

- Ein Konto im Vault erstellen
- Sich bei einem Konto im Vault anmelden
- Konten für folgende Protokolle im Vault speichern:
  - OAuth2.0, z. B. Bluesky
  - Authentifizierung per Telefonnummer, z. B. Telegram
  - Erste Nachrichten über Bridges veröffentlichen
  - Folgenachrichten über Bridges veröffentlichen
  - Nachrichten über gespeicherte Plattformen veröffentlichen
  - Nachrichten über gespeicherte Plattformen mit einer Geräte-ID veröffentlichen
  - Token auf dem Gerät speichern
  - Mit auf dem Gerät gespeicherten Token veröffentlichen

Hier eingeführte Konzepte:

- Geräte-ID: Ein identifizierendes Token, das sowohl im Vault als auch auf dem Client abgeleitet und gespeichert wird. Damit kann der Nutzer Nachrichten über seine gespeicherten Plattformen veröffentlichen, ohne seine Telefonnummer als primäres Identifikationsmerkmal zu verwenden. Das hilft etwa bei Dual-SIM-Telefonen, bei denen sich die zum Senden der SMS verwendete Nummer ändern kann, während alle nötigen Sendedaten weiterhin auf dem Gerät verfügbar sind. Diese Option ist optional und darf in den Clients nicht standardmäßig aktiviert sein.

- Token auf dem Gerät speichern: Die Token des Nutzers (OAuth2.0 oder telefonnummernbasiert) werden in erster Linie sicher im Vault gespeichert. Die Clients können anfordern, dass diese Token vom Vault auf das Gerät übertragen werden. Die Token werden dann bei der Veröffentlichung an die Nachricht angehängt. Bei einem Refresh-Token (einem gängigen Mechanismus bei OAuth2.0) wird das neue Token per SMS an das Gerät zurückgesendet.

Clients können jede dieser Veröffentlichungsmethoden implementieren, die sie für die Funktionen ihres Projekts benötigen.

Die Standard-Clients ermöglichen es Nutzern, sie auf eine Vault-Instanz ihrer Wahl zu richten – mehr dazu unter Self-Hosting. Dazu muss auch der zur Veröffentlichung verwendete Gateway-Client auf diese Vault-Instanz zeigen, sonst können die Nachrichten serverseitig nicht entschlüsselt werden.

Da jeder Client anders sein kann, sollte jeder Client eigene Anleitungen bereitstellen. Die Standard-Anleitungen des RelaySMS-Teams findest du hier [Anleitungen zu RelaySMS einfügen]

---

## Gateway-Clients

Gateway-Clients sind Geräte, die eingehende SMS von RelaySMS-Clients empfangen können. Sie können auf Android-Geräten oder Linux-Geräten mit USB-Modems laufen. Die Standard-Instanzen von RelaySMS verwenden Android-Geräte mit DekuSMS als Standard-Gateway-Clients. Um jedoch jeden beliebigen Empfänger in einen Gateway-Client zu verwandeln, muss lediglich eine Nutzlast im JSON-Format [Referenz einfügen] an eine Cloud-Instanz mit Gateway-Server weitergeleitet werden.

Da Gateway-Clients keine Schlüssel mit den Clients teilen (und die Clients auch nicht vorher kennen), können sie die eingehenden Nachrichten nicht entschlüsseln. Die gesendeten Nachrichten unterstützen außerdem Forward Secrecy: Jede Nachricht wird mit einem anderen Schlüssel verschlüsselt – wer also den Schlüssel einer Nachricht ermittelt, kann daraus nicht die Schlüssel der folgenden Nachrichten ableiten.

---

## Self-Hosting (wird auf Basis tatsächlicher Erfahrungen geschrieben)

- Voraussetzungen
- Plattformen hinzufügen
- Clients
- Gateway-Clients
- Unterstützung
- Bitcoin
- OSS-Spenden
- PayPal
- Mögliche Wege
- Internet per SMS
- Alle Nachrichten per SMS

---

## Gewonnene Erkenntnisse

- Stark starten: Wenn die Software veröffentlicht wird, bevor sie technisch ausgereift ist, können sich Nutzer eine negative Meinung bilden. Davon erholt man sich nur schwer, denn der erste Eindruck prägt die Meinung der Menschen nachhaltig. Zu erkennen, wann „zu früh“ ist, ist ebenfalls sehr schwierig – meist veröffentlichen wir einfach, wenn es sich „fertig anfühlt“.
- Früh eine Community aufzubauen und die Entwicklung laufend mit ihren Mitgliedern zu teilen, hält alle eingebunden und macht sie nachsichtiger gegenüber Problemen. Das haben wir mit DekuSMS erlebt: Wir haben früh einen Telegram-Kanal eröffnet und dort mit den Mitgliedern über die Entwicklung und kommende Funktionen gesprochen. Nutzer teilten dort ihre Probleme und suchten nach Neuigkeiten – und selbst wenn die Software noch nicht fertig oder fehlerhaft war, traten Menschen den Communities bei.
