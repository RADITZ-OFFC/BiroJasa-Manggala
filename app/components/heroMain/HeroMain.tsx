"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./HeroMain.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

export default function HeroMain() {
  return (
    <section className={styles.hero} aria-label="Hero BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            Urus surat kendaraan • Kota TasikMalaya
          </p>

          <h1 className={styles.h1}>
            Biro Jasa Terpercaya — Jemput Berkas, Proses Jelas, Dokumen
            Diantar
          </h1>

          <p className={styles.subHeading}>
            Urus surat - surat tanpa ribet—cukup chat, kami bantu sampai selesai.
          </p>

          <p className={styles.desc}>
            BiroJasa Manggala Indonesia membantu pengurusan <strong>STNK</strong> dan
            kebutuhan surat - surat dengan alur yang rapi, komunikasi yang
            ramah, serta <strong>biaya transparan</strong>. Melayani{" "}
            <strong>TasikMalaya</strong>, <strong>Singaparna</strong>, dan
            sekitarnya (sesuai jangkauan operasional).
          </p>

          <div className={styles.ctaRow}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaPrimary} btn btnPrimary`}
              aria-label="Tanya aja dulu via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Tanya aja dulu
            </a>

            <Link
              href="/layanan"
              className={`${styles.ctaSecondary} btn btnSecondary`}
              aria-label="Lihat layanan kami"
            >
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              Lihat layanan kami
            </Link>
          </div>

          <ul className={styles.points} aria-label="Keunggulan utama">
            <li className={styles.point}>
              <span className={styles.pointIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faShieldHalved} />
              </span>
              <span className={styles.pointText}>
                <strong>Berkas aman</strong> & ditangani rapi (jemput–antar).
              </span>
            </li>

            <li className={styles.point}>
              <span className={styles.pointIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span className={styles.pointText}>
                <strong>Proses jelas</strong> + update status berkala.
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.imageWrap}>
            <Image
              src="/images/hero-birojasa-sahabat.png"
              alt="BiroJasa Manggala Indonesia membantu pengurusan surat - surat"
              width={980}
              height={980}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}