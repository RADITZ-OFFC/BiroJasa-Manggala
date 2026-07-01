// app/components/heroAbout/HeroAbout.tsx
import Link from "next/link";
import styles from "./HeroAbout.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faHandshake,
  faListCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau konsultasi.";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

export default function HeroAbout() {
  return (
    <section className={styles.section} aria-label="Tentang BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faHandshake} />
              </span>
              <span className={styles.kickerText}>Tentang Kami</span>
            </div>

            <h1 className={styles.title}>BiroJasa Manggala Indonesia</h1>

            <p className={styles.subtitle}>
              Kami hadir untuk membantu pengurusan surat kendaraan agar terasa{" "}
              <strong>lebih jelas</strong>, <strong>lebih aman</strong>, dan{" "}
              <strong>lebih nyaman</strong>—tanpa kamu harus antre dan bolak-balik.
            </p>

            <p className={styles.desc}>
              Fokus kami bukan sekadar “mengurus”, tapi menemani prosesnya dengan
              komunikasi yang rapi: cek persyaratan, jelaskan alur, update status,
              sampai dokumen selesai sesuai kesepakatan.
            </p>

            <div className={styles.actions}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Konsultasi gratis via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Konsultasi Gratis
              </a>

              <Link
                href="/layanan"
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label="Lihat layanan kami"
              >
                Lihat layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.highlights} aria-label="Nilai utama">
              <div className={styles.highlight}>
                <span className={styles.hIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <div className={styles.hText}>
                  <p className={styles.hTitle}>Aman</p>
                  <p className={styles.hDesc}>Berkas ditangani rapi & bertanggung jawab.</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <span className={styles.hIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faListCheck} />
                </span>
                <div className={styles.hText}>
                  <p className={styles.hTitle}>Jelas</p>
                  <p className={styles.hDesc}>Persyaratan & alur disampaikan dari awal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (simple visual card) */}
          <aside className={styles.right} aria-label="Ringkasan cepat">
            <div className={styles.card}>
              <p className={styles.cardTitle}>Yang kamu dapatkan</p>

              <ul className={styles.cardList} aria-label="Manfaat utama">
                <li className={styles.cardItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Penjelasan persyaratan yang mudah dipahami
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Alur rapi dari konsultasi sampai selesai
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Update status proses secara berkala
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Hemat waktu: minim antre & bolak-balik
                </li>
              </ul>

              <p className={styles.cardNote}>
                Mulai dari chat dulu, kami bantu cek kebutuhanmu.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}