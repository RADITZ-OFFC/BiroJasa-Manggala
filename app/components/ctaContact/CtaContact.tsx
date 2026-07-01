// app/components/ctaContact/CtaContact.tsx
import Link from "next/link";
import styles from "./CtaContact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faFileCircleCheck,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

export default function CtaContact() {
  return (
    <section className={styles.section} aria-label="CTA penutup kontak">
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span className={styles.kickerText}>Siap mulai?</span>
            </div>

            <h2 className={styles.title}>
              Mulai dari chat, kami bantu cek kebutuhan & persyaratan berkasmu
            </h2>

            <p className={styles.subtitle}>
              Kamu tidak perlu bingung berkas, capek antre, atau khawatir biaya tidak jelas.
              Kami jelaskan alur dari awal: <strong>aman</strong>, <strong>transparan</strong>, dan{" "}
              <strong>proses jelas</strong>.
            </p>

            <div className={styles.points} aria-label="Keunggulan utama">
              <div className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faFileCircleCheck} />
                </span>
                <span className={styles.pointText}>Cek berkas & arahkan langkahnya</span>
              </div>

              <div className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <span className={styles.pointText}>Penanganan rapi, komunikasi jelas</span>
              </div>
            </div>
          </div>

          <div className={styles.right} aria-label="Tombol aksi">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaPrimary} btn btnPrimary`}
              aria-label="Chat WhatsApp sekarang"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Chat WhatsApp Sekarang
            </a>

            <Link
              href="/layanan"
              className={`${styles.ctaSecondary} btn btnSecondary`}
              aria-label="Lihat semua layanan"
            >
              Lihat layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>

            <p className={styles.hint}>
              Tips cepat: kirim format{" "}
              <span className={styles.format}>“Layanan: … / Area: … / Kondisi berkas: …”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}