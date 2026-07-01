// app/components/trustBadges/TrustBadges.tsx
import styles from "./TrustBadges.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faClock,
  faHandshake,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const assurances = [
  {
    icon: faListCheck,
    title: "Proses jelas",
    desc: "Alur rapi dari konsultasi sampai selesai.",
  },
  {
    icon: faHandshake,
    title: "Transparan",
    desc: "Estimasi & kebutuhan berkas dijelaskan di awal.",
  },
  {
    icon: faShieldHalved,
    title: "Berkas aman",
    desc: "Penanganan dokumen tertib & bertanggung jawab.",
  },
  {
    icon: faClock,
    title: "Hemat waktu",
    desc: "Tidak perlu antre & bolak-balik.",
  },
];

export default function TrustBadges() {
  return (
    <section className={styles.section} aria-label="Keunggulan layanan BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Lebih tenang urus surat kendaraan</h2>
          <p className={styles.subtitle}>
            BiroJasa Manggala Indonesia fokus pada layanan yang <strong>aman</strong>,{" "}
            <strong>jelas</strong>, dan <strong>ramah</strong>—supaya kamu tidak
            perlu repot.
          </p>
        </header>

        {/* Keunggulan layanan */}
        <div className={styles.assurances} aria-label="Keunggulan layanan">
          {assurances.map((a) => (
            <article key={a.title} className={styles.assuranceCard}>
              <div className={styles.assuranceIcon} aria-hidden="true">
                <FontAwesomeIcon icon={a.icon} />
              </div>

              <div className={styles.assuranceBody}>
                <h3 className={styles.assuranceTitle}>{a.title}</h3>
                <p className={styles.assuranceDesc}>{a.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.helper}>
          <p className={styles.helperText}>
            Mau mulai dari yang paling mudah? Lihat daftar layanan lengkap atau tanya dulu via WhatsApp.
          </p>
          <Link href="/layanan" className={styles.helperLink} aria-label="Ke halaman layanan">
            Lihat layanan →
          </Link>
        </div>
      </div>
    </section>
  );
}