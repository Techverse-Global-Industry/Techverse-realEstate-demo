"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page section-dark">
      <div>
        <span className="brand-mark">RE</span>
        <p className="eyebrow eyebrow-light">Error / Erreur</p>
        <h1>{t.errors.title}</h1>
        <p>{t.errors.body}</p>
        <div className="hero-actions">
          <button type="button" className="button button-light" onClick={reset}>
            <RotateCcw size={17} />
            {t.errors.retry}
          </button>
          <Link className="button button-ghost-light" href="/">
            {t.errors.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
