import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function CookieConsent() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = localStorage.getItem("marin_cookie_consent");
    if (!v) setShow(true);
  }, []);

  const decide = (value: "all" | "necessary") => {
    localStorage.setItem("marin_cookie_consent", value);
    localStorage.setItem("marin_cookie_consent_at", new Date().toISOString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-background border border-border rounded-lg shadow-[var(--shadow-elegant)] p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 text-sm text-foreground/85 leading-relaxed">
          <p className="font-serif text-lg text-foreground mb-1">{t.cookie.title}</p>
          <p>
            {t.cookie.desc}{" "}
            <Link to="/cookie-policy" className="underline text-primary hover:opacity-80">
              {t.cookie.more}
            </Link>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
          <button
            onClick={() => decide("necessary")}
            className="h-10 px-4 rounded-sm border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            {t.cookie.reject}
          </button>
          <button
            onClick={() => decide("all")}
            className="h-10 px-5 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
