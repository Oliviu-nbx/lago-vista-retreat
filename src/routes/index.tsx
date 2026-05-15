import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Wifi,
  UtensilsCrossed,
  Car,
  Snowflake,
  Tv,
  Sun,
  WashingMachine,
  Coffee,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Star,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { CookieConsent } from "@/components/CookieConsent";

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
const BOOKING = "https://www.booking.com/Share-JFg83C";
const BOOKING_BLUE = "#0071C2";
const BOOKING_DARK = "#003B95";

const gallery = [
  { src: view, alt: "Vista panoramica dal balcone del Marin Apartment a Peschiera del Garda" },
  { src: livingBalcony, alt: "Soggiorno luminoso con accesso al balcone" },
  { src: dining, alt: "Sala da pranzo elegante con TV a schermo piatto" },
  { src: kitchenLiving, alt: "Cucina aperta sul soggiorno" },
  { src: kitchenHall, alt: "Cucina attrezzata e ingresso dell'appartamento" },
  { src: bedroom, alt: "Camera da letto matrimoniale recentemente rinnovata" },
  { src: bathroom, alt: "Bagno moderno con doccia e lavatrice" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links: [string, string][] = [
    ["#about", t.nav.about],
    ["#gallery", t.nav.gallery],
    ["#amenities", t.nav.amenities],
    ["#reviews", t.nav.reviews],
    ["#location", t.nav.location],
    ["#contact", t.nav.contact],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className={`font-serif text-xl tracking-wide ${scrolled ? "text-foreground" : "text-white"}`}
        >
          Marin Apartment
        </a>
        <div className="hidden md:flex items-center gap-7">
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
          <LanguageToggle dark={!scrolled} />
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-sm text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BOOKING_BLUE }}
          >
            {t.nav.book}
          </a>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle dark={!scrolled} />
          <button
            className={scrolled ? "text-foreground" : "text-white"}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map(([h, l]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-primary"
            >
              {l}
            </a>
          ))}
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-10 px-4 rounded-sm text-sm font-medium text-white"
            style={{ backgroundColor: BOOKING_BLUE }}
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={view}
        alt="Marin Apartment — vista sul Lago di Garda da Peschiera del Garda"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/75" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-white/80 tracking-[0.3em] text-xs md:text-sm uppercase mb-6 animate-fade-in">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] font-light animate-fade-in">
          {t.hero.title}
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-white/90 font-light font-serif italic animate-fade-in">
          {t.hero.subtitle}
        </p>
        <p className="mt-3 text-base md:text-lg text-white/75 max-w-2xl mx-auto font-light animate-fade-in">
          {t.hero.desc}
        </p>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-white/90 text-sm animate-fade-in">
          <span className="flex items-center gap-0.5 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0} />
            ))}
          </span>
          <span className="font-semibold">{t.hero.ratingLabel}</span>
          <span className="opacity-70">·</span>
          <span>{t.hero.verified}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-sm text-white font-medium shadow-lg transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: BOOKING_BLUE }}
          >
            {t.hero.ctaBook} <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 rounded-sm border border-white/50 text-white hover:bg-white hover:text-foreground transition-colors"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-pulse">
        {t.hero.scroll}
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">{t.about.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">{t.about.title}</h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">{t.about.meta}</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8 text-muted-foreground text-lg leading-relaxed font-light">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{t.about.h1}</h3>
              <p>{t.about.p1}</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{t.about.h2}</h3>
              <p>{t.about.p2}</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{t.about.h3}</h3>
              <p>{t.about.p3}</p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={bedroom}
                alt="Camera da letto del Marin Apartment, recentemente rinnovata"
                className="w-full h-[480px] object-cover rounded-sm shadow-[var(--shadow-elegant)]"
              />
              <div className="absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 rounded-sm shadow-[var(--shadow-soft)] hidden md:block">
                <p className="font-serif text-2xl text-primary">{t.about.badgeGuests}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {t.about.badgeMeta}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const { t } = useI18n();
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
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">{t.gallery.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {gallery.map((img, i) => {
            const big = i === 0 || i === 3;
            return (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`group relative overflow-hidden rounded-sm bg-muted ${
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
            aria-label={t.gallery.close}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label={t.gallery.prev}
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
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label={t.gallery.next}
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
  const { t } = useI18n();
  const iconLabels: string[] = t.amenities.icons;
  const icons = [Car, Wifi, Snowflake, Sun, UtensilsCrossed, WashingMachine, Tv, Coffee];
  return (
    <section id="amenities" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">
            {t.amenities.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">{t.amenities.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden mb-12">
          {iconLabels.map((label, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-background p-8 flex flex-col items-center text-center gap-3 hover:bg-muted/40 transition-colors"
              >
                <Icon className="w-7 h-7 text-primary" strokeWidth={1.4} />
                <p className="text-sm text-foreground/80">{label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(t.amenities.groups as { title: string; items: string[] }[]).map((g) => (
            <div key={g.title} className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-serif text-xl text-foreground mb-3">{g.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-primary">·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{t.amenities.langs}</span> 🇩🇪 Deutsch · 🇬🇧
          English · 🇮🇹 Italiano
        </p>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="py-24 md:py-32 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">
            {t.reviews.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">{t.reviews.title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-10">
          <div
            className="rounded-xl px-6 py-5 text-white shadow-lg"
            style={{ backgroundColor: BOOKING_DARK }}
          >
            <div className="text-5xl font-bold leading-none">8.9</div>
            <div className="mt-1 text-lg font-semibold">{t.reviews.ratingWord}</div>
            <div className="text-xs opacity-80">{t.reviews.verifiedReviews}</div>
          </div>
          <div className="text-2xl font-bold tracking-tight" style={{ color: BOOKING_BLUE }}>
            Booking<span style={{ color: BOOKING_DARK }}>.com</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5 mb-14">
          {(t.reviews.categories as { label: string; score: number }[]).map((c) => (
            <div key={c.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-foreground/80">{c.label}</span>
                <span className="font-semibold text-foreground">{c.score.toFixed(1)}</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(c.score / 10) * 100}%`, backgroundColor: BOOKING_BLUE }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {(t.reviews.cards as { name: string; flag: string; quote: string }[]).map((r) => (
            <div
              key={r.name}
              className="bg-background border border-border rounded-lg p-7 shadow-[var(--shadow-soft)]"
            >
              <p className="italic text-foreground/85 leading-relaxed">"{r.quote}"</p>
              <p className="mt-4 text-sm font-medium text-foreground">
                {r.name} <span className="ml-1">{r.flag}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t.reviews.footnote}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-sm text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: BOOKING_BLUE }}
          >
            {t.reviews.ctaAll} <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center h-12 px-7 rounded-sm border-2 font-medium hover:bg-muted transition-colors"
            style={{ borderColor: BOOKING_BLUE, color: BOOKING_BLUE }}
          >
            {t.reviews.ctaCheck}
          </a>
        </div>
      </div>
    </section>
  );
}

