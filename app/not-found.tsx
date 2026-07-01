// app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | BiroJasa Manggala Indonesia",
  description:
    "Halaman yang kamu cari tidak ditemukan. Kembali ke beranda atau lihat layanan BiroJasa Manggala Indonesia. Konsultasi gratis via WhatsApp +6285324188967.",
  alternates: {
    canonical: `${siteUrl}/404`,
  },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteUrl}/404`,
    siteName: "BiroJasa Manggala Indonesia",
    title: "Halaman Tidak Ditemukan | BiroJasa Manggala Indonesia",
    description:
      "Halaman yang kamu cari tidak ditemukan. Kembali ke beranda atau lihat layanan BiroJasa Manggala Indonesia.",
    images: [
      {
        url: `${siteUrl}/images/og-birojasa-sahabat.jpg`,
        width: 1200,
        height: 630,
        alt: "BiroJasa Manggala Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halaman Tidak Ditemukan | BiroJasa Manggala Indonesia",
    description:
      "Halaman yang kamu cari tidak ditemukan. Kembali ke beranda atau lihat layanan BiroJasa Manggala Indonesia.",
    images: [`${siteUrl}/images/og-birojasa-sahabat.jpg`],
  },
};

export default function NotFound() {
  const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau konsultasi.";
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <main className="section">
      <div className="container">
        <div
          style={{
            maxWidth: "72rem",
            marginInline: "auto",
            paddingBlock: "5.2rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.9rem",
              padding: "0.9rem 1.2rem",
              borderRadius: "999rem",
              border: "0.1rem solid rgba(42, 157, 143, 0.22)",
              background: "rgba(42, 157, 143, 0.08)",
              color: "var(--color-primary-dark)",
              fontWeight: 900,
              fontSize: "1.3rem",
              letterSpacing: "0.03em",
            }}
            aria-label="Informasi halaman"
          >
            <FontAwesomeIcon icon={faTriangleExclamation} aria-hidden="true" />
            404 — Halaman tidak ditemukan
          </div>

          <h1
            style={{
              marginTop: "1.4rem",
              marginBottom: "0.8rem",
              fontSize: "3.2rem",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Waduh, link-nya tidak ada 😅
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "1.6rem",
              lineHeight: 1.8,
              color: "var(--color-text-muted)",
            }}
          >
            Mungkin halaman sudah dipindah atau URL-nya salah ketik. Tenang—kamu bisa
            kembali ke beranda, lihat daftar layanan, atau langsung chat untuk konsultasi.
          </p>

          <div
            style={{
              marginTop: "2.0rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.0rem",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              className="btn btnPrimary"
              aria-label="Kembali ke Beranda"
            >
              <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
              Ke Beranda
            </Link>

            <Link
              href="/layanan"
              className="btn btnSecondary"
              aria-label="Lihat semua layanan"
            >
              Lihat Layanan
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnSecondary"
              aria-label="Konsultasi gratis via WhatsApp"
            >
              Konsultasi Gratis
            </a>
          </div>

          <div
            style={{
              marginTop: "2.4rem",
              paddingTop: "1.6rem",
              borderTop: "0.1rem solid var(--color-border)",
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              color: "var(--color-text-muted)",
              fontSize: "1.35rem",
              lineHeight: 1.7,
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
            <span>
              Kalau kamu datang dari link tertentu dan bingung harus ke mana, chat saja —
              kami bantu arahkan.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}