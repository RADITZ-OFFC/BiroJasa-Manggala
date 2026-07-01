// app/components/steps/Steps.tsx
import Link from "next/link";
import styles from "./Steps.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleCheck,
  faTruckFast,
  faGears,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type StepItem = {
  title: string;
  desc: string;
  icon: any;
};

const steps: StepItem[] = [
  {
    title: "Chat & konsultasi kebutuhan",
    desc: "Ceritakan kebutuhanmu (STNK tahunan/5 tahunan, balik nama, mutasi, ganti plat, dan lainnya). Kami jawab dengan bahasa yang jelas dan ramah.",
    icon: faWhatsapp,
  },
  {
    title: "Verifikasi persyaratan",
    desc: "Kami cek persyaratan sesuai layanan, lalu jelaskan dokumen yang perlu disiapkan supaya tidak salah berkas dan tidak bolak-balik.",
    icon: faFileCircleCheck,
  },
  {
    title: "Jemput / terima berkas",
    desc: "Berkas ditangani rapi dan aman. Kamu bisa fokus aktivitas—tanpa perlu antre panjang.",
    icon: faTruckFast,
  },
  {
    title: "Proses pengurusan + update status",
    desc: "Selama proses berjalan, kami berikan informasi status secara berkala agar kamu tenang dan tahu progressnya.",
    icon: faGears,
  },
  {
    title: "Dokumen selesai diantar",
    desc: "Saat pengurusan selesai, dokumen dikembalikan sesuai kesepakatan. Praktis, transparan, dan lebih nyaman.",
    icon: faCircleCheck,
  },
];

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

export default function Steps() {
  return (
    <section className={styles.section} aria-label="Cara kerja BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Cara kerja yang rapi, supaya kamu nggak ribet</h2>
          <p className={styles.subtitle}>
            Alurnya dibuat sederhana: <strong>konsultasi</strong> →{" "}
            <strong>verifikasi berkas</strong> → <strong>jemput/terima</strong> →{" "}
            <strong>proses</strong> → <strong>antar kembali</strong>. Cocok untuk kamu
            yang sibuk dan ingin pengurusan surat kendaraan terasa lebih tenang.
          </p>
        </header>

        <ol className={styles.list}>
          {steps.map((s, idx) => (
            <li key={s.title} className={styles.item}>
              <div className={styles.badge} aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={s.icon} />
              </div>

              <div className={styles.body}>
                <h3 className={styles.itemTitle}>{s.title}</h3>
                <p className={styles.itemDesc}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* <div className={styles.ctaRow}>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaPrimary} btn btnPrimary`}
            aria-label="Konsultasi gratis via WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsappBrand} aria-hidden="true" />
            Konsultasi Gratis
          </a>

          <Link
            href="/layanan"
            className={`${styles.ctaSecondary} btn btnSecondary`}
            aria-label="Lihat daftar layanan"
          >
            Lihat daftar layanan
          </Link>
        </div> */}
      </div>
    </section>
  );
}