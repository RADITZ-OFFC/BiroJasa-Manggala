"use client";

// app/components/testimoniPage/TestimoniForm.tsx
import { useState } from "react";
import styles from "./TestimoniPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleCheck,
  faTriangleExclamation,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const LAYANAN_OPTIONS = [
  "Perpanjang STNK Tahunan",
  "Perpanjang STNK 5 Tahunan",
  "Balik Nama Kendaraan",
  "Mutasi Masuk Kendaraan",
  "Ganti Nomor Plat",
  "Ubah Bentuk / Warna Kendaraan",
  "STNK Hilang / Rusak",
  "Plat Custom",
  "SIM A (Baru / Perpanjang)",
  "SIM C (Baru / Perpanjang)",
  "KTP, KK & Akte Kelahiran",
  "Pendaftaran NPWP",
  "Pendaftaran NIB",
  "Lainnya",
];

type Status = "idle" | "loading" | "success" | "error";

export default function TestimoniForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [layanan, setLayanan] = useState("");
  const [ulasan, setUlasan] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/testimoni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, lokasi, layanan, ulasan }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Terjadi kesalahan, coba lagi.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setNama("");
      setLokasi("");
      setLayanan("");
      setUlasan("");
      // Refresh daftar ulasan di parent
      onSubmitted();
    } catch {
      setErrorMsg("Gagal mengirim. Periksa koneksi internet kamu.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.formSuccess} role="alert">
        <span className={styles.formSuccessIcon}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
        <div>
          <p className={styles.formSuccessTitle}>Terima kasih sudah berbagi!</p>
          <p className={styles.formSuccessText}>
            Ulasan kamu sedang kami tinjau dan akan segera ditampilkan.
          </p>
        </div>
        <button
          type="button"
          className={styles.formSuccessReset}
          onClick={() => setStatus("idle")}
        >
          Tulis ulasan lagi
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      aria-label="Form tulis ulasan testimoni"
    >
      <div className={styles.formRow}>
        {/* Nama */}
        <div className={styles.formGroup}>
          <label htmlFor="tf-nama" className={styles.formLabel}>
            Nama <span aria-hidden="true">*</span>
          </label>
          <input
            id="tf-nama"
            type="text"
            className={styles.formInput}
            placeholder="Contoh: Budi Santoso"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            maxLength={80}
            required
            autoComplete="name"
          />
        </div>

        {/* Lokasi */}
        <div className={styles.formGroup}>
          <label htmlFor="tf-lokasi" className={styles.formLabel}>
            Kota / Kecamatan <span aria-hidden="true">*</span>
          </label>
          <input
            id="tf-lokasi"
            type="text"
            className={styles.formInput}
            placeholder="Contoh: Singaparna, Tasikmalaya"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            maxLength={100}
            required
          />
        </div>
      </div>

      {/* Layanan */}
      <div className={styles.formGroup}>
        <label htmlFor="tf-layanan" className={styles.formLabel}>
          Layanan yang diurus <span aria-hidden="true">*</span>
        </label>
        <select
          id="tf-layanan"
          className={styles.formSelect}
          value={layanan}
          onChange={(e) => setLayanan(e.target.value)}
          required
        >
          <option value="" disabled>
            — Pilih layanan —
          </option>
          {LAYANAN_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Ulasan */}
      <div className={styles.formGroup}>
        <label htmlFor="tf-ulasan" className={styles.formLabel}>
          Ulasan kamu <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="tf-ulasan"
          className={styles.formTextarea}
          placeholder="Ceritakan pengalaman kamu menggunakan layanan BiroJasa Manggala Indonesia..."
          value={ulasan}
          onChange={(e) => setUlasan(e.target.value)}
          rows={4}
          maxLength={1000}
          required
        />
        <span className={styles.charCount}>{ulasan.length} / 1000</span>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className={styles.formError} role="alert">
          <FontAwesomeIcon icon={faTriangleExclamation} aria-hidden="true" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className={`${styles.formSubmit} btn btnPrimary`}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <FontAwesomeIcon icon={faSpinner} spin aria-hidden="true" />
            Mengirim...
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
            Kirim Ulasan
          </>
        )}
      </button>
    </form>
  );
}
