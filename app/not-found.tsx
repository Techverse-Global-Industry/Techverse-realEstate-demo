"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="error-page section-dark">
      <div>
        <span className="error-code">404</span>
        <p className="eyebrow eyebrow-light">Not found / Introuvable</p>
        <h1>{t.errors.notFoundTitle}</h1>
        <p>{t.errors.notFoundBody}</p>
        <Link className="button button-light" href="/">
          <ArrowLeft size={17} />
          {t.errors.home}
        </Link>
      </div>
    </main>
  );
}
