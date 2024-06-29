# 🌦️ Weather-App
Willkommen zur Weather-App! Diese Anwendung ermöglicht es Ihnen, das aktuelle Wetter für verschiedene Städte abzurufen, detaillierte Wetterinformationen anzuzeigen und Ihre bevorzugten Städte zu speichern. Die Weather-App bietet eine benutzerfreundliche Oberfläche und ist mit modernen Web-Technologien entwickelt.

[Visit the website](https://weather-app-seven-weld-63.vercel.app/)

## Funktionen

- **Aktuelles Wetter abrufen:** Zeigen Sie das aktuelle Wetter für verschiedene Städte an.
- **Wetterdetails:** Detaillierte Informationen wie Temperatur, Luftfeuchtigkeit und Windgeschwindigkeit.
- **Stadt hinzufügen:** Fügen Sie Ihre Lieblingsstädte hinzu, um das Wetter regelmäßig zu überprüfen.
- **Responsive Design:** Optimiert für alle Geräte, damit Sie das Wetter unterwegs problemlos verfolgen können.
- **Moderne Technologie:** Entwickelt mit React, Tailwind CSS und Vite für eine schnelle und effiziente Benutzererfahrung.

1. Repository klonen:
    ```sh
    git@github.com:Hossaini1/weather-app.git
    ```
2. In das Projektverzeichnis wechseln:
    ```sh
    cd weather-app
    ```
3. Abhängigkeiten installieren:
    ```sh
    npm install
    ```
    4. .env Datei mit eigene KEY erstellen:
   - VITE_API_KEY=your_omdb_api_key
    
4. Entwicklungsserver starten:
    ```sh
    npm run dev
    ```

## Technologien

- **React**: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.
- **Tailwind CSS**: Ein modernes CSS-Framework für das Design von Benutzeroberflächen.
- **Vite**: Ein schnelleres Frontend-Build-Tool im Vergleich zu traditionellen Bundlern.
- **Leaflet**: Eine Open-Source-Bibliothek für interaktive Karten.
- **OpenWeatherMap API**: Eine API zur Abruf von Wetterinformationen, die für die Wetterdaten verwendet wird.
- **LocalStorage**: Zur Speicherung der bevorzugten Städte lokal im Browser.
  

## Projektstruktur

```plaintext
project-root/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   ├── Leaflet.jsx
│   │   ├── Weather.jsx
│   │
│   ├── App.jsx
│   ├── CityContext.jsx
│   ├── app.css
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.json
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
