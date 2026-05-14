import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Wifi, UtensilsCrossed, Car, Snowflake, Tv, Sun, WashingMachine,
  Coffee, MapPin, Mail, Phone, MessageCircle, X, ChevronLeft, ChevronRight, Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import view from "@/assets/apartment/view.png";
import bedroom from "@/assets/apartment/bedroom.jpg";
import livingBalcony from "@/assets/apartment/living-balcony.jpg";
import bathroom from "@/assets/apartment/bathroom.jpg";
import kitchenHall from "@/assets/apartment/kitchen-hall.jpg";
import kitchenLiving from "@/assets/apartment/kitchen-living.jpg";
import dining from "@/assets/apartment/dining.jpg";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "+49 170 8704697";
const PHONE_RAW = "+491708704697";
const EMAIL = "marinustegernsee2000@yahoo.de";
const WHATSAPP = "https://wa.me/491708704697";

const gallery = [
  { src: view, alt: "Vista sulle montagne dal balcone dell'appartamento" },
  { src: livingBalcony, alt: "Soggiorno luminoso con vista sulle montagne" },
  { src: dining, alt: "Sala da pranzo elegante con TV" },
  { src: kitchenLiving, alt: "Cucina aperta sul soggiorno" },
  { src: kitchenHall, alt: "Cucina e ingresso dell'appartamento" },
  { src: bedroom, alt: "Camera da letto matrimoniale accogliente" },
  { src: bathroom, alt: "Bagno moderno con doccia e lavatrice" },
];

