import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

type Section = { h: string; p: string };

export function LegalPage({
  kind,
}: {
  kind: "terms" | "cookies";
}) {
  const { t } = useI18n();
  const data = t.legal[kind] as { title: string; intro: string; sections: Section[] };
  const updated = "2026-01-15";

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-wide">Marin Apartment</Link>
          <LanguageToggle />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          {t.legal.backHome}
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-3">{data.title}</h1>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
          {t.legal.lastUpdated}: {updated}
        </p>
        <p className="text-foreground/85 leading-relaxed mb-10">{data.intro}</p>

        <div className="space-y-8">
          {data.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl text-foreground mb-2">{s.h}</h2>
              <p className="text-foreground/80 leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Marin Apartment · Peschiera del Garda
      </footer>
    </div>
  );
}