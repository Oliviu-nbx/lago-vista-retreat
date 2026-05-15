import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useI18n();
  const base = dark ? "text-white/80" : "text-foreground/80";
  const active = dark ? "text-white" : "text-foreground";
  return (
    <div className={`inline-flex items-center text-xs tracking-wider ${base}`}>
      <button
        onClick={() => setLang("it")}
        aria-pressed={lang === "it"}
        className={`px-1.5 py-1 transition-colors hover:opacity-100 ${lang === "it" ? `font-semibold ${active}` : "opacity-70"}`}
      >
        IT
      </button>
      <span className="opacity-40">|</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-1.5 py-1 transition-colors hover:opacity-100 ${lang === "en" ? `font-semibold ${active}` : "opacity-70"}`}
      >
        EN
      </button>
    </div>
  );
}