function Neighborhood() {
  const { t } = useI18n();
  const groups = t.neighborhood.groups as { title: string; items: string[] }[];
  return (
    <section id="neighborhood" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">
            {t.neighborhood.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">{t.neighborhood.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title} className="bg-card border border-border rounded-sm p-7">
              <h3 className="font-serif text-xl text-foreground mb-4">{g.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useI18n();
  return (
    <section id="location" className="py-24 md:py-32 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">
            {t.location.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            {t.location.title1}
            <br />
            {t.location.title2}
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg font-light leading-relaxed">
            <p>
              {t.location.p1pre}
              <span className="text-foreground font-medium">{t.location.address}</span>
              {t.location.p1post}
            </p>
            <p>{t.location.p2}</p>
          </div>
          <div className="mt-8 space-y-2 text-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-medium">{t.location.addressFull}</span>
            </div>
            <p className="text-xs text-muted-foreground tracking-wider uppercase ml-8">
              {t.location.license}
            </p>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
          <iframe
            title="Mappa - Viale degli Alpini 12, Peschiera del Garda"
            src="https://www.google.com/maps?q=Viale+degli+Alpini+12,+37019+Peschiera+del+Garda+VR,+Italia&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function HouseRules() {
  const { t } = useI18n();
  const rules = t.rules.list as { label: string; value: string }[];
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-3">{t.rules.eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl">{t.rules.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {rules.map((r) => (
            <div key={r.label} className="bg-background p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {r.label}
              </p>
              <p className="text-sm text-foreground">{r.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useI18n();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const dates = String(fd.get("dates") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error(t.contact.required);
      setSending(false);
      return;
    }
    const subject = encodeURIComponent(`Marin Apartment — ${t.contact.requestSubject} ${name}`);
    const body = encodeURIComponent(
      `${t.contact.name}: ${name}\n${t.contact.email}: ${email}\n${t.contact.dates}: ${dates}\n\n${t.contact.message}:\n${message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      formRef.current?.reset();
      toast.success(t.contact.mailOpen);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="">
          <p className="text-primary tracking-[0.25em] text-xs uppercase mb-4">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            {t.contact.title1}
            <br />
            {t.contact.title2}
          </h2>
          <p className="text-muted-foreground text-lg font-light mb-8 leading-relaxed">
            {t.contact.desc}
          </p>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-11 px-6 mb-10 rounded-sm text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: BOOKING_BLUE }}
          >
            {t.nav.book} <ExternalLink className="w-4 h-4" />
          </a>
          <ul className="space-y-5">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest uppercase text-muted-foreground">
                    {t.contact.email}
                  </span>
                  <span className="text-base">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_RAW}`}
                className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest uppercase text-muted-foreground">
                    {t.contact.phone}
                  </span>
                  <span className="text-base">{PHONE}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest uppercase text-muted-foreground">
                    {t.contact.whatsapp}
                  </span>
                  <span className="text-base">{PHONE}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-sm p-8 md:p-10 shadow-[var(--shadow-soft)] space-y-5"
        >
          <div>
            <Label htmlFor="name">{t.contact.name} *</Label>
            <Input id="name" name="name" required maxLength={100} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email">{t.contact.email} *</Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="dates">{t.contact.dates}</Label>
            <Input
              id="dates"
              name="dates"
              placeholder={t.contact.datesPh}
              maxLength={100}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="message">{t.contact.message} *</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              maxLength={1500}
              className="mt-2"
            />
          </div>
          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-primary hover:bg-primary/90 h-12"
          >
            {sending ? t.contact.sending : t.contact.send}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-accent text-accent-foreground py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-2xl mb-3">Marin Apartment</p>
          <p className="text-accent-foreground/70 text-sm leading-relaxed">{t.footer.desc}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-accent-foreground/60 mb-3">
            {t.footer.addressLabel}
          </p>
          <p className="text-sm leading-relaxed">
            Viale degli Alpini 12/A
            <br />
            "Residenza Girasole Palazzina A" Nr. 31, 2° piano
            <br />
            37019 Peschiera del Garda (VR), Italia
          </p>
          <p className="mt-3 text-xs text-accent-foreground/60">{t.location.license}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-accent-foreground/60 mb-3">
            {t.footer.contactsLabel}
          </p>
          <div className="text-sm space-y-1">
            <a href={`mailto:${EMAIL}`} className="block hover:text-primary transition-colors">
              {EMAIL}
            </a>
            <a href={`tel:${PHONE_RAW}`} className="block hover:text-primary transition-colors">
              {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-primary transition-colors"
            >
              {t.contact.whatsapp}
            </a>
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener"
              className="block hover:text-primary transition-colors"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-accent-foreground/60 mb-3">
            {t.footer.legal}
          </p>
          <div className="text-sm space-y-1">
            <Link to="/terms" className="block hover:text-primary transition-colors">
              {t.footer.terms}
            </Link>
            <Link to="/cookie-policy" className="block hover:text-primary transition-colors">
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-accent-foreground/15 text-xs text-accent-foreground/50 text-center">
        © {new Date().getFullYear()} Marin Apartment · Peschiera del Garda. {t.footer.rights}
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
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

function StickyBookingBar() {
  const [show, setShow] = useState(false);
  const { t } = useI18n();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <>
      {/* Desktop: floating right card */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 bg-background border border-border rounded-lg shadow-[var(--shadow-elegant)] p-4 w-60">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center px-2 py-1 rounded text-white text-xs font-bold"
            style={{ backgroundColor: BOOKING_DARK }}
          >
            8.9
          </span>
          <span className="text-sm font-medium">{t.booking.ratingWord}</span>
        </div>
        <p className="text-xs text-muted-foreground leading-snug">{t.booking.directHost}</p>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center h-10 rounded-sm text-white text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: BOOKING_BLUE }}
        >
          {t.nav.book}
        </a>
      </div>
      {/* Mobile: bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-background border-t border-border px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <span
          className="inline-flex items-center justify-center px-2 py-1 rounded text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: BOOKING_DARK }}
        >
          8.9
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium leading-tight truncate">Marin Apartment</p>
          <p className="text-[10px] text-muted-foreground leading-tight">
            {t.booking.ratingWord} · {t.booking.reviewsShort}
          </p>
        </div>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center h-10 px-4 rounded-sm text-white text-sm font-medium flex-shrink-0"
          style={{ backgroundColor: BOOKING_BLUE }}
        >
          {t.booking.bookShort}
        </a>
      </div>
    </>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Reviews />
        <Neighborhood />
        <Location />
        <HouseRules />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyBookingBar />
      <CookieConsent />
      <Toaster />
    </div>
  );
}
