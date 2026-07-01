// app/layanan/nib/page.tsx
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

const canonical = `${siteUrl}/layanan/nib`;

const pageTitle = `Jasa Pembuatan NIB (Nomor Induk Berusaha) | ${siteName}`;
const pageDescription =
  "Jasa pendaftaran NIB (Nomor Induk Berusaha) untuk legalitas usaha Anda. Proses cepat melalui sistem OSS RBA, persyaratan mudah, dan konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa pembuatan NIB",
    "daftar NIB online",
    "syarat buat NIB",
    "cara daftar NIB OSS",
    "biro jasa legalitas usaha",
    "biro jasa NIB Tasikmalaya",
    "buat NIB UMKM",
    "identitas izin usaha",
    "jasa OSS RBA",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Pembuatan NIB",
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

export default function NibPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal pendaftaran NIB untuk usaha saya.";
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
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat", "Indonesia"],
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Jasa Pembuatan NIB (Nomor Induk Berusaha) — Legalitas Cepat",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Pembuatan NIB",
        serviceType: "Legalitas Usaha",
        url: canonical,
        description:
          "Layanan pendaftaran NIB resmi melalui OSS RBA untuk UMKM maupun Badan Usaha dengan proses yang transparan dan terima beres.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-nib"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Pembuatan NIB"
          subtitle="Legalkan usaha Anda dengan Nomor Induk Berusaha (NIB) tanpa pusing urus sistem OSS yang rumit."
          description="NIB adalah identitas wajib bagi setiap pelaku usaha di Indonesia. Kami bantu pendaftarannya secara resmi, cepat, dan aman hingga dokumen terbit."
          badgeText="Legalitas Usaha"
          primaryCtaLabel="Daftar Sekarang"
          primaryCtaMessage={waMessage}
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "NIB", href: "/layanan/nib" },
          ]}
          highlights={[
            {
              title: "Proses Online",
              description: "Cukup kirim data via WhatsApp, tidak perlu datang ke kantor.",
            },
            {
              title: "Legalitas Resmi",
              description: "Dokumen terdaftar langsung di sistem OSS RBA pemerintah.",
            },
            {
              title: "UMKM & Perusahaan",
              description: "Melayani usaha perorangan maupun badan usaha.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Manfaat Memiliki NIB"
          subheading="Mengapa usaha Anda wajib memiliki Nomor Induk Berusaha?"
          items={[
            {
              title: "Legalitas Usaha Resmi",
              description: "Usaha Anda diakui oleh negara dan memudahkan perizinan lanjutan.",
            },
            {
              title: "Syarat Pinjaman Modal",
              description: "Menjadi dokumen utama saat ingin mengajukan pinjaman ke Bank atau lembaga keuangan.",
            },
            {
              title: "Akses Program Pemerintah",
              description: "Syarat utama untuk mendapatkan bantuan UMKM atau mengikuti pelatihan pemerintah.",
            },
            {
              title: "Keamanan Berusaha",
              description: "Memberikan rasa aman dan profesionalisme saat bertransaksi dengan pelanggan.",
            },
            {
              title: "Proses Cepat & Praktis",
              description: "Dengan bantuan kami, Anda tidak perlu belajar sistem OSS yang teknis dan membingungkan.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan Pendaftaran NIB"
          subheading="Siapkan dokumen berikut untuk mulai mendaftarkan usaha Anda secara resmi."
          items={[
            { label: "Foto KTP Pemilik Usaha" },
            { label: "Nomor WhatsApp & Email Aktif" },
            { label: "Nama Usaha", note: "Contoh: Toko Berkah atau CV Maju Jaya." },
            { label: "Alamat Lengkap Usaha" },
            { label: "Deskripsi Bidang Usaha", note: "Misal: Kuliner, Jasa Angkut, atau Toko Kelontong." },
            { label: "Modal Usaha", note: "Estimasi modal yang digunakan untuk menjalankan usaha." },
          ]}
        />

        <AlurProses
          heading="Alur Pendaftaran NIB"
          subheading="Langkah mudah mendapatkan NIB tanpa ribet."
          steps={[
            {
              title: "Konsultasi Data Usaha",
              description: "Kirimkan data usaha dan foto KTP Anda melalui WhatsApp admin kami.",
            },
            {
              title: "Verifikasi & Input Data",
              description: "Tim kami mengecek kelayakan data dan melakukan input ke sistem OSS RBA.",
            },
            {
              title: "Pendaftaran Akun OSS",
              description: "Kami bantu buatkan akun resmi di portal perizinan berusaha.",
            },
            {
              title: "Penerbitan Dokumen",
              description: "Setelah data tervalidasi, sistem akan menerbitkan NIB resmi Anda.",
            },
            {
              title: "Penyerahan File",
              description: "Dokumen NIB (PDF) kami kirimkan dan siap Anda cetak untuk keperluan usaha.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi Waktu & Proses"
          subheading="Kami mengupayakan pendaftaran selesai dalam waktu yang sangat singkat."
          points={[
            {
              title: "Kelengkapan Data",
              description: "Jika data KTP dan detail usaha sudah lengkap, proses input bisa langsung dilakukan.",
            },
            {
              title: "Kondisi Sistem OSS",
              description: "Lama proses tergantung pada stabilitas server pusat OSS RBA.",
            },
            {
              title: "Kecepatan Penerbitan",
              description: "Untuk kategori usaha risiko rendah, NIB biasanya langsung terbit setelah data di-submit.",
              icon: faClock,
            },
            {
              title: "Layanan 'Terima Beres'",
              description: "Kami pantau hingga dokumen benar-benar keluar dan siap digunakan.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ NIB"
          title="Hal yang sering ditanyakan tentang NIB"
          subtitle="Pahami lebih dalam sebelum mendaftarkan usaha Anda."
          waMessage={waMessage}
          faqs={[
            {
              q: "Apakah NIB berlaku selamanya?",
              a: "Ya, NIB berlaku selama pelaku usaha menjalankan usahanya, kecuali jika ada perubahan data fundamental atau penghentian usaha.",
            },
            {
              q: "Berapa biaya pembuatan NIB?",
              a: "Biaya kami sangat terjangkau untuk jasa profesional penginputan. Hubungi admin untuk penawaran harga terbaik.",
            },
            {
              q: "Apakah usaha kecil (UMKM) wajib punya NIB?",
              a: "Sangat wajib. NIB sekarang menjadi pengganti TDP dan SIUP untuk usaha skala kecil dan menengah.",
            },
            {
              q: "Bisa buat NIB untuk PT atau CV?",
              a: "Bisa. Kami melayani pendaftaran NIB baik untuk perorangan (UMK) maupun badan usaha non-perorangan.",
            },
          ]}
        />

        <CtaClosingService
          heading="Segera Legalkan Usaha Anda!"
          subheading="Jangan tunggu sampai ada kendala perizinan. Dapatkan NIB Anda sekarang melalui proses yang mudah dan terpercaya."
          waMessage={waMessage}
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />

      </main>
    </>
  );
}