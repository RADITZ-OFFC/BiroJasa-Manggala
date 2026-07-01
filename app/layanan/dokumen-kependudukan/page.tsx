// app/layanan/dokumen-kependudukan/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroService from "@/app/components/heroService/HeroService";
import BenefitsSummary from "@/app/components/benefitsSummary/BenefitsSummary";
import PersyaratanDokumen from "@/app/components/persyaratanDokumen/PersyaratanDokumen";
import AlurProses from "@/app/components/alurProses/AlurProses";
import Estimasi from "@/app/components/estimasi/Estimasi";
import FaqMini from "@/app/components/faqMini/FaqMini";

import { faClock } from "@fortawesome/free-solid-svg-icons";
import CtaClosingService from "@/app/components/ctaClosingService/CtaClosingService";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const canonical = `${siteUrl}/layanan/dokumen-kependudukan`;

const pageTitle = `Jasa Pengurusan KTP, KK & Akte Kelahiran | ${siteName}`;
const pageDescription =
  "Bantuan pengurusan dokumen kependudukan seperti KTP, Kartu Keluarga, dan Akte Kelahiran. Proses terarah, persyaratan jelas, dan tanpa perlu antre panjang. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa pengurusan KTP",
    "buat kartu keluarga online",
    "jasa akte kelahiran",
    "biro jasa KTP Tasikmalaya",
    "urus pindah datang KK",
    "syarat buat akte kelahiran",
    "ganti KTP rusak",
    "biro jasa dokumen kependudukan",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Dokumen Kependudukan",
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

