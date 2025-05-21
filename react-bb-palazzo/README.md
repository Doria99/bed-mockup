# B&B Palazzo Fiorentino - Sito Web React

Questo progetto è un'implementazione React del sito web per il B&B Palazzo Fiorentino, una struttura ricettiva situata nel centro storico di Firenze. Il sito è stato sviluppato utilizzando React e Vite per offrire un'esperienza utente moderna, veloce e reattiva.

## 🏠 Panoramica

Il sito web del B&B Palazzo Fiorentino è progettato per mostrare la struttura, le camere disponibili, i servizi offerti e facilitare le prenotazioni. Il design riflette lo stile toscano e l'atmosfera accogliente della struttura.

## ✨ Caratteristiche

- **Design Responsive**: Layout completamente adattabile a dispositivi desktop, tablet e mobile
- **Componenti React Modulari**: Architettura basata su componenti per una facile manutenzione
- **Stile Toscano**: Utilizzo di colori e elementi decorativi che richiamano lo stile fiorentino
- **Ottimizzazioni per Dispositivi Mobili**: Prestazioni ottimizzate per tutti i dispositivi

## 🧩 Struttura del Progetto

```
src/
├── components/           # Componenti React
│   ├── Booking/          # Componente per la prenotazione
│   ├── Footer/           # Footer del sito
│   ├── Header/           # Header con navigazione
│   ├── Location/         # Sezione con mappa e informazioni sulla posizione
│   ├── Reviews/          # Recensioni degli ospiti
│   ├── Rooms/            # Presentazione delle camere disponibili
│   ├── Services/         # Servizi offerti dal B&B
│   └── Welcome/          # Sezione di benvenuto
├── App.jsx              # Componente principale
├── main.jsx             # Entry point dell'applicazione
└── style.css            # Stili globali
```

## 🚀 Installazione e Avvio

### Prerequisiti

- Node.js (versione 14.x o superiore)
- npm o yarn

### Installazione

1. Clona il repository
   ```bash
   git clone [url-del-repository]
   cd react-bb-palazzo
   ```

2. Installa le dipendenze
   ```bash
   npm install
   # oppure
   yarn
   ```

3. Avvia il server di sviluppo
   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

4. Apri il browser e vai a `http://localhost:5173`

## 🔧 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Visualizza la build di produzione in locale
- `npm run lint` - Esegue il linting del codice

## 📦 Dipendenze Principali

- React 18.2.0
- React Router 6.22.0
- Font Awesome 6.5.1
- Vite 5.0.8

## 🎨 Personalizzazione

Il sito utilizza variabili CSS per i colori e altri valori di stile, che possono essere facilmente modificati nei file CSS per adattarsi a diverse esigenze di branding.

## 📱 Ottimizzazioni Mobile

Il sito include ottimizzazioni specifiche per dispositivi mobili:

- Layout responsive che si adatta a diverse dimensioni dello schermo
- Ottimizzazioni per il touch su dispositivi iOS
- Animazioni ottimizzate per prestazioni migliori su dispositivi meno potenti

## 🌐 Deployment

Per il deployment in produzione:

1. Crea la build di produzione
   ```bash
   npm run build
   # oppure
   yarn build
   ```

2. La cartella `dist` conterrà i file ottimizzati pronti per essere caricati su un server web

## 📝 Licenza

Tutti i diritti riservati - B&B Palazzo Fiorentino

---

Creato con ❤️ per offrire un'esperienza digitale all'altezza dell'ospitalità toscana.