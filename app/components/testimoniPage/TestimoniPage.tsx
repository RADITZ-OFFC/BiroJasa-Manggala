"use client";

// app/components/testimoniPage/TestimoniPage.tsx
import { useState } from "react";
import Link from "next/link";
import styles from "./TestimoniPage.module.scss";
import TestimoniForm from "./TestimoniForm";
import TestimoniList from "./TestimoniList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function TestimoniPage() {
  // Setiap kali form berhasil submit, naikkan refreshKey → TestimoniList re-fetch
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <section
      className={styles.section}
      aria-label="Halaman testimoni pelanggan BiroJasa Manggala Indonesia"
    >
      <div className={styles.inner}>

        {/* ── Page header ── */}
        <header className={styles.pageHeader}>
          <div className={styles.headerBadge}>
            <FontAwesomeIcon icon={faStar} aria-hidden="true" />
            Dipercaya pelanggan
          </div>
          <h1 className={styles.pageTitle}>
            Apa kata mereka yang sudah&nbsp;
            <span className={styles.titleAccent}>pakai layanan kami?</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Pengalaman nyata dari pelanggan yang sudah mempercayakan pengurusan
            dokumen kendaraan dan administrasi mereka kepada BiroJasa Manggala
            Indonesia.
          </p>
          <Link
            href="https://maps.app.goo.gl/SSgcD7aLdy2w69VR9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleLink}
            aria-label="Lihat semua ulasan di Google Maps"
          >
            <FontAwesomeIcon icon={faGoogle} aria-hidden="true" />
            Lihat semua ulasan di Google
          </Link>
        </header>

        {/* ── Stats strip ── */}
        <div className={styles.statsRow} aria-label="Ringkasan kepuasan pelanggan">
          <div className={styles.statItem}>
            <span className={styles.statNum}>100+</span>
            <span className={styles.statLabel}>Pelanggan dilayani</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statItem}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>Rating Google</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Berkas aman</span>
          </div>
        </div>

        {/* ── Form tulis ulasan ── */}
        <div className={styles.formSection}>
          <div className={styles.formSectionHeader}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.formSectionIcon} aria-hidden="true" />
            <div>
              <h2 className={styles.formSectionTitle}>Tulis ulasan kamu</h2>
              <p className={styles.formSectionSubtitle}>
                Sudah pakai layanan kami? Ceritakan pengalamanmu — bantu pelanggan lain buat keputusan yang tepat.
              </p>
            </div>
          </div>
          <TestimoniForm onSubmitted={() => setRefreshKey((k) => k + 1)} />
        </div>

        {/* ── Daftar ulasan ── */}
        <div className={styles.listSection}>
          <h2 className={styles.listTitle}>Ulasan dari pelanggan</h2>
          <TestimoniList refreshKey={refreshKey} />
        </div>

      </div>
    </section>
  );
}
