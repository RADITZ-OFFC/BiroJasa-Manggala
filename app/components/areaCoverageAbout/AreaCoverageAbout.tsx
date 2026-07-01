// app/components/areaCoverageAbout/AreaCoverageAbout.tsx
import Link from "next/link";
import styles from "./AreaCoverageAbout.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faLocationCrosshairs,
  faRoute,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau tanya jangkauan layanan untuk area saya.";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

const mapHref = "https://maps.app.goo.gl/SSgcD7aLdy2w69VR9";

const areas = [
  "TasikMalaya",
  "Singaparna",
  "MangunReja",
  "ManonJaya",
  "Leuwisari",
  "PadaKembang",
  "Sukarame",
];

export default function AreaCoverageAbout() {
  return (
    <section className={styles.section} aria-label="Area jangkauan BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              <span className={styles.kickerText}>Area Coverage</span>
            </div>

            <h2 className={styles.title}>Melayani TasikMalaya,Singaparna & Area JawaBarat</h2>

            <p className={styles.subtitle}>
              Basis kami di <strong>TasikMalaya</strong> (Singaparna). Untuk layanan pengurusan surat
              kendaraan, jangkauan utama kami mencakup <strong>Jawabarat</strong> dan area sekitarnya
              sesuai jangkauan operasional.
            </p>

            <div className={styles.highlights} aria-label="Catatan jangkauan">
              <div className={styles.hl}>
                <span className={styles.hlIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faLocationCrosshairs} />
                </span>
                <div className={styles.hlText}>
                  <p className={styles.hlTitle}>Cek area kamu cepat</p>
                  <p className={styles.hlDesc}>
                    Tinggal chat lokasi kamu—kami jawab apakah bisa ditangani dan apa langkah berikutnya.
                  </p>
                </div>
              </div>

              <div className={styles.hl}>
                <span className={styles.hlIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faRoute} />
                </span>
                <div className={styles.hlText}>
                  <p className={styles.hlTitle}>Rute jelas, komunikasi jelas</p>
                  <p className={styles.hlDesc}>
                    Kami utamakan alur yang rapi dan update status supaya kamu tetap tenang.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Tanyakan jangkauan layanan via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Tanya jangkauan via WhatsApp
              </a>

              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
                aria-label="Buka lokasi di Google Maps"
              >
                Lihat lokasi di Maps <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </a>

              {/* <Link href="/kontak" className={styles.link} aria-label="Ke halaman kontak">
                Ke halaman kontak →
              </Link> */}
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Daftar area jangkauan">
            <div className={styles.card}>
              <p className={styles.cardTitle}>Area yang sering kami tangani</p>
              <p className={styles.cardDesc}>
                Berikut area yang paling sering ditanyakan. Untuk area lain, tetap boleh—tinggal chat untuk
                kami cek.
              </p>

              <div className={styles.badges} aria-label="Daftar area">
                {areas.map((a) => (
                  <span key={a} className={styles.badge}>
                    {a}
                  </span>
                ))}
              </div>

              <div className={styles.cardFoot}>
                <p className={styles.footNote}>
                  Ingin lebih cepat? Kirim format ini:
                  <span className={styles.format}> “Area: … / Layanan: …”</span>
                </p>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waMini}
                  aria-label="Chat WhatsApp untuk cek area"
                >
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                  Chat untuk cek area
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}