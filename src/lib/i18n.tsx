import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "it" | "en";

export const dict = {
  it: {
    nav: {
      about: "L'Appartamento",
      gallery: "Galleria",
      amenities: "Servizi",
      reviews: "Recensioni",
      location: "Posizione",
      contact: "Contatti",
      book: "Prenota ora",
    },
    hero: {
      eyebrow: "Peschiera del Garda",
      title: "Marin Apartment",
      subtitle: "Il tuo rifugio sul Lago di Garda.",
      desc: "Appartamento recentemente ristrutturato a pochi passi dal centro storico e dalle rive del lago. Comfort moderno in un'atmosfera senza tempo.",
      ctaBook: "Prenota su Booking.com",
      ctaContact: "Richiedi disponibilità",
      ratingLabel: "8.9/10 Favoloso",
      verified: "Recensioni verificate",
      scroll: "Scopri di più",
    },
    about: {
      eyebrow: "L'Appartamento",
      title: "Recentemente ristrutturato, pensato per il tuo relax.",
      meta: "52 m² · 1 Camera · 1 Bagno · Fino a 4 Ospiti",
      h1: "Spazi Moderni",
      p1: "Marin Apartment offre un ambiente luminoso e accogliente, con arredi scelti con cura per garantire il massimo comfort durante il tuo soggiorno.",
      h2: "Posizione Strategica",
      p2: "Situato in una zona tranquilla di Peschiera del Garda, permette di raggiungere il lago e il centro storico con una breve passeggiata.",
      h3: "Comfort Completo",
      p3: "Cucina attrezzata, aria condizionata, Wi-Fi gratuito e parcheggio privato: tutto ciò di cui hai bisogno per sentirti a casa.",
      badgeGuests: "Ideale per coppie",
      badgeMeta: "o piccole famiglie",
    },
    gallery: {
      eyebrow: "Galleria",
      title: "Uno sguardo all'interno.",
      close: "Chiudi",
      prev: "Precedente",
      next: "Successiva",
    },
    amenities: {
      eyebrow: "Servizi",
      title: "Tutto quello che ti serve.",
      icons: [
        "Parcheggio gratuito",
        "Wi-Fi veloce",
        "Aria condizionata",
        "Riscaldamento",
        "Cucina completa",
        "Lavatrice",
        "Smart TV",
        "Macchina caffè",
      ],
      langs: "Parliamo:",
      groups: [
        {
          title: "Soggiorno",
          items: [
            "Wi-Fi gratuito",
            "Aria condizionata",
            "Riscaldamento",
            "Divano letto",
            "Smart TV",
          ],
        },
        {
          title: "Cucina e Pranzo",
          items: [
            "Piano cottura",
            "Forno",
            "Frigorifero",
            "Macchina caffè",
            "Bollitore",
            "Utensili da cucina",
          ],
        },
        {
          title: "Bagno e Camera",
          items: [
            "Letto matrimoniale",
            "Armadio",
            "Doccia",
            "Asciugacapelli",
            "Lavatrice",
            "Asciugamani",
          ],
        },
        {
          title: "Esterni",
          items: ["Balcone", "Vista giardino", "Parcheggio privato gratuito", "Zona tranquilla"],
        },
      ],
    },
    reviews: {
      eyebrow: "Recensioni",
      title: "Cosa dicono i nostri ospiti",
      ratingWord: "Favoloso",
      verifiedReviews: "8 recensioni verificate",
      categories: [
        { label: "Staff", score: 9.4 },
        { label: "Servizi", score: 9.7 },
        { label: "Pulizia", score: 9.2 },
        { label: "Comfort", score: 9.7 },
        { label: "Rapporto qualità-prezzo", score: 9.5 },
        { label: "Posizione", score: 9.2 },
      ],
      cards: [
        {
          name: "Vitalii",
          flag: "🇩🇪",
          quote:
            "Ci è piaciuto molto. Ci piacerebbe tornare. La comunicazione è stata eccellente, tutto era pulito e confortevole. La cucina ha tutto il necessario. Siamo rimasti molto soddisfatti. Posso sicuramente consigliarlo.",
        },
        {
          name: "Piero",
          flag: "🇮🇹",
          quote:
            "Ottima posizione tranquilla. 10 minuti a piedi dal centro. Accesso a strada privata con parcheggio. Appartamento al 3° piano senza ascensore, recentemente ristrutturato, camere ampie e confortevoli. Riscaldamento con termosifoni e aria condizionata a pompa di calore. Bellissimo…",
        },
      ],
      footnote: "Recensioni reali da ospiti che hanno soggiornato presso Marin Apartment.",
      ctaAll: "Leggi tutte su Booking.com",
      ctaCheck: "Verifica disponibilità",
    },
    neighborhood: {
      eyebrow: "Dintorni",
      title: "Il quartiere",
      groups: [
        {
          title: "Subito fuori dalla porta",
          items: [
            "Lago di Garda — 0 m",
            "Parco degli Aviatori — 800 m",
            "Parco Catullo — 1,2 km",
            "Centro storico & mura veneziane UNESCO — ~10 min a piedi",
            "Ristorante La Botteghina — 300 m",
            "Trattoria Bar Alba e Nicola — 350 m",
            "La Bottega della Piada — 450 m",
          ],
        },
        {
          title: "Attrazioni principali",
          items: [
            "Spiaggia Bergamini — 2,2 km",
            "Gardaland — 3,9 km",
            "Torre di San Martino della Battaglia — 9 km",
            "Castello di Sirmione — 10 km",
            "Museo dell'Olio d'Oliva — 11 km",
            "Grotte di Catullo — 11 km",
            "Parco Giardino Sigurtà — 12 km",
            "Parco Natura Viva — 12 km",
          ],
        },
        {
          title: "Come arrivare",
          items: [
            "Aeroporto di Verona — 18 km",
            "Aeroporto di Montichiari — 29 km",
            "Bergamo Orio al Serio — 84 km",
            "Stazione di Peschiera del Garda — 2 km",
            "Treni diretti per Verona, Venezia, Milano",
          ],
        },
      ],
    },
    location: {
      eyebrow: "Posizione",
      title1: "Sulla riva sud",
      title2: "del Lago di Garda.",
      p1pre: "Marin Apartment si trova in ",
      address: "Viale degli Alpini 12/A",
      p1post:
        ', "Residenza Girasole Palazzina A" Nr. 31, a Peschiera del Garda (provincia di Verona), sulla sponda veneta del lago.',
      p2: "A pochi passi dall'acqua, dalle mura veneziane patrimonio UNESCO e dai migliori ristoranti del centro storico — la base perfetta per scoprire il Lago di Garda meridionale.",
      addressFull: "Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italia",
      license: "Licenza: 023059-LOC-01989",
    },
    rules: {
      eyebrow: "Regole della casa",
      title: "Regole della casa",
      list: [
        { label: "Check-in", value: "15:00 – 23:00 (previo avviso)" },
        { label: "Check-out", value: "08:00 – 11:00" },
        { label: "Fumo", value: "Non fumatori" },
        { label: "Animali", value: "Non ammessi" },
        { label: "Feste/Eventi", value: "Non ammessi" },
        { label: "Bambini", value: "Benvenuti dai 3 anni in su" },
        { label: "Parcheggio", value: "Privato gratuito in loco" },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      title1: "Parliamone.",
      title2: "Il tuo soggiorno inizia qui.",
      desc: "Scrivi direttamente all'host per disponibilità o domande — risposta entro 24 ore. Oppure prenota in pochi clic su Booking.com.",
      email: "Email",
      phone: "Telefono",
      whatsapp: "WhatsApp",
      name: "Nome",
      dates: "Date preferite",
      datesPh: "es. 12–19 Luglio",
      message: "Messaggio",
      send: "Invia richiesta",
      sending: "Invio in corso…",
      required: "Per favore compila i campi obbligatori.",
      mailOpen: "Apertura client email…",
      requestSubject: "richiesta da",
    },
    footer: {
      desc: "Appartamento privato recentemente ristrutturato sulla sponda meridionale del Lago di Garda, a Peschiera del Garda (VR).",
      addressLabel: "Indirizzo",
      contactsLabel: "Contatti",
      rights: "Tutti i diritti riservati.",
      legal: "Note Legali",
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
        intro:
          "I presenti Termini e Condizioni disciplinano l'utilizzo del sito web di Marin Apartment e la prenotazione di soggiorni presso l'appartamento situato in Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italia.",
        sections: [
          {
            h: "1. Oggetto",
            p: "Il sito web ha lo scopo di presentare Marin Apartment e facilitare il contatto con l'host per richieste di prenotazione. Le prenotazioni effettive avvengono tramite Booking.com o via contatto diretto con l'host.",
          },
          {
            h: "2. Prenotazioni e pagamenti",
            p: "Le prenotazioni effettuate tramite Booking.com sono soggette ai termini di Booking.com. Per le prenotazioni dirette, i termini di pagamento, eventuali caparre e modalità di cancellazione vengono concordati per iscritto via email prima della conferma.",
          },
          {
            h: "3. Check-in e check-out",
            p: "Il check-in è previsto dalle 15:00 alle 23:00 (previo accordo). Il check-out entro le ore 11:00. Al momento dell'arrivo è richiesto un documento d'identità valido, come previsto dalla normativa italiana.",
          },
          {
            h: "4. Regole della casa",
            p: "L'appartamento è non fumatori. Non sono ammessi animali. Non è consentito organizzare feste o eventi. I bambini sono i benvenuti a partire dai 3 anni di età. Gli ospiti sono responsabili di eventuali danni causati alla struttura o agli arredi.",
          },
          {
            h: "5. Tassa di soggiorno",
            p: "La tassa di soggiorno comunale, ove applicabile, è a carico dell'ospite e deve essere corrisposta in loco secondo le tariffe stabilite dal Comune di Peschiera del Garda.",
          },
          {
            h: "6. Responsabilità",
            p: "L'host non risponde di oggetti smarriti o danneggiati durante il soggiorno, né di disservizi dovuti a cause di forza maggiore (interruzioni servizi, eventi atmosferici, ecc.).",
          },
          {
            h: "7. Privacy",
            p: "I dati personali sono trattati in conformità al Regolamento UE 2016/679 (GDPR). I dati raccolti tramite il modulo di contatto sono utilizzati esclusivamente per rispondere alle richieste dell'utente.",
          },
          {
            h: "8. Legge applicabile e foro competente",
            p: "I presenti Termini sono regolati dalla legge italiana. Qualsiasi controversia è soggetta alla competenza esclusiva del Foro di Verona.",
          },
          {
            h: "9. Contatti",
            p: "Per qualsiasi domanda relativa ai presenti Termini, si prega di contattare l'host all'indirizzo marinustegernsee2000@yahoo.de.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        intro:
          "La presente Cookie Policy descrive le tipologie di cookie utilizzate dal sito Marin Apartment e come l'utente può gestirle.",
        sections: [
          {
            h: "Cosa sono i cookie",
            p: "I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell'utente per permettere il funzionamento del sito o migliorarne l'esperienza di navigazione.",
          },
          {
            h: "Cookie tecnici (necessari)",
            p: "Utilizziamo cookie tecnici necessari al corretto funzionamento del sito (ad esempio per ricordare la preferenza della lingua e il consenso ai cookie). Questi cookie non richiedono il consenso dell'utente.",
          },
          {
            h: "Cookie di terze parti",
            p: "Il sito incorpora contenuti di terze parti, in particolare la mappa di Google Maps. Tali servizi possono installare propri cookie sul dispositivo dell'utente. Per maggiori informazioni, consultare le rispettive privacy policy: Google (https://policies.google.com/privacy).",
          },
          {
            h: "Cookie analitici",
            p: "Al momento non utilizziamo cookie analitici di prima o terza parte per finalità di profilazione.",
          },
          {
            h: "Gestione dei cookie",
            p: "È possibile gestire o disabilitare i cookie tramite le impostazioni del proprio browser. La disabilitazione di alcuni cookie potrebbe compromettere il corretto funzionamento del sito.",
          },
          {
            h: "Modifiche",
            p: "Ci riserviamo il diritto di aggiornare la presente Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.",
          },
          {
            h: "Contatti",
            p: "Per qualsiasi domanda, si prega di contattare l'host all'indirizzo marinustegernsee2000@yahoo.de.",
          },
        ],
      },
    },
  },
  en: {
    nav: {
      about: "About",
      gallery: "Gallery",
      amenities: "Amenities",
      reviews: "Reviews",
      location: "Location",
      contact: "Contact",
      book: "Book now",
    },
    hero: {
      eyebrow: "Peschiera del Garda",
      title: "Marin Apartment",
      subtitle: "Your retreat on Lake Garda.",
      desc: "Recently renovated apartment steps from the historic center and the lake shores. Modern comfort in a timeless atmosphere.",
      ctaBook: "Book on Booking.com",
      ctaContact: "Check availability",
      ratingLabel: "8.9/10 Fabulous",
      verified: "Verified reviews",
      scroll: "Discover more",
    },
    about: {
      eyebrow: "About",
      title: "Recently renovated, designed for your relaxation.",
      meta: "52 m² · 1 Bedroom · 1 Bathroom · Up to 4 Guests",
      h1: "Modern Spaces",
      p1: "Marin Apartment offers a bright and welcoming environment, with carefully chosen furnishings to ensure maximum comfort during your stay.",
      h2: "Strategic Location",
      p2: "Located in a quiet area of Peschiera del Garda, it allows you to reach the lake and the historic center with a short walk.",
      h3: "Full Comfort",
      p3: "Equipped kitchen, air conditioning, free Wi-Fi and private parking: everything you need to feel at home.",
      badgeGuests: "Ideal for couples",
      badgeMeta: "or small families",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A look inside.",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    amenities: {
      eyebrow: "Amenities",
      title: "Everything you need.",
      icons: [
        "Free parking",
        "Fast Wi-Fi",
        "Air conditioning",
        "Heating",
        "Full kitchen",
        "Washing machine",
        "Smart TV",
        "Coffee machine",
      ],
      langs: "We speak:",
      groups: [
        {
          title: "Living",
          items: ["Free Wi-Fi", "Air conditioning", "Heating", "Sofa bed", "Smart TV"],
        },
        {
          title: "Kitchen & Dining",
          items: ["Stovetop", "Oven", "Refrigerator", "Coffee machine", "Kettle", "Kitchenware"],
        },
        {
          title: "Bath & Bed",
          items: ["Queen size bed", "Wardrobe", "Shower", "Hairdryer", "Washing machine", "Towels"],
        },
        {
          title: "Outdoors",
          items: ["Balcony", "Garden view", "Free private parking", "Quiet area"],
        },
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What our guests say",
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
        {
          name: "Vitalii",
          flag: "🇩🇪",
          quote:
            "We enjoyed it very much. We would love to come back. The communication was excellent, everything was clean and comfortable. The kitchen has everything you need. We were very satisfied. I can definitely recommend it.",
        },
        {
          name: "Piero",
          flag: "🇮🇹",
          quote:
            "Excellent quiet location. 10-minute walk from the center. Access to private road with parking. 3rd-floor apartment without elevator, recently renovated, large and comfortable rooms. Heating with radiators and heat pump air conditioning. Beautiful…",
        },
      ],
      footnote: "Verified reviews from guests who actually stayed at Marin Apartment.",
      ctaAll: "Read all reviews on Booking.com",
      ctaCheck: "Check availability & book",
    },
    neighborhood: {
      eyebrow: "Surroundings",
      title: "The neighborhood",
      groups: [
        {
          title: "Right outside the door",
          items: [
            "Lake Garda — 0 m",
            "Parco degli Aviatori — 800 m",
            "Parco Catullo — 1.2 km",
            "Historic center & UNESCO Venetian walls — ~10 min walk",
            "La Botteghina restaurant — 300 m",
            "Trattoria Bar Alba e Nicola — 350 m",
            "La Bottega della Piada — 450 m",
          ],
        },
        {
          title: "Top attractions",
          items: [
            "Bergamini Beach — 2.2 km",
            "Gardaland — 3.9 km",
            "Tower of San Martino della Battaglia — 9 km",
            "Sirmione Castle — 10 km",
            "Olive Oil Museum — 11 km",
            "Grottoes of Catullus — 11 km",
            "Parco Giardino Sigurtà — 12 km",
            "Parco Natura Viva — 12 km",
          ],
        },
        {
          title: "Getting here",
          items: [
            "Verona Airport — 18 km",
            "Montichiari Airport — 29 km",
            "Bergamo Orio al Serio — 84 km",
            "Peschiera del Garda train station — 2 km",
            "Direct trains to Verona, Venice, Milan",
          ],
        },
      ],
    },
    location: {
      eyebrow: "Location",
      title1: "On the southern shore",
      title2: "of Lake Garda.",
      p1pre: "Marin Apartment is located at ",
      address: "Viale degli Alpini 12/A",
      p1post:
        ', "Residenza Girasole Palazzina A" No. 31, in Peschiera del Garda (province of Verona), on the Veneto side of the lake.',
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
        intro:
          "These Terms & Conditions govern the use of the Marin Apartment website and the booking of stays at the apartment located at Viale degli Alpini 12/A, 37019 Peschiera del Garda (VR), Italy.",
        sections: [
          {
            h: "1. Purpose",
            p: "The website is intended to present Marin Apartment and to facilitate contact with the host for booking inquiries. Actual bookings are made through Booking.com or via direct contact with the host.",
          },
          {
            h: "2. Bookings and payments",
            p: "Bookings made through Booking.com are subject to Booking.com's terms. For direct bookings, payment terms, deposits and any cancellation fees are agreed in writing via email before confirmation.",
          },
          {
            h: "3. Check-in and check-out",
            p: "Check-in from 3:00 PM to 11:00 PM (with prior notice). Check-out from 8:00 AM to 11:00 AM. A valid ID document is required upon arrival, as required by Italian law.",
          },
          {
            h: "4. House rules",
            p: "The apartment is non-smoking. Pets are not allowed. Parties and events are not permitted. Children are welcome from age 3. Guests are responsible for any damage caused to property or furnishings.",
          },
          {
            h: "5. Tourist tax",
            p: "The municipal tourist tax, where applicable, is the guest's responsibility and must be paid on site according to the rates set by the Municipality of Peschiera del Garda.",
          },
          {
            h: "6. Liability",
            p: "The host is not responsible for items lost or damaged during the stay, nor for inconvenience due to force majeure (service interruptions, weather events, etc.).",
          },
          {
            h: "7. Privacy",
            p: "Personal data is processed in accordance with EU Regulation 2016/679 (GDPR). Data collected through the contact form is used exclusively to respond to user inquiries.",
          },
          {
            h: "8. Applicable law and jurisdiction",
            p: "These Terms are governed by Italian law. Any dispute is subject to the exclusive jurisdiction of the Court of Verona.",
          },
          {
            h: "9. Contact",
            p: "For any question regarding these Terms, please contact the host at marinustegernsee2000@yahoo.de.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        intro:
          "This Cookie Policy describes the types of cookies used by the Marin Apartment website and how the user can manage them.",
        sections: [
          {
            h: "What are cookies",
            p: "Cookies are small text files that visited websites save on the user's device to allow the site to function properly or to improve the browsing experience.",
          },
          {
            h: "Technical (necessary) cookies",
            p: "We use technical cookies necessary for the proper functioning of the site (for example to remember language preference and cookie consent). These cookies do not require user consent.",
          },
          {
            h: "Third-party cookies",
            p: "The site embeds third-party content, in particular the Google Maps map. Such services may install their own cookies on the user's device. For more information, see their respective privacy policies: Google (https://policies.google.com/privacy).",
          },
          {
            h: "Analytics cookies",
            p: "We currently do not use first-party or third-party analytics cookies for profiling.",
          },
          {
            h: "Managing cookies",
            p: "You can manage or disable cookies via your browser settings. Disabling certain cookies may affect the proper functioning of the site.",
          },
          {
            h: "Changes",
            p: "We reserve the right to update this Cookie Policy at any time. Changes will be published on this page.",
          },
          {
            h: "Contact",
            p: "For any question, please contact the host at marinustegernsee2000@yahoo.de.",
          },
        ],
      },
    },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof dict.it };

const I18nCtx = createContext<Ctx>({ lang: "en", setLang: () => {}, t: dict.en });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("marin_lang") as Lang | null;
    if (saved === "it" || saved === "en") {
      setLangState(saved);
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

  return <I18nCtx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
