# Arztpraxis Yazd - Website-Dokumentation

## Projektübersicht

Eine professionelle, vertrauenswürdige Website für eine Arztpraxis in Yazd, Iran. Die Website ist vollständig auf Persisch (Farsi) gestaltet und bietet alle wichtigen Informationen für Patienten in einer klaren, benutzerfreundlichen Struktur.

## 🌟 Hauptmerkmale

- **Seriöses, medizinisches Design** - Beruhigende Farbpalette mit Blau- und Grautönen
- **Vollständig responsiv** - Optimiert für Desktop, Tablet und Mobile
- **RTL-Support** - Rechts-nach-Links-Layout für Persisch
- **Moderne Animationen** - Sanfte Übergänge und Scroll-Effekte
- **Professionelle Typografie** - Crimson Pro für Überschriften, DM Sans für Fließtext
- **Barrierefreiheit** - Semantisches HTML und gute Kontraste

## 📁 Projektstruktur

```
arztpraxis-yazd-website/
│
├── index.html              # Startseite
├── about.html              # Über den Arzt
├── services.html           # Fachbereiche & Leistungen
├── practice.html           # Praxis/Standort
├── contact.html            # Kontakt
├── impressum.html          # Impressum/Rechtliches
│
├── assets/
│   ├── css/
│   │   └── style.css       # Haupt-Stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript-Funktionalität
│   └── images/             # Bilder-Ordner (leer, bereit für Ihre Bilder)
│
└── README.md               # Diese Datei
```

## 🎨 Design-System

### Farbpalette

- **Primary**: #2c5f8d (Dunkelblau) - Hauptfarbe, Vertrauen
- **Primary Light**: #4a9fd8 (Hellblau) - Hover-Effekte
- **Accent**: #5b9aa9 (Türkis) - Akzente
- **Neutral**: Graustufen von 50-900 - Text und Hintergründe

### Typografie

- **Display-Font**: Crimson Pro (elegant, professionell)
- **Body-Font**: DM Sans (lesbar, modern)
- **Fallback**: Scheherazade New, Tahoma (für Persisch)

### Spacing & Layout

- Container-Breite: 1200px
- Modulare Spacing-Skala: xs (0.5rem) bis 3xl (6rem)
- Border-Radius: 8px, 12px, 16px
- Schatten: Weiche, mehrschichtige Schatten

## 📄 Seiten-Details

### 1. Startseite (index.html)

- Hero-Section mit Willkommensbotschaft
- Schnellinfo-Karten (Öffnungszeiten, Adresse, Telefon)
- Service-Vorschau
- Call-to-Action Buttons

### 2. Über den Arzt (about.html)

- Persönliche Vorstellung
- Ausbildung und Qualifikationen
- Berufserfahrung
- Fachgebiete
- Behandlungsphilosophie
- Mitgliedschaften

### 3. Fachbereiche/Leistungen (services.html)

- Hauptleistungen (Diagnostik, Beratung, Behandlung, Nachsorge)
- Detaillierte Beschreibungen
- Behandelbare Krankheiten
- Diagnosemethoden
- Zusätzliche Services

### 4. Praxis/Standort (practice.html)

- Vollständige Adresse
- Öffnungszeiten (Tabelle)
- Google Maps Integration (Platzhalter)
- Anfahrtsbeschreibung
- Parkmöglichkeiten
- Praxis-Ausstattung

### 5. Kontakt (contact.html)

- Kontaktinformationen
- Kontaktformular
- Telefon, Email, WhatsApp-Links
- Schnellkontakt-Karten

### 6. Impressum (impressum.html)

- Rechtliche Informationen
- Datenschutzrichtlinien
- Patientenrechte
- Nutzungsbedingungen

## 🛠 Anpassung der Website

### Schritt 1: Texte anpassen

Ersetzen Sie folgende Platzhalter in allen HTML-Dateien:

- `[نام و نام خانوادگی]` - Name des Arztes
- `[رشته تخصصی]` - Fachrichtung
- `[نام خیابان]` - Straßenname
- `[شماره]` - Hausnummer
- `۰۳۵-XXXX-XXXX` - Telefonnummer
- `info@practice-yazd.com` - Email-Adresse

### Schritt 2: Bilder hinzufügen

Fügen Sie Ihre Bilder im Ordner `assets/images/` hinzu:

- `doctor.jpg` - Foto des Arztes
- `clinic.jpg` - Foto der Praxis
- `logo.png` - Praxis-Logo (optional)

Aktualisieren Sie dann die Bild-Platzhalter in `index.html` und anderen Seiten.

### Schritt 3: Google Maps einbinden

In `practice.html`, ersetzen Sie den Map-Platzhalter:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!YOUR_EMBED_CODE" 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

