import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "it" | "en";

type Dict = Record<string, string | string[] | Record<string, string>>;

const dict: Record<Lang, any> = {
  it: {
    nav: {
      about: "Appartamento",
      gallery: "Galleria",
      amenities: "Servizi",
      reviews: "Recensioni",
      location: "Posizione",
      contact: "Contatti",
      book: "Prenota su Booking.com",
    },
    hero: {
      eyebrow: "Peschiera del Garda · Lago di Garda · Italia",
      title: "Marin Apartment",
      subtitle: "Il tuo rifugio elegante sul Lago di Garda — Peschiera del Garda",
      desc: "Appartamento di 52 m² recentemente rinnovato, a pochi passi dal Lago di Garda e a 10 minuti dal centro storico.",
      ratingLabel: "8,9 — Favoloso",
      verified: "Verificato su Booking.com (8 recensioni)",
      ctaBook: "Prenota su Booking.com",
      ctaContact: "Contatta l'host",
      scroll: "Scorri ↓",
    },
    about: {
      eyebrow: "L'Appartamento",
      title: "Un rifugio raffinato a Peschiera del Garda",
      meta: "52 m² · Una camera da letto · 3° piano (senza ascensore) · Fino a 4 ospiti · Recentemente rinnovato",
      h1: "Spazio confortevole",
      p1: "Marin Apartment a Peschiera del Garda offre un appartamento con una camera da letto, soggiorno, terrazza, balcone e Wi-Fi gratuito — un rifugio sereno a pochi passi dal Lago di Garda.",
      h2: "Servizi moderni",
      p2: "L'appartamento dispone di aria condizionata (pompa di calore), angolo cottura completamente attrezzato, lavatrice e parcheggio privato gratuito in loco. Zona pranzo, divano letto e calde pavimentazioni in parquet completano lo spazio.",
      h3: "Posizione comoda",
      p3: "A soli 2,2 km dalla spiaggia Bergamini, 3,9 km da Gardaland e 18 km dall'aeroporto di Verona. La stazione di Peschiera del Garda è a soli 2 km, con collegamenti diretti per Verona, Venezia e Milano.",
      badgeGuests: "Fino a 4 ospiti",
      badgeMeta: "52 m² · 1 camera",
    },
    gallery: {
      eyebrow: "Galleria",
      title: "Spazi che raccontano una storia",
      close: "Chiudi",
      prev: "Precedente",
      next: "Successiva",
    },
    amenities: {
      eyebrow: "Servizi",
      title: "Tutto ciò che serve, con stile",
      langs: "Lingue parlate dall'host:",
      icons: [
        "Parcheggio privato gratuito",
        "Wi-Fi gratuito",
        "Aria condizionata",
        "Terrazza & balcone",
        "Cucina attrezzata",
        "Lavatrice & asciugatrice",
        "Smart TV",
        "Macchina da caffè",
      ],
      groups: [
        { title: "I più richiesti", items: ["Parcheggio privato gratuito", "Wi-Fi gratuito", "Aria condizionata", "Terrazza", "Balcone", "Smart TV", "Lavatrice", "Doccia"] },
        { title: "Cucina", items: ["Tavolo da pranzo", "Macchina da caffè", "Piano cottura", "Forno", "Microonde", "Frigorifero", "Bollitore elettrico", "Stoviglie", "Prodotti per la pulizia", "Asciugatrice"] },
        { title: "Bagno", items: ["Vasca o doccia", "Bidet", "Asciugacapelli", "Articoli da toeletta gratuiti", "Asciugamani", "Carta igienica"] },
        { title: "Soggiorno & camera", items: ["Zona pranzo", "Divano", "Zona salotto", "Biancheria", "Armadio", "Cabina armadio", "Divano letto", "Pavimenti in parquet", "Riscaldamento", "Ventilatore"] },
        { title: "Esterni", items: ["Barbecue", "Patio", "Balcone", "Terrazza", "Vista montagna", "Vista giardino"] },
        { title: "Media", items: ["Smart TV", "Canali cavo & satellite", "Lettore CD", "Radio"] },
        { title: "Extra", items: ["Non fumatori", "Libri, DVD e musica per bambini", "Set per tè/caffè"] },
      ],
    },
    reviews: {
      eyebrow: "Recensioni",
      title: "Recensioni da Booking.com",
      ratingWord: "Favoloso",
      verifiedReviews: "8 recensioni verificate",
      categories: [
        { label: "Personale", score: 9.4 },
        { label: "Servizi", score: 9.7 },
        { label: "Pulizia", score: 9.2 },
        { label: "Comfort", score: 9.7 },
        { label: "Rapporto qualità-prezzo", score: 9.5 },
        { label: "Posizione", score: 9.2 },
      ],
      cards: [
        { name: "Vitalii", flag: "🇩🇪", quote: "Ci siamo trovati benissimo. Torneremo volentieri. La comunicazione è stata eccellente, tutto pulito e confortevole. La cucina ha tutto il necessario. Siamo molto soddisfatti. Lo consiglio sicuramente." },
        { name: "Piero", flag: "🇮🇹", quote: "Ottima posizione tranquilla. A 10 minuti a piedi dal centro. Accesso a strada privata con parcheggio. Appartamento al 3° piano senza ascensore, recentemente ristrutturato, ambienti grandi e confortevoli. Riscaldamento a termosifoni e aria condizionata a pompa di calore. Bellissimo…" },
      ],
      footnote: "Recensioni verificate da ospiti che hanno effettivamente soggiornato al Marin Apartment.",
      ctaAll: "Leggi tutte le recensioni su Booking.com",
      ctaCheck: "Verifica disponibilità & prenota",
    },
    neighborhood: {
      eyebrow: "Dintorni",
      title: "Il quartiere",
      groups: [
        { title: "Subito fuori dalla porta", items: ["Lago di Garda — 0 m", "Parco degli Aviatori — 800 m", "Parco Catullo — 1,2 km", "Centro storico & mura veneziane UNESCO — ~10 min a piedi", "Ristorante La Botteghina — 300 m", "Trattoria Bar Alba e Nicola — 350 m", "La Bottega della Piada — 450 m"] },
        { title: "Attrazioni principali", items: ["Spiaggia Bergamini — 2,2 km", "Gardaland — 3,9 km", "Torre di San Martino della Battaglia — 9 km", "Castello di Sirmione — 10 km", "Museo dell'Olio d'Oliva — 11 km", "Grotte di Catullo — 11 km", "Parco Giardino Sigurtà — 12 km", "Parco Natura Viva — 12 km"] },
        { title: "Come arrivare", items: ["Aeroporto di Verona — 18 km", "Aeroporto di Montichiari — 29 km", "Bergamo Orio al Serio — 84 km", "Stazione di Peschiera del Garda — 2 km", "Treni diretti per Verona, Venezia, Milano"] },
      ],
    },
    location: {
      eyebrow: "Posizione",
      title1: "Sulla riva sud",
      title2: "del Lago di Garda.",
      p1pre: "Marin Apartment si trova in ",
      address: "Viale degli Alpini 12/A",
      p1post: ", \"Residenza Girasole Palazzina A\" Nr. 31, a Peschiera del Garda (provincia di Verona), sulla sponda veneta del lago.",
      p2: "A pochi passi dall'acqua, dalle mura veneziane patrimonio UNESCO e dai migliori ristoranti del centro storico — la base perfetta per scoprire il Lago di Garda meridionale.",
      addressFull: "Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italia",
      license: "Licenza: 023059-LOC-01989",
    },
    rules: {
      eyebrow: "Regole della casa",
      title: "Regole della casa",
      list: [
        { label: "Check-in", value: "15:00 – 23:00 (preavviso richiesto)" },
        { label: "Check-out", value: "08:00 – 11:00" },
        { label: "Fumo", value: "Non fumatori" },
        { label: "Animali", value: "Non ammessi" },
        { label: "Feste/Eventi", value: "Non consentiti" },
        { label: "Bambini", value: "Benvenuti dai 3 anni in su" },
        { label: "Parcheggio", value: "Privato gratuito in loco" },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      title1: "Parliamone.",
      title2: "Il vostro soggiorno inizia qui.",
      desc: "Scrivete direttamente all'host per disponibilità o domande — risposta entro 24 ore. Oppure prenotate in pochi click su Booking.com.",
      email: "Email",
      phone: "Telefono",
      whatsapp: "WhatsApp",
      name: "Nome",
      dates: "Date desiderate",
      datesPh: "es. 12–19 luglio",
      message: "Messaggio",
      send: "Invia richiesta",
      sending: "Invio…",
      required: "Compila i campi richiesti.",
      mailOpen: "Apertura del client email…",
      requestSubject: "richiesta di",
    },
    footer: {
      desc: "Appartamento privato recentemente rinnovato sulla riva sud del Lago di Garda, a Peschiera del Garda (VR).",
      addressLabel: "Indirizzo",
      contactsLabel: "Contatti",
      rights: "Tutti i diritti riservati.",
      legal: "Legale",
      terms: "Termini e Condizioni",
      cookies: "Cookie Policy",
    },
    booking: {
      ratingWord: "Favoloso",
      reviewsShort: "8 recensioni",
      directHost: "Marin Apartment — direttamente dall'host",
      bookShort: "Prenota",
    },
    cookie: {
      title: "Utilizziamo i cookie",
      desc: "Questo sito utilizza cookie tecnici necessari al funzionamento e cookie di terze parti (es. Google Maps) per migliorare l'esperienza. Puoi accettare o rifiutare i cookie non essenziali.",
      accept: "Accetta tutti",
      reject: "Solo necessari",
      more: "Cookie Policy",
    },
    legal: {
      backHome: "← Torna alla home",
      lastUpdated: "Ultimo aggiornamento",
      terms: {
        title: "Termini e Condizioni",
        intro: "I presenti Termini e Condizioni regolano l'utilizzo del sito web di Marin Apartment e la prenotazione del soggiorno presso l'appartamento sito in Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italia.",
        sections: [
          { h: "1. Oggetto", p: "Il sito ha lo scopo di presentare l'appartamento Marin Apartment e di facilitare i contatti con l'host per richieste di prenotazione. La prenotazione effettiva avviene tramite Booking.com o tramite contatto diretto con l'host." },
          { h: "2. Prenotazioni e pagamenti", p: "Le prenotazioni effettuate tramite Booking.com sono soggette ai termini di Booking.com. Per prenotazioni dirette, modalità di pagamento, caparra ed eventuali penali in caso di cancellazione vengono concordate per iscritto via email prima della conferma." },
          { h: "3. Check-in e check-out", p: "Check-in dalle 15:00 alle 23:00 (con preavviso). Check-out dalle 08:00 alle 11:00. È richiesto un documento d'identità valido al momento dell'arrivo, come previsto dalla normativa italiana." },
          { h: "4. Regole della casa", p: "L'appartamento è non fumatori. Animali domestici non ammessi. Non sono consentite feste o eventi. Bambini benvenuti dai 3 anni in su. Gli ospiti sono responsabili di eventuali danni causati a beni o arredi." },
          { h: "5. Tassa di soggiorno", p: "La tassa di soggiorno comunale, ove applicabile, è a carico dell'ospite e va versata in loco secondo le tariffe stabilite dal Comune di Peschiera del Garda." },
          { h: "6. Responsabilità", p: "L'host non è responsabile per oggetti smarriti o danneggiati durante il soggiorno, né per disagi dovuti a cause di forza maggiore (interruzioni di servizi, eventi atmosferici, ecc.)." },
          { h: "7. Privacy", p: "Il trattamento dei dati personali è effettuato nel rispetto del Regolamento UE 2016/679 (GDPR). I dati raccolti tramite il modulo di contatto vengono utilizzati esclusivamente per rispondere alle richieste degli utenti." },
          { h: "8. Legge applicabile e foro competente", p: "I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente in via esclusiva il Foro di Verona." },
          { h: "9. Contatti", p: "Per qualsiasi domanda relativa ai presenti Termini, contattare l'host all'indirizzo email marinustegernsee2000@yahoo.de." },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        intro: "La presente Cookie Policy descrive le tipologie di cookie utilizzati dal sito web di Marin Apartment e le modalità con cui l'utente può gestirli.",
        sections: [
          { h: "Cosa sono i cookie", p: "I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell'utente per consentire il corretto funzionamento del sito o per migliorare l'esperienza di navigazione." },
          { h: "Cookie tecnici (necessari)", p: "Utilizziamo cookie tecnici necessari al corretto funzionamento del sito (ad esempio per memorizzare la preferenza linguistica e il consenso ai cookie). Questi cookie non richiedono il consenso dell'utente." },
          { h: "Cookie di terze parti", p: "Il sito incorpora contenuti di terze parti, in particolare la mappa di Google Maps. Tali servizi possono installare cookie propri sul dispositivo dell'utente. Per maggiori informazioni, consulta le rispettive privacy policy: Google (https://policies.google.com/privacy)." },
          { h: "Cookie analitici", p: "Attualmente non utilizziamo cookie analitici proprietari né di terze parti per profilazione." },
          { h: "Gestione dei cookie", p: "L'utente può gestire o disattivare i cookie tramite le impostazioni del proprio browser. La disattivazione di alcuni cookie potrebbe compromettere il corretto funzionamento del sito." },
          { h: "Modifiche", p: "Ci riserviamo il diritto di aggiornare la presente Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina." },
          { h: "Contatti", p: "Per qualsiasi domanda, contattare l'host all'indirizzo email marinustegernsee2000@yahoo.de." },
        ],
      },
    },
  },

  en: {
    nav: {
      about: "Apartment",
      gallery: "Gallery",
      amenities: "Amenities",
      reviews: "Reviews",
      location: "Location",
      contact: "Contact",
      book: "Book on Booking.com",
    },
    hero: {
      eyebrow: "Peschiera del Garda · Lake Garda · Italy",
      title: "Marin Apartment",
      subtitle: "Your elegant retreat on Lake Garda — Peschiera del Garda",
      desc: "A recently renovated 52 m² apartment, steps from Lake Garda and 10 minutes from the historic center.",
      ratingLabel: "8.9 — Fabulous",
      verified: "Verified on Booking.com (8 reviews)",
      ctaBook: "Book on Booking.com",
      ctaContact: "Contact the host",
      scroll: "Scroll ↓",
    },
    about: {
      eyebrow: "The Apartment",
      title: "A refined retreat in Peschiera del Garda",
      meta: "52 m² · One bedroom · 3rd floor (no elevator) · Up to 4 guests · Recently renovated",
      h1: "Comfortable Living Space",
      p1: "Marin Apartment in Peschiera del Garda offers a one-bedroom apartment with a living room, terrace, balcony, and free WiFi — a serene retreat just steps from Lake Garda.",
      h2: "Modern Amenities",
      p2: "The apartment includes air conditioning (heat pump), a fully equipped kitchenette, washing machine, and free on-site private parking. Dining area, sofa bed, and warm parquet floors complete the space.",
      h3: "Convenient Location",
      p3: "Just 2.2 km from Bergamini Beach, 3.9 km from Gardaland, and 18 km from Verona Airport. The Peschiera del Garda train station is only 2 km away, with direct connections to Verona, Venice, and Milan.",
      badgeGuests: "Up to 4 guests",
      badgeMeta: "52 m² · 1 bedroom",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Spaces that tell a story",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    amenities: {
      eyebrow: "Amenities",
      title: "Everything you need, with style",
      langs: "Languages spoken by the host:",
      icons: [
        "Free private parking",
        "Free Wi-Fi",
        "Air conditioning",
        "Terrace & balcony",
        "Fully equipped kitchen",
        "Washing machine & dryer",
        "Smart TV",
        "Coffee machine",
      ],
      groups: [
        { title: "Most popular", items: ["Free private parking", "Free Wi-Fi", "Air conditioning", "Terrace", "Balcony", "Smart TV", "Washing machine", "Shower"] },
        { title: "Kitchen", items: ["Dining table", "Coffee machine", "Stovetop", "Oven", "Microwave", "Refrigerator", "Electric kettle", "Dishware", "Cleaning products", "Dryer"] },
        { title: "Bathroom", items: ["Bathtub or shower", "Bidet", "Hairdryer", "Free toiletries", "Towels", "Toilet paper"] },
        { title: "Living & bedroom", items: ["Dining area", "Sofa", "Sitting area", "Linens", "Wardrobe", "Walk-in closet", "Sofa bed", "Parquet floors", "Heating", "Fan"] },
        { title: "Outdoors", items: ["BBQ", "Patio", "Balcony", "Terrace", "Mountain view", "Garden view"] },
        { title: "Media", items: ["Smart TV", "Cable & satellite channels", "CD player", "Radio"] },
        { title: "Extras", items: ["Non-smoking", "Books, DVDs and music for children", "Tea/coffee set"] },
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      title: "Reviews from Booking.com",
      ratingWord: "Fabulous",
      verifiedReviews: "8 verified reviews",
      categories: [
        { label: "Staff", score: 9.4 },
        { label: "Facilities", score: 9.7 },
        { label: "Cleanliness", score: 9.2 },
        { label: "Comfort", score: 9.7 },
        { label: "Value for money", score: 9.5 },
        { label: "Location", score: 9.2 },
      ],
      cards: [
        { name: "Vitalii", flag: "🇩🇪", quote: "We enjoyed it very much. We would love to come back. The communication was excellent, everything was clean and comfortable. The kitchen has everything you need. We were very satisfied. I can definitely recommend it." },
        { name: "Piero", flag: "🇮🇹", quote: "Excellent quiet location. 10-minute walk from the center. Access to private road with parking. 3rd-floor apartment without elevator, recently renovated, large and comfortable rooms. Heating with radiators and heat pump air conditioning. Beautiful…" },
      ],
      footnote: "Verified reviews from guests who actually stayed at Marin Apartment.",
      ctaAll: "Read all reviews on Booking.com",
      ctaCheck: "Check availability & book",
    },
    neighborhood: {
      eyebrow: "Surroundings",
      title: "The neighborhood",
      groups: [
        { title: "Right outside the door", items: ["Lake Garda — 0 m", "Parco degli Aviatori — 800 m", "Parco Catullo — 1.2 km", "Historic center & UNESCO Venetian walls — ~10 min walk", "La Botteghina restaurant — 300 m", "Trattoria Bar Alba e Nicola — 350 m", "La Bottega della Piada — 450 m"] },
        { title: "Top attractions", items: ["Bergamini Beach — 2.2 km", "Gardaland — 3.9 km", "Tower of San Martino della Battaglia — 9 km", "Sirmione Castle — 10 km", "Olive Oil Museum — 11 km", "Grottoes of Catullus — 11 km", "Parco Giardino Sigurtà — 12 km", "Parco Natura Viva — 12 km"] },
        { title: "Getting here", items: ["Verona Airport — 18 km", "Montichiari Airport — 29 km", "Bergamo Orio al Serio — 84 km", "Peschiera del Garda train station — 2 km", "Direct trains to Verona, Venice, Milan"] },
      ],
    },
    location: {
      eyebrow: "Location",
      title1: "On the southern shore",
      title2: "of Lake Garda.",
      p1pre: "Marin Apartment is located at ",
      address: "Viale degli Alpini 12/A",
      p1post: ", \"Residenza Girasole Palazzina A\" No. 31, in Peschiera del Garda (province of Verona), on the Veneto side of the lake.",
      p2: "Just steps from the water, the UNESCO Venetian walls and the best restaurants in the historic center — the perfect base to discover southern Lake Garda.",
      addressFull: "Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italy",
      license: "License: 023059-LOC-01989",
    },
    rules: {
      eyebrow: "House rules",
      title: "House rules",
      list: [
        { label: "Check-in", value: "3:00 PM – 11:00 PM (advance notice required)" },
        { label: "Check-out", value: "8:00 AM – 11:00 AM" },
        { label: "Smoking", value: "Non-smoking" },
        { label: "Pets", value: "Not allowed" },
        { label: "Parties/Events", value: "Not allowed" },
        { label: "Children", value: "Welcome from age 3 and up" },
        { label: "Parking", value: "Free private on-site" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title1: "Let's talk.",
      title2: "Your stay starts here.",
      desc: "Write directly to the host for availability or questions — reply within 24 hours. Or book in a few clicks on Booking.com.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      name: "Name",
      dates: "Preferred dates",
      datesPh: "e.g. July 12–19",
      message: "Message",
      send: "Send request",
      sending: "Sending…",
      required: "Please fill in the required fields.",
      mailOpen: "Opening email client…",
      requestSubject: "request from",
    },
    footer: {
      desc: "Privately owned, recently renovated apartment on the southern shore of Lake Garda, in Peschiera del Garda (VR).",
      addressLabel: "Address",
      contactsLabel: "Contacts",
      rights: "All rights reserved.",
      legal: "Legal",
      terms: "Terms & Conditions",
      cookies: "Cookie Policy",
    },
    booking: {
      ratingWord: "Fabulous",
      reviewsShort: "8 reviews",
      directHost: "Marin Apartment — directly from the host",
      bookShort: "Book",
    },
    cookie: {
      title: "We use cookies",
      desc: "This site uses technical cookies necessary for operation and third-party cookies (e.g. Google Maps) to improve your experience. You can accept or reject non-essential cookies.",
      accept: "Accept all",
      reject: "Necessary only",
      more: "Cookie Policy",
    },
    legal: {
      backHome: "← Back to home",
      lastUpdated: "Last updated",
      terms: {
        title: "Terms & Conditions",
        intro: "These Terms & Conditions govern the use of the Marin Apartment website and the booking of stays at the apartment located at Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italy.",
        sections: [
          { h: "1. Purpose", p: "The website is intended to present Marin Apartment and to facilitate contact with the host for booking inquiries. Actual bookings are made through Booking.com or via direct contact with the host." },
          { h: "2. Bookings and payments", p: "Bookings made through Booking.com are subject to Booking.com's terms. For direct bookings, payment terms, deposits and any cancellation fees are agreed in writing via email before confirmation." },
          { h: "3. Check-in and check-out", p: "Check-in from 3:00 PM to 11:00 PM (with prior notice). Check-out from 8:00 AM to 11:00 AM. A valid ID document is required upon arrival, as required by Italian law." },
          { h: "4. House rules", p: "The apartment is non-smoking. Pets are not allowed. Parties and events are not permitted. Children are welcome from age 3. Guests are responsible for any damage caused to property or furnishings." },
          { h: "5. Tourist tax", p: "The municipal tourist tax, where applicable, is the guest's responsibility and must be paid on site according to the rates set by the Municipality of Peschiera del Garda." },
          { h: "6. Liability", p: "The host is not responsible for items lost or damaged during the stay, nor for inconvenience due to force majeure (service interruptions, weather events, etc.)." },
          { h: "7. Privacy", p: "Personal data is processed in accordance with EU Regulation 2016/679 (GDPR). Data collected through the contact form is used exclusively to respond to user inquiries." },
          { h: "8. Applicable law and jurisdiction", p: "These Terms are governed by Italian law. Any dispute is subject to the exclusive jurisdiction of the Court of Verona." },
          { h: "9. Contact", p: "For any question regarding these Terms, please contact the host at marinustegernsee2000@yahoo.de." },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        intro: "This Cookie Policy describes the types of cookies used by the Marin Apartment website and how the user can manage them.",
        sections: [
          { h: "What are cookies", p: "Cookies are small text files that visited websites save on the user's device to allow the site to function properly or to improve the browsing experience." },
          { h: "Technical (necessary) cookies", p: "We use technical cookies necessary for the proper functioning of the site (for example to remember language preference and cookie consent). These cookies do not require user consent." },
          { h: "Third-party cookies", p: "The site embeds third-party content, in particular the Google Maps map. Such services may install their own cookies on the user's device. For more information, see their respective privacy policies: Google (https://policies.google.com/privacy)." },
          { h: "Analytics cookies", p: "We currently do not use first-party or third-party analytics cookies for profiling." },
          { h: "Managing cookies", p: "You can manage or disable cookies via your browser settings. Disabling certain cookies may affect the proper functioning of the site." },
          { h: "Changes", p: "We reserve the right to update this Cookie Policy at any time. Changes will be published on this page." },
          { h: "Contact", p: "For any question, please contact the host at marinustegernsee2000@yahoo.de." },
        ],
      },
    },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: any };

const I18nCtx = createContext<Ctx>({ lang: "it", setLang: () => {}, t: dict.it });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("marin_lang") as Lang | null;
    if (saved === "it" || saved === "en") {
      setLangState(saved);
    } else {
      const browser = navigator.language?.toLowerCase().startsWith("it") ? "it" : "en";
      setLangState(browser);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("marin_lang", l);
  };

  return (
    <I18nCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  return useContext(I18nCtx);
}