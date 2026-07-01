// app/kebijakan-privasi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faFileLines,
  faCircleCheck,
  faUserLock,
  faHandshake,
  faClock,
  faTriangleExclamation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;
const canonical = `${siteUrl}/kebijakan-privasi`;

const pageTitle = `Kebijakan Privasi | ${siteName}`;
const pageDescription =
  "Kebijakan privasi BiroJasa Manggala Indonesia: bagaimana kami mengumpulkan, menggunakan, menyimpan, dan menjaga kerahasiaan data & dokumen klien untuk pengurusan STNK dan berkas kendaraan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "kebijakan privasi biro jasa",
    "privacy policy biro jasa",
    "keamanan dokumen STNK BPKB",
    "kerahasiaan data klien",
    "BiroJasa Manggala Indonesia",
    "biro jasa Ciputat",
    "biro jasa Tangerang Selatan",
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: canonical,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "BiroJasa Manggala Indonesia — Kebijakan Privasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function KebijakanPrivasiPage() {
  const waMessage =
    "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau tanya terkait kebijakan privasi dan keamanan dokumen.";
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

  const lastUpdated = "27 April 2026"; // gunakan tanggal publish kebijakan

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#birojasa-Manggala`,
        name: siteName,
        url: siteUrl,
        telephone: "+6285324188967",
        email: "support@raditzoffc.my.id",
        hasMap: "https://maps.app.goo.gl/SSgcD7aLdy2w69VR9",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Cinangsi RT.12/RW.03, Ciawang, Kec. Leuwisari, Kabupaten Tasikmalaya",
          addressLocality: "Kabupaten Tasikmalaya",
          addressRegion: "JawaBarat",
          postalCode: "46464",
          addressCountry: "ID",
        },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
      },
      {
        "@type": "PrivacyPolicy",
        "@id": `${canonical}#privacy-policy`,
        url: canonical,
        name: pageTitle,
        inLanguage: "id-ID",
        description: pageDescription,
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#birojasa-Manggala` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "id-ID",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Kebijakan Privasi", item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-privacy-policy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="section">
        <div className="container">
          {/* HERO */}
          <section
            aria-label="Kebijakan Privasi BiroJasa Manggala Indonesia"
            style={{
              paddingBlock: "3.2rem",
              background:
                "linear-gradient(135deg, rgba(42, 157, 143, 0.10) 0%, rgba(247, 248, 250, 1) 48%, rgba(231, 111, 81, 0.08) 100%)",
              borderRadius: "2.4rem",
              border: "0.1rem solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
              marginTop: "2.0rem",
            }}
          >
            <div
              style={{
                maxWidth: "90rem",
                marginInline: "auto",
                paddingInline: "1.6rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "0.8rem 1.1rem",
                  borderRadius: "999rem",
                  border: "0.1rem solid rgba(42, 157, 143, 0.22)",
                  background: "rgba(42, 157, 143, 0.08)",
                  color: "var(--color-primary-dark)",
                  fontWeight: 900,
                  fontSize: "1.3rem",
                  letterSpacing: "0.03em",
                }}
              >
                <FontAwesomeIcon icon={faShieldHalved} aria-hidden="true" />
                Kebijakan Privasi
              </div>

              <h1
                style={{
                  marginTop: "1.2rem",
                  marginBottom: "0.8rem",
                  fontSize: "3.2rem",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Keamanan dan kerahasiaan dokumen adalah prioritas kami.
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: "1.6rem",
                  lineHeight: 1.8,
                  color: "var(--color-text-muted)",
                  maxWidth: "78rem",
                }}
              >
                BiroJasa Manggala Indonesia berkomitmen menjaga kerahasiaan data dan dokumen klien melalui proses
                yang rapi (pengambilan, penyimpanan, dan penyerahan berkas) serta komunikasi yang jelas
                dan transparan.
              </p>

              <div
                style={{
                  marginTop: "1.4rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.0rem",
                  alignItems: "center",
                  color: "var(--color-text-muted)",
                  fontSize: "1.35rem",
                }}
              >
                <span style={{ display: "inline-flex", gap: "0.8rem", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  Terakhir diperbarui: <strong style={{ color: "var(--color-text)" }}>{lastUpdated}</strong>
                </span>
              </div>

              <div
                style={{
                  marginTop: "1.6rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.0rem",
                  alignItems: "center",
                }}
              >
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btnPrimary"
                  aria-label="Tanya kebijakan privasi via WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                  Tanya via WhatsApp
                </a>

                <a
                  href="mailto:support@raditzoffc.my.id"
                  className="btn btnSecondary"
                  aria-label="Kirim email ke BiroJasa Manggala Indonesia"
                >
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                  Email Kami
                </a>

                <Link href="/kontak" className="btn btnSecondary" aria-label="Ke halaman kontak">
                  Lihat Kontak
                </Link>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section
            aria-label="Isi kebijakan privasi"
            style={{
              maxWidth: "90rem",
              marginInline: "auto",
              paddingBlock: "2.4rem",
            }}
          >
            {/* Card wrapper */}
            <div
              style={{
                borderRadius: "2.4rem",
                border: "0.1rem solid var(--color-border)",
                background: "rgba(255,255,255,0.92)",
                boxShadow: "var(--shadow-sm)",
                padding: "1.8rem",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                1) Ruang lingkup
              </h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.8rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  Kebijakan ini menjelaskan cara kami menangani data yang kamu berikan saat{" "}
                  <strong style={{ color: "var(--color-text)" }}>konsultasi</strong> atau{" "}
                  <strong style={{ color: "var(--color-text)" }}>menggunakan layanan pengurusan</strong>{" "}
                  (misalnya perpanjangan STNK, balik nama, mutasi masuk, ganti plat, ubah bentuk/warna,
                  STNK hilang/rusak, dan plat custom).
                </li>
                <li>
                  Kebijakan ini berlaku untuk komunikasi melalui{" "}
                  <strong style={{ color: "var(--color-text)" }}>WhatsApp</strong>,{" "}
                  <strong style={{ color: "var(--color-text)" }}>telepon</strong>,{" "}
                  <strong style={{ color: "var(--color-text)" }}>email</strong>, serta penyerahan dokumen
                  untuk kebutuhan pengurusan.
                </li>
              </ul>

              <div
                style={{
                  height: "0.1rem",
                  background: "var(--color-border)",
                  marginBlock: "1.8rem",
                }}
                aria-hidden="true"
              />

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                2) Data yang dapat kami terima
              </h2>

              <p
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                Agar proses{" "}
                <strong style={{ color: "var(--color-text)" }}>jelas, cepat, dan transparan</strong>,
                kami mungkin membutuhkan sebagian data berikut (sesuai layanan yang kamu pilih):
              </p>

              <ol
                style={{
                  margin: 0,
                  paddingLeft: "2.0rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Data kontak</strong>: nama, nomor WhatsApp,
                  dan (jika diperlukan) email.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Data identitas</strong>: data pada KTP yang
                  relevan untuk proses pengurusan (misalnya untuk verifikasi).
                </li>
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Data kendaraan</strong>: informasi pada STNK/BPKB
                  yang dibutuhkan sesuai jenis layanan.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Dokumen pendukung</strong>: surat kuasa, laporan kehilangan
                  (untuk STNK hilang), arsip dokumen (untuk mutasi masuk), rekomendasi bengkel resmi (untuk ubah bentuk/warna),
                  dan kebutuhan lain sesuai kasus.
                </li>
              </ol>

              <div
                style={{
                  marginTop: "1.2rem",
                  padding: "1.2rem 1.4rem",
                  borderRadius: "1.8rem",
                  border: "0.1rem solid var(--color-border)",
                  background: "rgba(231, 111, 81, 0.06)",
                  color: "var(--color-text)",
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                }}
                role="note"
                aria-label="Catatan"
              >
                <span aria-hidden="true" style={{ marginTop: "0.1rem" }}>
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </span>
                <div style={{ fontSize: "1.45rem", lineHeight: 1.8 }}>
                  <strong>Catatan:</strong> Kami hanya meminta data yang relevan dengan layanan yang kamu pilih.
                  Kalau kamu ragu data apa yang perlu dikirim, tanya dulu melalui WhatsApp.
                </div>
              </div>

              <div
                style={{
                  height: "0.1rem",
                  background: "var(--color-border)",
                  marginBlock: "1.8rem",
                }}
                aria-hidden="true"
              />

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                3) Cara kami menggunakan data
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.8rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />{" "}
                  Memastikan kamu memilih layanan yang tepat dan{" "}
                  <strong style={{ color: "var(--color-text)" }}>tidak salah berkas</strong>.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />{" "}
                  Menjelaskan persyaratan, alur proses, dan estimasi secara{" "}
                  <strong style={{ color: "var(--color-text)" }}>jelas & transparan</strong>.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />{" "}
                  Menghubungi kamu untuk{" "}
                  <strong style={{ color: "var(--color-text)" }}>update status</strong> dan konfirmasi detail yang diperlukan.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />{" "}
                  Menjalankan SOP penanganan dokumen (pengambilan, penyimpanan, penyerahan) agar{" "}
                  <strong style={{ color: "var(--color-text)" }}>aman dan tertib</strong>.
                </li>
              </ul>

              <div
                style={{
                  height: "0.1rem",
                  background: "var(--color-border)",
                  marginBlock: "1.8rem",
                }}
                aria-hidden="true"
              />

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                4) Kerahasiaan dan keamanan dokumen
              </h2>

              <p
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                Sesuai komitmen brand, kami menjaga keamanan dan kerahasiaan dokumen klien melalui SOP
                pengambilan, penyimpanan, dan penyerahan berkas.
              </p>

              <ol
                style={{
                  margin: 0,
                  paddingLeft: "2.0rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Pengambilan/penyerahan terkoordinasi</strong> sesuai kesepakatan
                  agar tidak membingungkan.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Penyimpanan dokumen tertib</strong> selama proses berjalan, dan
                  komunikasi status yang responsif.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Penyerahan kembali dokumen</strong> dilakukan dengan jelas dan
                  sesuai kesepakatan.
                </li>
              </ol>

              <div
                style={{
                  height: "0.1rem",
                  background: "var(--color-border)",
                  marginBlock: "1.8rem",
                }}
                aria-hidden="true"
              />

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                5) Pembagian data kepada pihak lain
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.8rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  Kami hanya menggunakan data/dokumen untuk kebutuhan pengurusan sesuai layanan yang kamu pilih.
                </li>
                <li>
                  Kami tidak membagikan data klien untuk tujuan promosi pihak lain tanpa persetujuan.
                </li>
                <li>
                  Dalam proses pengurusan, data/dokumen dapat digunakan sebagaimana diperlukan untuk keperluan administrasi layanan.
                </li>
              </ul>

              <div
                style={{
                  height: "0.1rem",
                  background: "var(--color-border)",
                  marginBlock: "1.8rem",
                }}
                aria-hidden="true"
              />

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                6) Hak dan pilihan kamu
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.8rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  <FontAwesomeIcon icon={faUserLock} aria-hidden="true" /> Kamu bisa{" "}
                  <strong style={{ color: "var(--color-text)" }}>bertanya dulu</strong> data apa saja yang perlu dikirim sebelum
                  memulai proses.
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandshake} aria-hidden="true" /> Kamu bisa meminta{" "}
                  <strong style={{ color: "var(--color-text)" }}>penjelasan alur</strong> dan persyaratan dengan jelas di awal.
                </li>
                <li>
                  <FontAwesomeIcon icon={faFileLines} aria-hidden="true" /> Jika ada informasi yang perlu dikoreksi
                  agar proses tidak salah, kamu bisa menghubungi kami lewat WhatsApp.
                </li>
              </ul>

              <div
                style={{
                  height: "0.1rem",
                  background: "var(--color-border)",
                  marginBlock: "1.8rem",
                }}
                aria-hidden="true"
              />

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  fontSize: "2.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                7) Hubungi kami
              </h2>

              <p
                style={{
                  marginTop: 0,
                  marginBottom: "1.0rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                Jika kamu punya pertanyaan tentang kebijakan privasi atau keamanan dokumen, kamu bisa
                hubungi kami lewat:
              </p>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.8rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                <li>
                  <strong style={{ color: "var(--color-text)" }}>WhatsApp:</strong>{" "}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--color-primary-dark)",
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    +62 853-2418-8967
                  </a>
                </li>
                <li>
                  <strong style={{ color: "var(--color-text)" }}>Email:</strong>{" "}
                  <a
                    href="mailto:support@raditzoffc.my.id"
                    style={{
                      color: "var(--color-primary-dark)",
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    support@raditzoffc.my.id
                  </a>
                </li>
              </ul>

              <div
                style={{
                  marginTop: "1.6rem",
                  padding: "1.4rem",
                  borderRadius: "2.0rem",
                  border: "0.1rem solid var(--color-border)",
                  background: "rgba(42, 157, 143, 0.06)",
                  color: "var(--color-text)",
                }}
                aria-label="Arahkan ke layanan"
              >
                <div style={{ fontSize: "1.55rem", fontWeight: 950, marginBottom: "0.6rem" }}>
                  Mau mulai konsultasi layanan?
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.0rem",
                    alignItems: "center",
                  }}
                >
                  <Link href="/layanan" className="btn btnSecondary" aria-label="Ke halaman layanan">
                    Lihat semua layanan
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnPrimary"
                    aria-label="Konsultasi via WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                    Konsultasi Gratis
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}