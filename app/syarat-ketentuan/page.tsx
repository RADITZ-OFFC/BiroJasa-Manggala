// app/syarat-ketentuan/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import styles from "./SyaratKetentuanPage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileContract,
  faShieldHalved,
  faHandshake,
  faListCheck,
  faClock,
  faTriangleExclamation,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;
const canonical = `${siteUrl}/syarat-ketentuan`;

const pageTitle = `Syarat & Ketentuan | ${siteName}`;
const pageDescription =
  "Syarat & ketentuan layanan BiroJasa Manggala Indonesia: ketentuan penggunaan layanan pengurusan surat kendaraan, tanggung jawab pelanggan, alur kerja, estimasi, dan komunikasi yang transparan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "syarat dan ketentuan biro jasa",
    "terms and conditions biro jasa",
    "ketentuan layanan pengurusan STNK",
    "biro jasa Ciputat",
    "biro jasa Tangerang Selatan",
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
        alt: "BiroJasa Manggala Indonesia — Syarat & Ketentuan",
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

export default function SyaratKetentuanPage() {
  const waMessage =
    "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau tanya syarat & ketentuan layanan.";
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

  const lastUpdated = "27 April 2025";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#Birojasa-Manggala`,
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
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${canonical}#terms`,
        name: "Syarat & Ketentuan Layanan BiroJasa Manggala Indonesia",
        url: canonical,
        inLanguage: "id-ID",
        dateModified: lastUpdated,
        publisher: { "@id": `${siteUrl}#Birojasa-Manggala` },
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
          { "@type": "ListItem", position: 2, name: "Syarat & Ketentuan", item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero} aria-label="Syarat dan ketentuan layanan">
          <div className={styles.inner}>
            <div className={styles.badge} aria-label="Label halaman">
              <span className={styles.badgeIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faFileContract} />
              </span>
              <span>Syarat & Ketentuan</span>
            </div>

            <h1 className={styles.title}>
              Aturan sederhana agar proses tetap <span className={styles.em}>aman</span>,{" "}
              <span className={styles.em}>jelas</span>, dan{" "}
              <span className={styles.em}>transparan</span>.
            </h1>

            <p className={styles.lead}>
              Dokumen kendaraan itu penting. Karena itu, kami menetapkan syarat & ketentuan agar
              pengurusan berjalan rapi: kamu paham alurnya, kami bisa bantu prosesnya tanpa bikin
              kamu bolak-balik.
            </p>

            <div className={styles.metaRow} aria-label="Info pembaruan dan CTA">
              <div className={styles.updated}>
                <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                Terakhir diperbarui: <strong>{lastUpdated}</strong>
              </div>

              <div className={styles.heroActions}>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btnPrimary ${styles.heroCta}`}
                  aria-label="Tanya syarat & ketentuan via WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                  Tanya via WhatsApp
                </a>

                <Link
                  href="/kebijakan-privasi"
                  className={`btn btnSecondary ${styles.heroAlt}`}
                  aria-label="Baca kebijakan privasi"
                >
                  Lihat Kebijakan Privasi
                </Link>
              </div>
            </div>

            <div className={styles.trustRow} aria-label="Ringkasan prinsip layanan">
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                Berkas ditangani aman & bertanggung jawab
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faListCheck} />
                </span>
                Persyaratan & alur dijelaskan di awal
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faHandshake} />
                </span>
                Komunikasi sopan, jelas, dan transparan
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className={styles.content} aria-label="Isi syarat dan ketentuan">
          <div className={styles.inner}>
            <div className={styles.grid}>
              {/* 1 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>1) Ruang lingkup layanan</h2>
                <ul className={styles.ul}>
                  <li>
                    Syarat & ketentuan ini berlaku untuk konsultasi dan penggunaan layanan{" "}
                    <strong>pengurusan surat kendaraan</strong> yang disediakan BiroJasa Manggala Indonesia.
                  </li>
                  <li>
                    Layanan dapat mencakup (sesuai kebutuhan klien): perpanjangan STNK tahunan, STNK 5
                    tahunan, balik nama, mutasi masuk, ganti nomor plat, ubah bentuk/warna, STNK
                    hilang/rusak, dan plat custom.
                  </li>
                  <li>
                    Jika ada ketentuan tambahan sesuai kasus/area, kami akan informasikan secara jelas
                    sebelum proses berjalan.
                  </li>
                </ul>
              </article>

              {/* 2 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>2) Konsultasi dan komunikasi</h2>
                <ol className={styles.ol}>
                  <li>
                    Konsultasi dapat dimulai via WhatsApp. Kamu boleh tanya dulu—kami bantu arahkan
                    layanan yang tepat dan persyaratan berkasnya.
                  </li>
                  <li>
                    Demi kejelasan proses, kami bisa meminta detail seperlunya (jenis layanan, wilayah,
                    kondisi berkas, kebutuhan cek fisik, dan sebagainya).
                  </li>
                  <li>
                    Kami berupaya memberi update status yang jelas. Namun, waktu respons bisa
                    dipengaruhi jam operasional dan volume chat.
                  </li>
                </ol>

                <div className={styles.note} role="note" aria-label="Catatan komunikasi">
                  <span className={styles.noteIcon} aria-hidden="true">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                  </span>
                  <p className={styles.noteText}>
                    Untuk menghindari miskomunikasi, mohon pastikan data/berkas yang kamu kirim sudah
                    benar dan sesuai.
                  </p>
                </div>
              </article>

              {/* 3 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>3) Persyaratan dokumen dan keaslian</h2>
                <ul className={styles.ul}>
                  <li>
                    Kamu bertanggung jawab memastikan dokumen yang diberikan adalah <strong>valid</strong>,
                    milik yang berhak, dan sesuai kebutuhan layanan.
                  </li>
                  <li>
                    Beberapa layanan membutuhkan <strong>cek fisik</strong> atau dokumen pendukung
                    (misalnya laporan kehilangan, surat kuasa, arsip dokumen, rekomendasi bengkel resmi).
                  </li>
                  <li>
                    Jika ada kekurangan/ketidaksesuaian dokumen, proses dapat tertunda sampai
                    kelengkapan terpenuhi.
                  </li>
                </ul>
              </article>

              {/* 4 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>4) Alur kerja dan estimasi</h2>
                <ol className={styles.ol}>
                  <li>Konsultasi → verifikasi persyaratan → koordinasi penyerahan berkas.</li>
                  <li>Proses pengurusan berjalan sesuai layanan yang disepakati.</li>
                  <li>Update status → dokumen selesai dan dikembalikan sesuai kesepakatan.</li>
                </ol>
                <ul className={styles.ul}>
                  <li>
                    Estimasi waktu dipengaruhi oleh kelengkapan berkas, kebutuhan cek fisik, antrean,
                    dan ketentuan wilayah/instansi terkait.
                  </li>
                  <li>
                    Kami akan berusaha memberi estimasi yang realistis setelah pengecekan awal.
                  </li>
                </ul>
              </article>

              {/* 5 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>5) Biaya dan pembayaran</h2>
                <ul className={styles.ul}>
                  <li>
                    Kami mengutamakan <strong>transparansi</strong>: sebelum proses dimulai, kamu akan
                    mendapat penjelasan terkait kebutuhan layanan dan hal-hal yang memengaruhi proses.
                  </li>
                  <li>
                    Besaran biaya dapat berbeda tergantung layanan, kondisi berkas, dan wilayah.{" "}
                    <strong>Kami tidak mengunci angka</strong> tanpa pengecekan kasus.
                  </li>
                  <li>
                    Jika ada perubahan kebutuhan proses, kami akan mengomunikasikan terlebih dulu.
                  </li>
                </ul>

                <div className={styles.note} role="note" aria-label="Catatan biaya">
                  <span className={styles.noteIcon} aria-hidden="true">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                  </span>
                  <p className={styles.noteText}>
                    Kami tidak menampilkan klaim “harga pasti” di halaman ini karena tiap kasus bisa
                    berbeda. Untuk estimasi, chat WhatsApp dulu ya.
                  </p>
                </div>
              </article>

              {/* 6 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>6) Penanganan dokumen & keamanan</h2>
                <ul className={styles.ul}>
                  <li>
                    Kami berkomitmen menangani dokumen klien dengan proses yang rapi: pengambilan,
                    penyimpanan, dan penyerahan dilakukan tertib.
                  </li>
                  <li>
                    Kamu disarankan menyimpan fotokopi/scan dokumen penting untuk arsip pribadi.
                  </li>
                  <li>
                    Untuk detail kebijakan data dan kerahasiaan, silakan baca{" "}
                    <Link className={styles.inlineLink} href="/kebijakan-privasi">
                      Kebijakan Privasi
                    </Link>
                    .
                  </li>
                </ul>
              </article>

              {/* 7 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>7) Pembatalan & perubahan permintaan</h2>
                <ul className={styles.ul}>
                  <li>
                    Jika kamu ingin membatalkan atau mengubah layanan, segera informasikan agar kami
                    bisa menyesuaikan alur proses.
                  </li>
                  <li>
                    Untuk proses yang sudah berjalan, penyesuaian kemungkinan memerlukan waktu
                    koordinasi tambahan.
                  </li>
                  <li>
                    Pengembalian dokumen dilakukan sesuai kesepakatan, dan kami akan berkomunikasi
                    dengan jelas terkait status terakhir.
                  </li>
                </ul>
              </article>

              {/* 8 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>8) Tautan pihak ketiga</h2>
                <ul className={styles.ul}>
                  <li>
                    Website ini dapat memuat tautan ke pihak ketiga (misalnya WhatsApp, Google Maps,
                    atau Instagram). Kebijakan dan layanan pihak ketiga berada di luar kendali kami.
                  </li>
                  <li>
                    Kami menyarankan kamu membaca kebijakan pihak ketiga jika diperlukan.
                  </li>
                </ul>
              </article>

              {/* 9 */}
              <article className={styles.card}>
                <h2 className={styles.h2}>9) Perubahan syarat & ketentuan</h2>
                <ul className={styles.ul}>
                  <li>
                    Kami dapat memperbarui syarat & ketentuan ini untuk menyesuaikan kebutuhan layanan
                    dan operasional.
                  </li>
                  <li>
                    Tanggal pembaruan akan ditampilkan di bagian atas halaman ini.
                  </li>
                </ul>
              </article>
            </div>

            {/* Closing CTA */}
            <div className={styles.closing} aria-label="CTA syarat dan ketentuan">
              <div className={styles.closingLeft}>
                <h2 className={styles.closingTitle}>Butuh penjelasan yang lebih spesifik?</h2>
                <p className={styles.closingText}>
                  Kirim kebutuhan layanan kamu lewat WhatsApp. Kami bantu jelaskan persyaratan, alur,
                  dan langkah yang paling tepat supaya kamu tidak bingung berkas dan tidak bolak-balik.
                </p>

                <div className={styles.closingActions}>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btnPrimary ${styles.closeCta}`}
                    aria-label="Konsultasi via WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                    Konsultasi Gratis
                  </a>

                  <a
                    href="mailto:support@raditzoffc.my.id"
                    className={`btn btnSecondary ${styles.closeAlt}`}
                    aria-label="Email BiroJasa Manggala Indonesia"
                  >
                    <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                    Email
                  </a>

                  <a
                    href="https://maps.app.goo.gl/SSgcD7aLdy2w69VR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btnSecondary ${styles.closeAlt}`}
                    aria-label="Buka lokasi di Google Maps"
                  >
                    <FontAwesomeIcon icon={faLocationArrow} aria-hidden="true" />
                    Lokasi
                  </a>
                </div>
              </div>

              <div className={styles.closingRight}>
                <div className={styles.miniCard}>
                  <div className={styles.miniTitle}>Link cepat</div>
                  <ul className={styles.miniLinks}>
                    <li>
                      <Link href="/layanan">Lihat semua layanan</Link>
                    </li>
                    <li>
                      <Link href="/kontak">Halaman kontak</Link>
                    </li>
                    <li>
                      <Link href="/kebijakan-privasi">Kebijakan privasi</Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.miniCard}>
                  <div className={styles.miniTitle}>Alamat</div>
                  <p className={styles.miniText}>
                    Jl. Cinangsi RT.12/RW.03, Ciawang, Leuwisari, Tasikmalaya, West Java 46464, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}