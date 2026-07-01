// app/components/estimasi/Estimasi.tsx
import styles from "./Estimasi.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTriangleExclamation,
  faFileCircleCheck,
  faLocationDot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

type EstimasiPoint = {
  title: string;
  description: string;
  icon?: any;
};

type EstimasiProps = {
  heading?: string;
  subheading?: string;
  points: EstimasiPoint[];
  highlightTitle?: string;
  highlightText?: string;
};

const fallbackIcons = [faFileCircleCheck, faLocationDot, faClock, faCircleCheck];

export default function Estimasi({
  heading = "Estimasi proses",
  subheading = "Estimasi ditentukan setelah kami cek kondisi berkas dan area pengurusan. Tujuannya biar kamu dapat gambaran yang realistis—tanpa janji berlebihan.",
  points,
  highlightTitle = "Yang perlu kamu tahu",
  highlightText = "Kami akan kasih perkiraan waktu setelah cek berkas lewat WhatsApp. Estimasi bisa berubah tergantung kondisi dokumen dan kebijakan/antrean di area terkait.",
}: EstimasiProps) {
  return (
    <section className={styles.section} aria-label="Estimasi proses layanan">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.subtitle}>{subheading}</p>
        </header>

        <div className={styles.grid} aria-label="Faktor yang memengaruhi estimasi">
          {points.map((p, idx) => (
            <article key={`${p.title}-${idx}`} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={p.icon ?? fallbackIcons[idx % fallbackIcons.length]} />
              </span>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.callout} role="note" aria-label="Catatan estimasi">
          <div className={styles.calloutIcon} aria-hidden="true">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
          <div className={styles.calloutBody}>
            <p className={styles.calloutTitle}>{highlightTitle}</p>
            <p className={styles.calloutText}>{highlightText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}