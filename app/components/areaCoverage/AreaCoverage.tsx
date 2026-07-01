// app/components/areaCoverage/AreaCoverage.tsx
import styles from "./AreaCoverage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMapLocationDot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

const mapHref = "https://maps.app.goo.gl/SSgcD7aLdy2w69VR9";

const areas = [
  "TasikMalaya",
  "Singaparna",
  "MangunReja",
  "ManonJaya",
  "Leuwisari",
  "PadaKembang",
  "SukaRame",
];

export default function AreaCoverage() {
  return (
    <section className={styles.section} aria-label="Area jangkauan layanan BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Area Jangkauan Layanan</h2>
          <p className={styles.subtitle}>
            BiroJasa Manggala Indonesia melayani pengurusan surat kendaraan untuk wilayah{" "}
            <strong>JawaBarat</strong>—dengan fokus utama{" "}
            <strong>TasikMalaya</strong> dan <strong>Singaparna</strong>.
            Untuk area lain, kamu bisa tanya dulu agar kami pastikan jangkauan operasionalnya.
          </p>
        </header>

        <div className={styles.panel}>
          <div className={styles.panelTop}>
            <div className={styles.panelIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>

            <div className={styles.panelText}>
              <p className={styles.panelTitle}>JawaBarat & Sekitarnya</p>
              <p className={styles.panelDesc}>
                Pilih area terdekat kamu. Kami utamakan komunikasi yang jelas dan penanganan berkas yang rapi.
              </p>
            </div>
          </div>

          <div className={styles.badges} aria-label="Daftar area">
            {areas.map((name) => (
              <span key={name} className={styles.badge}>
                <span className={styles.badgeIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                {name}
              </span>
            ))}
          </div>

          <div className={styles.note}>
            <span className={styles.noteIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <p className={styles.noteText}>
              Ingin memastikan area kamu ter-cover? Chat WhatsApp—kami jawab cepat dan jelas.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaPrimary} btn btnPrimary`}
              aria-label="Tanya area saya via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Tanya area saya
            </a>

            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaSecondary} btn btnSecondary`}
              aria-label="Lihat lokasi di Google Maps"
            >
              <FontAwesomeIcon icon={faMapLocationDot} aria-hidden="true" />
              Lihat lokasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}