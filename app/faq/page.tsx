// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faChevronDown,
  faListCheck,
  faShieldHalved,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;
const canonical = `${siteUrl}/faq`;

const pageTitle = `FAQ | ${siteName}`;
const pageDescription =
  "Pertanyaan yang sering ditanyakan tentang syarat, proses, estimasi, biaya, dan keamanan berkas untuk pengurusan STNK & dokumen kendaraan. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "FAQ pengurusan STNK",
    "syarat perpanjang STNK tahunan",
    "syarat STNK 5 tahunan",
    "cek fisik STNK 5 tahunan",
    "biaya pengurusan STNK",
    "keamanan berkas STNK BPKB",
    "jemput antar berkas STNK",
    "estimasi pengurusan STNK",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "biro jasa STNK Jabodetabek",
    "BiroJasa Manggala Indonesia",
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
        alt: "BiroJasa Manggala Indonesia — FAQ",
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

export default function FaqPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal pengurusan STNK dan berkas kendaraan.";
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

  const faqs = [
    {
      q: "Apa saja syarat perpanjang STNK tahunan?",
      a: "Untuk perpanjang STNK tahunan, persyaratan umumnya: STNK asli, KTP asli, dan surat kuasa (jika pengurusan diwakilkan). Kalau kamu chat dulu, kami bantu cek apakah ada kebutuhan tambahan sesuai kondisi berkas dan wilayah.",
      links: [
        { label: "Detail layanan STNK Tahunan", href: "/layanan/perpanjang-stnk-tahunan" },
      ],
    },
    {
      q: "Apa beda STNK tahunan vs STNK 5 tahunan?",
      a: "STNK tahunan fokus pada perpanjangan rutin. STNK 5 tahunan biasanya memerlukan cek fisik (nomor rangka/nomor kendaraan) selain dokumen utama. Kami bantu jelaskan langkahnya dengan bahasa yang mudah supaya kamu tidak bolak-balik.",
      links: [
        { label: "Detail layanan STNK 5 Tahunan", href: "/layanan/perpanjang-stnk-5-tahunan" },
      ],
    },
    {
      q: "Apakah kendaraan harus hadir saat cek fisik (misalnya STNK 5 tahunan, balik nama, mutasi, ganti plat, plat custom)?",
      a: "Untuk layanan yang mensyaratkan cek fisik, biasanya diperlukan verifikasi nomor rangka/nomor kendaraan. Detail kebutuhannya bisa berbeda tergantung layanan dan wilayah. Chat dulu—kami cekkan kebutuhan paling tepat untuk kasus kamu sebelum kamu jalan.",
    },
    {
      q: "Apa saja syarat balik nama kendaraan?",
      a: "Persyaratan balik nama umumnya: BPKB asli, STNK asli, fotocopy KTP pemilik baru, surat kuasa (jika diwakilkan), dan cek fisik. Kami bantu cek kelengkapan berkasnya dulu supaya prosesnya rapi.",
      links: [{ label: "Detail layanan Balik Nama", href: "/layanan/balik-nama-kendaraan" }],
    },
    {
      q: "Apa saja syarat mutasi masuk kendaraan (dari luar daerah)?",
      a: "Mutasi masuk umumnya memerlukan: BPKB asli, arsip BPKB (dari luar daerah), STNK asli, arsip STNK, KTP asli, surat kuasa (jika diwakilkan), dan cek fisik. Karena ada komponen arsip, kami sarankan konsultasi dulu agar langkahnya tidak salah.",
      links: [{ label: "Detail layanan Mutasi Masuk", href: "/layanan/mutasi-masuk-kendaraan" }],
    },
    {
      q: "Apa saja syarat STNK hilang atau rusak?",
      a: "Untuk STNK hilang/rusak, umumnya diperlukan: BPKB asli, fotocopy STNK (jika ada), KTP asli, surat kuasa (jika diwakilkan), laporan kehilangan dari Polsek (untuk kasus hilang), dan cek fisik. Kalau kamu belum punya fotocopy STNK, chat dulu—kami bantu cek langkah yang paling aman.",
      links: [{ label: "Detail layanan STNK Hilang/Rusak", href: "/layanan/stnk-hilang-rusak" }],
    },
    {
      q: "Apa saja syarat plat custom (pilih nomor)?",
      a: "Persyaratan plat custom umumnya: BPKB asli, STNK asli, KTP asli, surat kuasa (jika diwakilkan), nomor yang dipilih, dan cek fisik. Kirim nomor pilihanmu via WhatsApp, kami bantu cek kebutuhan dan langkahnya.",
      links: [{ label: "Detail layanan Plat Custom", href: "/layanan/plat-custom" }],
    },
    {
      q: "Apakah bisa konsultasi dulu sebelum proses?",
      a: "Bisa. Justru kami sarankan mulai dari konsultasi dulu supaya jelas: layanan yang tepat, persyaratan, dan alurnya. Kamu akan dapat penjelasan yang rapi dan mudah dipahami sebelum memutuskan lanjut.",
    },
    {
      q: "Apakah ada layanan jemput-antar berkas?",
      a: "Ya, alur layanan kami memang dibuat praktis: konsultasi → verifikasi persyaratan → penjemputan/penyerahan berkas → proses → update status → dokumen selesai diantar (sesuai kesepakatan). Untuk detail teknis (area/jadwal), chat dulu ya.",
    },
    {
      q: "Bagaimana keamanan dokumen saya?",
      a: "Kami mengutamakan keamanan dan kerahasiaan dokumen klien melalui proses penanganan yang rapi: pengambilan, penyimpanan, dan penyerahan dokumen dilakukan secara tertib. Kamu juga bisa minta update status agar tetap tenang selama proses berjalan.",
    },
    {
      q: "Bagaimana dengan biaya—apakah transparan?",
      a: "Kami menjaga transparansi: persyaratan dijelaskan di awal, alur kerja dijelaskan step-by-step, dan estimasi akan disampaikan sesuai kebutuhan kasusmu. Jika ada faktor yang bisa memengaruhi proses/biaya, kami komunikasikan lebih awal.",
    },
    {
      q: "Berapa lama estimasi proses pengurusannya?",
      a: "Estimasi tergantung kelengkapan berkas, jenis layanan, kebutuhan cek fisik, dan ketentuan/antrean wilayah. Yang pasti, kami bantu alur supaya lebih tertib dan kamu tetap dapat update status agar tidak menebak-nebak progress.",
    },
    {
      q: "Wilayah layanan BiroJasa Manggala Indonesia di mana saja?",
      a: "Wilayah layanan utama: Jabodetabek (dan sekitarnya sesuai jangkauan operasional). Kalau kamu berada di sekitar Ciputat–Tangerang Selatan, chat dulu—kami cekkan apakah prosesnya bisa kami bantu.",
    },
    {
      q: "Cara paling cepat untuk mulai order gimana?",
      a: "Chat WhatsApp dan tulis: (1) Layanan yang kamu butuhkan, (2) jenis kendaraan (motor/mobil), (3) area/wilayah, (4) dokumen yang sudah ada. Setelah itu kami cek persyaratan dan jelaskan langkah berikutnya.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="jsonld-faqpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="section">
        <div className="container">
          {/* HERO */}
          <section
            aria-label="FAQ Pengurusan STNK & Berkas Kendaraan"
            style={{
              paddingBlock: "3.2rem",
            }}
          >
            <div
              style={{
                maxWidth: "86rem",
                marginInline: "auto",
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
                <FontAwesomeIcon icon={faCircleQuestion} aria-hidden="true" />
                FAQ
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
                FAQ Pengurusan STNK & Berkas Kendaraan
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: "1.6rem",
                  lineHeight: 1.8,
                  color: "var(--color-text-muted)",
                }}
              >
                Biar kamu nggak bingung dan nggak bolak-balik, di sini kami rangkum pertanyaan
                yang paling sering ditanyakan: syarat, proses, estimasi, biaya, dan keamanan berkas.
                Kalau pertanyaanmu spesifik, klik WhatsApp—kami bantu cek kebutuhanmu.
              </p>

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
                  aria-label="Konsultasi gratis via WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                  Konsultasi Gratis
                </a>

                <Link href="/layanan" className="btn btnSecondary" aria-label="Lihat layanan">
                  Lihat layanan
                </Link>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    padding: "0.9rem 1.2rem",
                    borderRadius: "1.4rem",
                    border: "0.1rem solid var(--color-border)",
                    background: "rgba(255,255,255,0.7)",
                    color: "var(--color-text)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                  }}
                >
                  <FontAwesomeIcon icon={faShieldHalved} aria-hidden="true" />
                  Berkas ditangani aman & rapi
                </span>
              </div>

              <div
                style={{
                  marginTop: "1.2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.0rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1.35rem",
                  lineHeight: 1.7,
                }}
                aria-label="Ringkasan keunggulan"
              >
                <span style={{ display: "inline-flex", gap: "0.8rem", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faListCheck} aria-hidden="true" />
                  Persyaratan jelas
                </span>
                <span style={{ display: "inline-flex", gap: "0.8rem", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  Alur terarah & hemat waktu
                </span>
                <span style={{ display: "inline-flex", gap: "0.8rem", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                  Area utama: Jabodetabek
                </span>
              </div>
            </div>
          </section>

          {/* ACCORDION (no client JS, accessible) */}
          <section
            aria-label="Daftar FAQ"
            style={{
              paddingBottom: "4.0rem",
            }}
          >
            <div style={{ maxWidth: "86rem", marginInline: "auto" }}>
              <div style={{ display: "grid", gap: "1.0rem" }}>
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    style={{
                      borderRadius: "1.8rem",
                      border: "0.1rem solid var(--color-border)",
                      background: "rgba(255,255,255,0.9)",
                      boxShadow: "var(--shadow-sm)",
                      overflow: "hidden",
                    }}
                  >
                    <summary
                      style={{
                        cursor: "pointer",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1.2rem",
                        padding: "1.4rem 1.5rem",
                        fontSize: "1.55rem",
                        fontWeight: 950,
                        color: "var(--color-text)",
                      }}
                    >
                      <span>{f.q}</span>
                      <span
                        aria-hidden="true"
                        style={{
                          width: "3.4rem",
                          height: "3.4rem",
                          borderRadius: "1.2rem",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "0.1rem solid var(--color-border)",
                          background: "rgba(42, 157, 143, 0.08)",
                        }}
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </summary>

                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "1.45rem",
                          lineHeight: 1.8,
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {f.a}
                      </p>

                      {f.links?.length ? (
                        <div
                          style={{
                            marginTop: "1.0rem",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.8rem",
                          }}
                        >
                          {f.links.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              className="btn btnSecondary"
                              aria-label={l.label}
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>

              <div
                style={{
                  marginTop: "2.0rem",
                  padding: "1.6rem",
                  borderRadius: "2.0rem",
                  border: "0.1rem solid var(--color-border)",
                  background:
                    "linear-gradient(135deg, rgba(42, 157, 143, 0.10) 0%, rgba(247, 248, 250, 1) 45%, rgba(231, 111, 81, 0.08) 100%)",
                }}
                aria-label="CTA FAQ"
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "2.2rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  Masih bingung? Tanya aja dulu.
                </h2>
                <p
                  style={{
                    marginTop: "0.6rem",
                    marginBottom: "1.4rem",
                    fontSize: "1.5rem",
                    lineHeight: 1.8,
                    color: "var(--color-text-muted)",
                  }}
                >
                  Kirim layanan yang kamu butuhkan + dokumen yang sudah kamu punya. Kami bantu cek
                  persyaratan dan jelaskan langkahnya dengan jelas.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.0rem" }}>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnPrimary"
                    aria-label="Konsultasi gratis via WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                    Konsultasi Gratis
                  </a>

                  <Link href="/kontak" className="btn btnSecondary" aria-label="Ke halaman kontak">
                    Lihat kontak & lokasi
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}