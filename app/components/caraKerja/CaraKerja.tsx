// app/components/caraKerja/CaraKerja.tsx
import Link from "next/link";
import styles from "./CaraKerja.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faClipboardCheck,
  faFileLines,
  faArrowsRotate,
  faHandHoldingHand,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type Step = {
  title: string;
  desc: string;
  icon: any;
};

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau konsultasi.";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

const steps: Step[] = [
  {
    title: "Chat & konsultasi kebutuhan",
    desc: "Mulai dari WhatsApp. Ceritakan kebutuhanmu (mis. STNK tahunan/5 tahunan, balik nama, mutasi, ganti plat, dll). Kami bantu arahkan layanan yang tepat.",
    icon: faComments,
  },
  {
    title: "Cek persyaratan & berkas",
    desc: "Kami cek dokumen yang kamu punya dan jelaskan apa saja yang perlu dilengkapi, supaya kamu tidak salah berkas dan tidak bolak-balik.",
    icon: faClipboardCheck,
  },
  {
    title: "Pengumpulan berkas sesuai kesepakatan",
    desc: "Berkas diserahkan sesuai kesepakatan. Kami pastikan prosesnya tertib dan komunikasinya jelas dari awal.",
    icon: faFileLines,
  },
  {
    title: "Proses pengurusan + update status",
    desc: "Kami koordinasikan proses pengurusan dan memberi update status selama berjalan. Kamu tidak perlu menebak-nebak progresnya.",
    icon: faArrowsRotate,
  },
  {
    title: "Dokumen selesai & dikembalikan",
    desc: "Setelah selesai, dokumen kami kembalikan sesuai kesepakatan. Target kami: kamu puas karena prosesnya jelas, aman, dan nyaman.",
    icon: faHandHoldingHand,
  },
];

export default function CaraKerja() {
  return (
    <section className={styles.section} aria-label="Cara kerja BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faComments} />
            </span>
            <span className={styles.kickerText}>Cara Kerja</span>
          </div>

          <h2 className={styles.title}>Singkat, rapi, dan mudah diikuti</h2>
          <p className={styles.subtitle}>
            Kami percaya urusan surat kendaraan harus punya alur yang <strong>jelas</strong>. Karena itu,
            kami buat prosesnya sederhana: mulai dari konsultasi sampai dokumen kembali ke kamu dengan aman.
          </p>
        </header>

        <div className={styles.steps} aria-label="Langkah-langkah cara kerja">
          {steps.map((s, idx) => (
            <article key={s.title} className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon icon={s.icon} />
                </div>

                <div className={styles.meta}>
                  <p className={styles.stepNo}>Langkah {idx + 1}</p>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                </div>
              </div>

              <p className={styles.stepDesc}>{s.desc}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaBar} aria-label="Ajakan konsultasi">
          <div className={styles.ctaText}>
            <p className={styles.ctaTitle}>Mau mulai dari langkah pertama?</p>
            <p className={styles.ctaDesc}>
              Chat dulu saja. Kami bantu cek kebutuhanmu dan jelaskan persyaratannya.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaPrimary} btn btnPrimary`}
              aria-label="Mulai konsultasi via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Konsultasi Gratis
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