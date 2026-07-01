// app/components/heroLayanan/HeroLayanan.tsx
import Link from "next/link";
import styles from "./HeroLayanan.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldHalved,
  faListCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

const quickLinks = [
  { label: "Perpanjang STNK Tahunan", href: "/layanan/perpanjang-stnk-tahunan" },
    { label: "Perpanjang STNK 5 Tahunan", href: "/layanan/perpanjang-stnk-5-tahunan" },
    { label: "Balik Nama Kendaraan", href: "/layanan/balik-nama-kendaraan" },
    { label: "KTP, KK & Akte Kelahiran", href: "/layanan/dokumen-kependudukan" },
    { label: "SIM A (Baru/Perpanjang)", href: "/layanan/sim-a" },
    { label: "SIM C (Baru/Perpanjang)", href: "/layanan/sim-c" },
    { label: "Pendaftaran NIB", href: "/layanan/nib" },
    { label: "Pendaftaran NPWP", href: "/layanan/npwp" },
    { label: "Ganti Nomor Plat", href: "/layanan/ganti-nomor-plat" },
    { label: "Ubah Bentuk Warna", href: "/layanan/ubah-bentuk-warna" },
    { label: "Mutasi Masuk", href: "/layanan/mutasi-masuk-kendaraan" },
    { label: "STNK Hilang/Rusak", href: "/layanan/stnk-hilang-rusak" },
    { label: "Plat Custom", href: "/layanan/plat-custom" },
];

export default function HeroLayanan() {
  return (
    <section className={styles.section} aria-label="Hero halaman layanan">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} aria-hidden="true" />
              <span className={styles.kickerText}>Layanan</span>
            </div>

            <h1 className={styles.title}>
              Layanan pengurusan surat kendaraan yang{" "}
              <span className={styles.accent}>jelas</span> dan{" "}
              <span className={styles.accent}>aman</span>
            </h1>

            <p className={styles.subtitle}>
              Pilih layanan yang kamu butuhkan. Kami bantu cek persyaratan berkas dan menjelaskan alurnya
              dari awal supaya kamu tidak perlu antre dan bolak-balik.
            </p>

            <div className={styles.actions} aria-label="Tombol aksi layanan">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Konsultasi via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Konsultasi Gratis
              </a>

              <Link
                href="/faq"
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label="Buka halaman FAQ"
              >
                Baca FAQ <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.points} aria-label="Keunggulan utama">
              <div className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faBolt} />
                </span>
                <div className={styles.pointText}>
                  <p className={styles.pointTitle}>Cepat & efisien</p>
                  <p className={styles.pointDesc}>Tidak perlu antre panjang. Proses kami rapikan.</p>
                </div>
              </div>

              <div className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <div className={styles.pointText}>
                  <p className={styles.pointTitle}>Berkas aman</p>
                  <p className={styles.pointDesc}>Penanganan dokumen tertib dan status jelas.</p>
                </div>
              </div>

              <div className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faListCheck} />
                </span>
                <div className={styles.pointText}>
                  <p className={styles.pointTitle}>Persyaratan jelas</p>
                  <p className={styles.pointDesc}>Kami jelaskan berkas yang dibutuhkan dari awal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Navigasi cepat">
            <div className={styles.panel}>
              <p className={styles.panelTitle}>Mau mulai dari mana?</p>
              <p className={styles.panelDesc}>
                Klik layanan yang kamu cari, atau chat WhatsApp untuk kami arahkan.
              </p>

              <div className={styles.quickLinks} aria-label="Link cepat layanan">
                {quickLinks.map((it) => (
                  <Link key={it.href} className={styles.qLink} href={it.href}>
                    <span className={styles.qLabel}>{it.label}</span>
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </Link>
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