Um Ihren Embed-Code zu erhalten:
1. Gehen Sie zu Google Maps
2. Suchen Sie Ihre Adresse
3. Klicken Sie auf "Teilen" → "Karte einbetten"
4. Kopieren Sie den iframe-Code

### Schritt 4: Farben anpassen (optional)

In `assets/css/style.css`, ändern Sie die CSS-Variablen:

```css
:root {
    --primary: #2c5f8d;        /* Ihre Hauptfarbe */
    --accent: #5b9aa9;         /* Ihre Akzentfarbe */
    /* ... */
}
```

### Schritt 5: Kontaktformular aktivieren

Das Formular in `contact.html` ist derzeit auf Frontend-only eingestellt. 

Für ein funktionierendes Backend:

**Option A: PHP-Backend**
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email senden
    $to = "info@practice-yazd.com";
    $subject = "Neue Kontaktanfrage von " . $name;
    $body = "Name: $name\nTelefon: $phone\nEmail: $email\n\nNachricht:\n$message";
    
    mail($to, $subject, $body);
}
?>
```

**Option B: Email-Service (z.B. Formspree)**
1. Registrieren Sie sich bei formspree.io
2. Ersetzen Sie im Kontaktformular:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📱 Mobile Optimierung

Die Website ist vollständig responsiv mit Breakpoints bei:
- 768px (Mobile)
- 968px (Tablet)

Das mobile Menü wird automatisch bei schmalen Bildschirmen aktiviert.

## 🚀 Deployment

### Option 1: Statisches Hosting

Die Website kann auf jedem Webserver gehostet werden:

1. **Kostenlose Optionen:**
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting

2. **Upload:**
   - Laden Sie alle Dateien hoch
   - Stellen Sie sicher, dass `index.html` im Root-Verzeichnis ist

### Option 2: Shared Hosting

1. Verbinden Sie sich via FTP
2. Laden Sie alle Dateien in `public_html` oder `www` hoch
3. Überprüfen Sie die Berechtigungen

## 🔧 Browser-Kompatibilität

Getestet und optimiert für:
- ✅ Chrome/Edge (aktuelle Versionen)
- ✅ Firefox (aktuelle Versionen)
- ✅ Safari (aktuelle Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 📊 Performance

- Optimierte CSS (keine unnötigen Bibliotheken)
- Minimales JavaScript
- Lazy Loading für Bilder
- Keine externen Dependencies außer Google Fonts

## 🔐 Sicherheit

- Keine sensiblen Daten im Frontend
- XSS-Schutz durch Content Security Policy (empfohlen)
- HTTPS wird empfohlen für das Kontaktformular

## 📞 Support & Wartung

### Regelmäßige Wartung:
1. Aktualisieren Sie Öffnungszeiten
2. Prüfen Sie Links und Kontaktinformationen
3. Aktualisieren Sie das Copyright-Jahr
4. Testen Sie das Kontaktformular

### Backup:
Erstellen Sie regelmäßig Backups aller Dateien.

## 🎯 SEO-Optimierung (empfohlen)

Fügen Sie zu jeder Seite hinzu:

```html
<meta name="description" content="Beschreibung Ihrer Praxis">
<meta name="keywords" content="Arzt Yazd, [Fachgebiet], ...">
<meta property="og:title" content="Arztpraxis Yazd">
<meta property="og:description" content="...">
```

## 📝 Checkliste vor dem Launch

- [ ] Alle Platzhaltertexte ersetzt
- [ ] Telefonnummer und Email aktualisiert
- [ ] Öffnungszeiten eingetragen
- [ ] Google Maps eingebunden
- [ ] Bilder hochgeladen und Links aktualisiert
- [ ] Kontaktformular getestet
- [ ] Alle Links funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Browser-Kompatibilität geprüft
- [ ] SSL-Zertifikat installiert (HTTPS)

## 💡 Erweiterungsmöglichkeiten

Zukünftige Features, die hinzugefügt werden können:

1. **Online-Terminbuchung** - Integration mit Buchungssystem
2. **Patientenportal** - Login für Patienten
3. **Blog/News** - Gesundheitstipps und Neuigkeiten
4. **Mehrsprachigkeit** - Deutsch oder Englisch hinzufügen
5. **Live-Chat** - WhatsApp oder Tawk.to Integration
6. **Bewertungen** - Google Reviews Integration

## 📄 Lizenz

Diese Website-Vorlage ist für Ihren kommerziellen Gebrauch frei verfügbar.

## 🤝 Credits

- Design & Entwicklung: Claude (Anthropic)
- Fonts: Google Fonts (Crimson Pro, DM Sans)
- Icons: Custom SVG Icons

---

Bei Fragen oder Problemen können Sie die Kommentare im Code konsultieren oder die Dokumentation erneut durchgehen.

**Viel Erfolg mit Ihrer neuen Praxis-Website! 🏥**
