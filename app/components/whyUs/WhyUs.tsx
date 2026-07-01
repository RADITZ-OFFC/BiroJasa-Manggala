// app/components/whyUs/WhyUs.tsx
import Link from "next/link";
import styles from "./WhyUs.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faUserShield,
  faMagnifyingGlassDollar,
  faClockRotateLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type Reason = {
  title: string;
  desc: string;
  icon: any;
};

const reasons: Reason[] = [
  {
    title: "Cepat & tidak ribet",
    desc: "Kami bantu dari awal dengan arahan yang jelas. Kamu tidak perlu antre panjang atau bolak-balik hanya untuk memastikan berkas.",
    icon: faBolt,
  },
  {
    title: "Berpengalaman & rapi",
    desc: "Alur kerja dibuat tertib—mulai dari pengecekan dokumen, proses pengurusan, sampai pengantaran kembali sesuai kesepakatan.",
    icon: faUserShield,
  },
  {
    title: "Transparan dari awal",
    desc: "Kebutuhan berkas dan estimasi proses dijelaskan di depan. Kamu tahu apa yang perlu disiapkan dan bagaimana alurnya.",
    icon: faMagnifyingGlassDollar,
  },
  {
    title: "Hemat waktu & tenaga",
    desc: "Kamu tetap bisa fokus aktivitas. Kami bantu koordinasi prosesnya dan memberikan update status supaya kamu lebih tenang.",
    icon: faClockRotateLeft,
  },
];

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

export default function WhyUs() {
  return (
    <section className={styles.section} aria-label="Kenapa memilih BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Kenapa banyak orang memilih BiroJasa Manggala Indonesia</h2>
          <p className={styles.subtitle}>
            Fokus kami sederhana: bikin pengurusan surat kendaraan terasa{" "}
            <strong>lebih aman</strong>, <strong>lebih jelas</strong>, dan{" "}
            <strong>lebih cepat</strong> dipahami—dengan komunikasi yang ramah.
          </p>
        </header>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <article key={r.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={r.icon} />
              </div>

              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaBar} aria-label="Ajakan konsultasi">
          <div className={styles.ctaText}>
            <p className={styles.ctaTitle}>Masih bingung mulai dari mana?</p>
            <p className={styles.ctaDesc}>
              Chat dulu saja. Kami bantu jelaskan layanan yang cocok dan berkas yang perlu disiapkan.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaPrimary} btn btnPrimary`}
              aria-label="Konsultasi via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Tanya aja dulu
            </a>

            <Link
              href="/layanan"
              className={`${styles.ctaSecondary} btn btnSecondary`}
              aria-label="Lihat halaman layanan"
            >
              Lihat layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}