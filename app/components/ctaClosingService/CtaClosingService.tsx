// app/components/ctaClosingService/CtaClosingService.tsx
import styles from "./CtaClosingService.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldHalved,
  faListCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type CtaClosingServiceProps = {
  heading?: string;
  subheading?: string;
  waMessage?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  bullets?: { icon: any; text: string }[];
};

export default function CtaClosingService({
  heading = "Siap beresin STNK tahunan tanpa ribet?",
  subheading = "Mulai dari konsultasi dulu. Kami cek kebutuhan berkas, jelaskan alur, dan bantu prosesnya dengan komunikasi yang jelas—tanpa bikin kamu bolak-balik.",
  waMessage = "Assalamualaikum admin, saya mau tanya perihal perpanjang STNK tahunan.",
  secondaryHref = "/layanan",
  secondaryLabel = "Lihat layanan lainnya",
  bullets,
}: CtaClosingServiceProps) {
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

  const defaultBullets = [
    { icon: faListCheck, text: "Persyaratan jelas dari awal" },
    { icon: faBolt, text: "Lebih praktis, hemat waktu" },
    { icon: faShieldHalved, text: "Berkas ditangani aman & rapi" },
  ];

  const items = bullets && bullets.length ? bullets : defaultBullets;

  return (
    <section className={styles.section} aria-label="CTA penutup layanan">
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.left}>
            <h2 className={styles.title}>{heading}</h2>
            <p className={styles.subtitle}>{subheading}</p>

            <ul className={styles.bullets} aria-label="Keunggulan utama">
              {items.slice(0, 3).map((b, idx) => (
                <li key={`${b.text}-${idx}`} className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <FontAwesomeIcon icon={b.icon} />
                  </span>
                  <span className={styles.bulletText}>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.primary} btn btnPrimary`}
              aria-label="Konsultasi Gratis via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Konsultasi Gratis
            </a>

            <Link
              href={secondaryHref}
              className={`${styles.secondary} btn btnSecondary`}
              aria-label={secondaryLabel}
            >
              {secondaryLabel}{" "}
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>

            <p className={styles.note}>
              Respon cepat di jam operasional. Kalau di luar jam, kami balas
              secepatnya saat online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}