export default function KependudukanPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal pengurusan dokumen KTP/KK/Akte.";
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#Birojasa-Manggala`,
        name: siteName,
        url: siteUrl,
        telephone: "+6285324188967",
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
        name: "Jasa Dokumen Kependudukan — KTP, KK, & Akte Kelahiran",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-kependudukan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Dokumen Kependudukan"
          subtitle="Urus KTP, Kartu Keluarga, dan Akte Kelahiran tanpa perlu bolak-balik ke kantor dinas."
          description="Kami membantu mendampingi dan mengarahkan kelengkapan berkas kependudukan Anda agar proses administrasi di Disdukcapil berjalan lancar dan cepat."
          badgeText="Layanan Kependudukan"
          primaryCtaLabel="Konsultasi Berkas"
          primaryCtaMessage={waMessage}
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Dokumen Kependudukan", href: "/layanan/dokumen-kependudukan" },
          ]}
          highlights={[
            {
              title: "Persyaratan Jelas",
              description: "Kami cek detail berkas Anda agar tidak ada kekurangan saat pengajuan.",
            },
            {
              title: "Proses Transparan",
              description: "Informasi status pengurusan kami update secara berkala kepada Anda.",
            },
            {
              title: "Tanpa Antre",
              description: "Anda cukup siapkan berkas, kami yang bantu arahkan proses administrasinya.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Manfaat Menggunakan Jasa Kami"
          subheading="Solusi bagi Anda yang sibuk atau bingung dengan prosedur administrasi kependudukan."
          items={[
            {
              title: "Efisien & Hemat Waktu",
              description: "Tidak perlu izin kerja atau meluangkan waktu berjam-jam untuk antre di kantor dinas.",
            },
            {
              title: "Arahan Berkas Akurat",
              description: "Menghindari penolakan berkas karena ketidaktahuan syarat terbaru dari Disdukcapil.",
            },
            {
              title: "Penanganan Aman",
              description: "Dokumen pribadi Anda kami tangani dengan tertib dan penuh tanggung jawab.",
            },
            {
              title: "Update Berkala",
              description: "Anda tidak perlu bertanya-tanya, kami akan mengabari setiap progres dokumen Anda.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan Dokumen"
          subheading="Siapkan berkas berikut sesuai dengan jenis pengurusan yang Anda butuhkan."
          items={[
            { label: "Fotokopi Kartu Keluarga (KK) Lama" },
            { label: "Fotokopi KTP / KTP Rusak (Jika ganti)" },
            { label: "Surat Kenal Lahir dari RS/Bidan", note: "Untuk pembuatan Akte Kelahiran." },
            { label: "Buku Nikah / Akte Perkawinan Orang Tua" },
            { label: "Surat Keterangan Kehilangan dari Polisi", note: "Wajib jika KTP atau KK hilang." },
            { label: "Ijazah Terakhir", note: "Untuk verifikasi kesesuaian data nama/tgl lahir." },
          ]}
        />

        <AlurProses
          heading="Alur Pengurusan Dokumen"
          subheading="Prosedur sederhana agar dokumen Anda segera terbit."
          steps={[
            {
              title: "Konsultasi & Kirim Foto Berkas",
              description: "Kirim foto dokumen awal via WhatsApp untuk pengecekan kelayakan berkas.",
            },
            {
              title: "Verifikasi Data",
              description: "Tim kami memeriksa kesesuaian data antara KTP, KK, dan Ijazah agar tidak terjadi data ganda.",
            },
            {
              title: "Penyerahan Berkas Fisik",
              description: "Penyerahan dokumen asli yang dibutuhkan sesuai kesepakatan area.",
            },
            {
              title: "Proses ke Instansi Terkait",
              description: "Kami dampingi pengajuan administrasi ke kantor dinas kependudukan.",
            },
            {
              title: "Penyerahan Hasil Jadi",
              description: "Dokumen (KTP/KK/Akte) yang telah selesai kami serahkan kembali kepada Anda.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi Waktu Pengurusan"
          subheading="Waktu penyelesaian sangat bergantung pada kebijakan teknis di instansi setempat."
          points={[
            {
              title: "Ketersediaan Blangko KTP",
              description: "Proses cetak KTP fisik bergantung pada ketersediaan stok blangko di Disdukcapil.",
            },
            {
              title: "Update Database Pusat",
              description: "Sinkronisasi data ke server pusat (SIAK) terkadang membutuhkan waktu tunggu.",
            },
            {
              title: "Validasi Data Antar Wilayah",
              description: "Proses pindah datang atau pecah KK antar kota membutuhkan waktu verifikasi tambahan.",
              icon: faClock,
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ Kependudukan"
          title="Pertanyaan Umum Dokumen Kependudukan"
          subtitle="Jawaban atas pertanyaan yang sering diajukan pelanggan kami."
          waMessage={waMessage}
          faqs={[
            {
              q: "Apakah bisa urus KTP luar kota?",
              a: "Untuk cetak ulang karena rusak/hilang bisa dibantu dengan syarat tertentu, namun untuk pindah domisili harus melalui prosedur cabut berkas.",
            },
            {
              q: "Berapa lama proses pecah KK setelah menikah?",
              a: "Estimasi normal adalah 3-7 hari kerja setelah semua berkas (Buku Nikah & KK Orang Tua) lengkap.",
            },
            {
              q: "Apakah pembuatan Akte Kelahiran ada batas usianya?",
              a: "Tidak ada. Kami bisa membantu mengurus Akte Kelahiran baik untuk bayi maupun dewasa (Akte terlambat).",
            },
            {
              q: "Bagaimana jika data di KK dan Ijazah berbeda?",
              a: "Kami akan bantu arahkan proses sinkronisasi data terlebih dahulu agar dokumen kependudukan Anda valid ke depannya.",
            },
          ]}
        />

        <CtaClosingService
          heading="Dokumen Kependudukan Anda Belum Beres?"
          subheading="Jangan tunda lagi. KTP, KK, dan Akte yang valid sangat penting untuk akses perbankan, kesehatan, dan sekolah. Hubungi kami sekarang!"
          waMessage={waMessage}
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />

      </main>
    </>
  );
}