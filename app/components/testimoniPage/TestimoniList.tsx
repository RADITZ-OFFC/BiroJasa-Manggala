"use client";

// app/components/testimoniPage/TestimoniList.tsx
import { useCallback, useEffect, useState } from "react";
import styles from "./TestimoniPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faClipboardCheck,
  faLocationDot,
  faSpinner,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import type { Testimoni } from "@/lib/supabase";

// Warna avatar berdasarkan index
const AVATAR_COLORS = [
  "#2a9d8f",
  "#e76f51",
  "#1f6f65",
  "#264653",
  "#e9c46a",
  "#f4a261",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function TestimoniList({ refreshKey }: { refreshKey: number }) {
  const [reviews, setReviews] = useState<Testimoni[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/testimoni", { cache: "no-store" });
      if (!res.ok) throw new Error("Gagal memuat ulasan.");
      const data: Testimoni[] = await res.json();
      setReviews(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews, refreshKey]);

  if (loading) {
    return (
      <div className={styles.listState} aria-live="polite" aria-busy="true">
        <FontAwesomeIcon icon={faSpinner} spin className={styles.stateIcon} aria-hidden="true" />
        <p>Memuat ulasan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.listState} role="alert">
        <p className={styles.stateError}>{error}</p>
        <button type="button" className={styles.retryBtn} onClick={fetchReviews}>
          Coba lagi
        </button>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className={styles.listState}>
        <FontAwesomeIcon icon={faInbox} className={styles.stateIcon} aria-hidden="true" />
        <p>Belum ada ulasan. Jadilah yang pertama!</p>
      </div>
    );
  }

  return (
    <div className={styles.grid} role="list" aria-label="Daftar ulasan pelanggan">
      {reviews.map((r, idx) => (
        <article key={r.id} className={styles.card} role="listitem">

          {/* ── Profil di atas ── */}
          <div className={styles.cardHeader}>
            {/* Avatar inisial */}
            <div className={styles.avatarWrap} aria-hidden="true">
              <span
                className={styles.avatarInitials}
                style={{ background: AVATAR_COLORS[idx % AVATAR_COLORS.length] }}
              >
                {getInitials(r.nama)}
              </span>
            </div>

            {/* Info */}
            <div className={styles.personInfo}>
              <span className={styles.personName}>{r.nama}</span>
              <span className={styles.personLayanan}>
                <FontAwesomeIcon icon={faClipboardCheck} className={styles.infoIcon} aria-hidden="true" />
                {r.layanan}
              </span>
              <span className={styles.personLocation}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.infoIcon} aria-hidden="true" />
                {r.lokasi}
              </span>
            </div>
          </div>

          {/* ── Ulasan di bawah ── */}
          <div className={styles.cardBody}>
            <span className={styles.quoteIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <p className={styles.reviewText}>{r.ulasan}</p>
          </div>

          {/* ── Tanggal paling bawah ── */}
          <span className={styles.personDate}>
            {formatDate(r.created_at)}
          </span>

        </article>
      ))}
    </div>
  );
}
