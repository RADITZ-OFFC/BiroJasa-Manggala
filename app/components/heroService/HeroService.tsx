// app/components/heroService/HeroService.tsx
import Link from "next/link";
import styles from "./HeroService.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShieldHalved,
  faListCheck,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type Highlight = {
  title: string;
  description: string;
  icon?: any;
};

type BreadcrumbItem = {
  label: string;
  href: string;
};

type HeroServiceProps = {
  title: string; // H1
  subtitle: string;
  description?: string;
  badgeText?: string; // e.g. "Layanan"
  primaryCtaLabel?: string;
  primaryCtaMessage?: string; // message for WA
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  highlights?: Highlight[];
  breadcrumbs?: BreadcrumbItem[];
};

const defaultHighlights: Highlight[] = [
  {
    title: "Persyaratan jelas",
    description: "Kami bantu cek berkas yang dibutuhkan dari awal.",
    icon: faListCheck,
  },
  {
    title: "Proses rapi",
    description: "Alur dijelaskan, status di-update, tidak bikin bingung.",
    icon: faShieldHalved,
  },
  {
    title: "Cepat & efisien",
    description: "Mengurangi antre dan bolak-balik yang melelahkan.",
    icon: faBolt,
  },
];

export default function HeroService({
  title,
  subtitle,
  description,
  badgeText = "Layanan",
  primaryCtaLabel = "Konsultasi Gratis",
  primaryCtaMessage = "Assalamualaikum admin, saya mau tanya perihal layanan BiroJasa Manggala Indonesia.",
  secondaryCtaLabel = "Lihat semua layanan",
  secondaryCtaHref = "/layanan",
  highlights = defaultHighlights,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/layanan" },
  ],
}: HeroServiceProps) {
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    primaryCtaMessage
  )}`;

  return (
    <section className={styles.section} aria-label={`Hero ${title}`}>
      <div className={styles.inner}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList}>
            {breadcrumbs.map((b, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={`${b.href}-${idx}`} className={styles.breadcrumbItem}>
                  {isLast ? (
                    <span className={styles.breadcrumbCurrent} aria-current="page">
                      {b.label}
                    </span>
                  ) : (
                    <>
                      <Link href={b.href} className={styles.breadcrumbLink}>
                        {b.label}
                      </Link>
                      <span className={styles.breadcrumbSep} aria-hidden="true">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} aria-hidden="true" />
              <span className={styles.kickerText}>{badgeText}</span>
            </div>

            <h1 className={styles.title}>{title}</h1>

            <p className={styles.subtitle}>{subtitle}</p>

            {description ? <p className={styles.desc}>{description}</p> : null}

            <div className={styles.actions} aria-label="Tombol aksi layanan">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label={`${primaryCtaLabel} via WhatsApp`}
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                {primaryCtaLabel}
              </a>

              <Link
                href={secondaryCtaHref}
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label={secondaryCtaLabel}
              >
                {secondaryCtaLabel}{" "}
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.note} aria-label="Catatan singkat">
              <span className={styles.noteStrong}>Tips:</span> kirim format{" "}
              <span className={styles.format}>“Layanan: … / Area: … / Kondisi berkas: …”</span>
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Keunggulan layanan">
            <div className={styles.panel}>
              <p className={styles.panelTitle}>Kenapa banyak orang pilih yang jelas?</p>
              <p className={styles.panelDesc}>
                Karena urusan berkas itu sensitif. Kami fokus pada komunikasi yang rapi, alur yang
                transparan, dan handling dokumen yang tertib.
              </p>

              <div className={styles.highlights} aria-label="Highlight layanan">
                {highlights.slice(0, 3).map((h, idx) => (
                  <div key={`${h.title}-${idx}`} className={styles.hlCard}>
                    <span className={styles.hlIcon} aria-hidden="true">
                      <FontAwesomeIcon icon={h.icon ?? faListCheck} />
                    </span>
                    <div className={styles.hlBody}>
                      <p className={styles.hlTitle}>{h.title}</p>
                      <p className={styles.hlDesc}>{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/kontak" className={styles.panelFoot} aria-label="Ke halaman kontak">
                Butuh arahan cepat? Lihat kontak →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}