const amenities = [
  { icon: Wifi, label: "Wi-Fi veloce" },
  { icon: UtensilsCrossed, label: "Cucina attrezzata" },
  { icon: Car, label: "Parcheggio privato" },
  { icon: Snowflake, label: "Aria condizionata" },
  { icon: Sun, label: "Balcone panoramico" },
  { icon: Tv, label: "Smart TV" },
  { icon: WashingMachine, label: "Lavatrice" },
  { icon: Coffee, label: "Macchina caffè" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["#about", "Appartamento"],
    ["#gallery", "Galleria"],
    ["#amenities", "Servizi"],
    ["#location", "Posizione"],
    ["#contact", "Contatti"],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className={`font-serif text-xl tracking-wide ${scrolled ? "text-foreground" : "text-white"}`}>
          Casa Garda
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(([h, l]) => (
            <a
              key={h}
              href={h}
              className={`text-sm tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l}
            </a>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Prenota ora</a>
          </Button>
        </div>
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary">
              {l}
            </a>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="#contact" onClick={() => setOpen(false)}>Prenota ora</a>
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={view}
        alt="Vista panoramica sulle montagne del Lago di Garda"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="reveal text-white/80 tracking-[0.3em] text-xs md:text-sm uppercase mb-6">
          Lago di Garda · Italia
        </p>
        <h1 className="reveal font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] font-light">
          Il tuo rifugio<br />sul Lago di Garda
        </h1>
        <p className="reveal mt-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light">
          Un appartamento privato a pochi passi dal Parco Naturale dell'Alto Garda Bresciano.
          Eleganza italiana, vista mozzafiato, comfort moderno.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
            <a href="#contact">Prenota ora</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white/40 text-white hover:bg-white hover:text-foreground px-8 h-12"
          >
            <a href="#gallery">Esplora</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-pulse">
        Scorri ↓
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 reveal">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-6">L'Appartamento</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Un angolo di Italia,<br />tra lago e montagne.
          </h2>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              Immerso nella quiete dell'Alto Garda Bresciano, questo appartamento privato
              unisce il calore dell'ospitalità italiana al comfort di una casa contemporanea.
              Le ampie finestre incorniciano la vista sulle montagne, mentre la luce mediterranea
              riempie ogni stanza.
            </p>
            <p>
              A pochi minuti dalle acque cristalline del Lago di Garda e dai sentieri del parco
              naturale, è il punto di partenza ideale per chi cerca natura, autenticità e relax.
              <span className="italic"> Un rifugio dove ogni dettaglio è pensato per farvi sentire a casa.</span>
            </p>
          </div>
        </div>
        <div className="md:col-span-5 reveal">
          <div className="relative">
            <img
              src={bedroom}
              alt="Camera da letto dell'appartamento"
              className="w-full h-[480px] object-cover rounded-sm shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 rounded-sm shadow-[var(--shadow-soft)] hidden md:block">
              <p className="font-serif text-2xl text-primary">2 ospiti</p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">+ Divano letto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const close = () => setIdx(null);
  const next = () => setIdx((i) => (i === null ? null : (i + 1) % gallery.length));
  const prev = () => setIdx((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx]);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">Galleria</p>
          <h2 className="font-serif text-4xl md:text-5xl">Spazi che raccontano una storia</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {gallery.map((img, i) => {
            const big = i === 0 || i === 3;
            return (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`reveal group relative overflow-hidden rounded-sm bg-muted ${
                  big ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            );
          })}
        </div>
      </div>

      {idx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={close}
            aria-label="Chiudi"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Precedente"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={gallery[idx].src}
            alt={gallery[idx].alt}
            className="max-h-[88vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Successiva"
          >
            <ChevronRight size={40} />
          </button>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm">
            {idx + 1} / {gallery.length}
          </p>
        </div>
      )}
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">Comfort</p>
          <h2 className="font-serif text-4xl md:text-5xl">Tutto ciò che serve, con stile</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {amenities.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="reveal bg-background p-8 md:p-10 flex flex-col items-center text-center gap-4 hover:bg-muted/40 transition-colors"
            >
              <Icon className="w-8 h-8 text-primary" strokeWidth={1.4} />
              <p className="text-sm md:text-base text-foreground/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">Posizione</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Tra il parco<br />e il lago.
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg font-light leading-relaxed">
            <p>
              L'appartamento si trova in <span className="text-foreground font-medium">Viale degli Alpini 12</span>,
              alle porte del Parco Naturale dell'Alto Garda Bresciano: oltre 38.000 ettari di natura
              incontaminata tra uliveti, faggete e panorami sul lago.
            </p>
            <p>
              Borghi storici, sentieri di trekking, spiagge e ristoranti tipici sono tutti a portata di mano.
              Una posizione strategica per scoprire la magia del Garda.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Viale degli Alpini 12, Lago di Garda, Italia</span>
          </div>
        </div>
        <div className="reveal aspect-[4/3] rounded-sm overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
          <iframe
            title="Mappa - Viale degli Alpini 12"
            src="https://www.google.com/maps?q=Viale+degli+Alpini+12,+Lago+di+Garda,+Italia&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const dates = String(fd.get("dates") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Compila i campi richiesti.");
      setSending(false);
      return;
    }
    const subject = encodeURIComponent(`Richiesta prenotazione — ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nDate: ${dates}\n\nMessaggio:\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      formRef.current?.reset();
      toast.success("Apertura del client email…");
    }, 500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">Contatti</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Parliamone.<br />Il vostro soggiorno inizia qui.
          </h2>
          <p className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
            Per disponibilità, prezzi o qualsiasi richiesta, siamo felici di rispondere
            personalmente. Vi risponderemo entro 24 ore.
          </p>
          <ul className="space-y-5">
            <li>
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest uppercase text-muted-foreground">Email</span>
                  <span className="text-base">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_RAW}`} className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest uppercase text-muted-foreground">Telefono</span>
                  <span className="text-base">{PHONE}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest uppercase text-muted-foreground">WhatsApp</span>
                  <span className="text-base">{PHONE}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="reveal bg-card border border-border rounded-sm p-8 md:p-10 shadow-[var(--shadow-soft)] space-y-5">
          <div>
            <Label htmlFor="name">Nome *</Label>
            <Input id="name" name="name" required maxLength={100} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="dates">Date desiderate</Label>
            <Input id="dates" name="dates" placeholder="es. 12–19 luglio" maxLength={100} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="message">Messaggio *</Label>
            <Textarea id="message" name="message" rows={5} required maxLength={1500} className="mt-2" />
          </div>
          <Button type="submit" disabled={sending} className="w-full bg-primary hover:bg-primary/90 h-12">
            {sending ? "Invio…" : "Invia richiesta"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-2xl mb-3">Casa Garda</p>
          <p className="text-accent-foreground/70 text-sm leading-relaxed">
            Il tuo rifugio privato sul Lago di Garda, tra natura e autenticità italiana.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-accent-foreground/60 mb-3">Indirizzo</p>
          <p className="text-sm">Viale degli Alpini 12<br />Lago di Garda, Italia</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-accent-foreground/60 mb-3">Contatti</p>
          <p className="text-sm space-y-1">
            <a href={`mailto:${EMAIL}`} className="block hover:text-primary transition-colors">{EMAIL}</a>
            <a href={`tel:${PHONE_RAW}`} className="block hover:text-primary transition-colors">{PHONE}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="block hover:text-primary transition-colors">WhatsApp</a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-accent-foreground/15 text-xs text-accent-foreground/50 text-center">
        © {new Date().getFullYear()} Casa Garda · Viale degli Alpini 12. Tutti i diritti riservati.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
