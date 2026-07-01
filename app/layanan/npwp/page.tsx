// app/layanan/npwp/page.tsx
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

const canonical = `${siteUrl}/layanan/npwp`;

const pageTitle = `Jasa Pembuatan NPWP Online | ${siteName}`;
const pageDescription =
  "Jasa pendaftaran NPWP Pribadi atau Badan Usaha secara online dengan persyaratan mudah (Foto KTP, Email, No. HP). BiroJasa Manggala Indonesia bantu kamu dapatkan NPWP tanpa ribet. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa pembuatan NPWP",
    "daftar NPWP online",
    "syarat buat NPWP",
    "cara daftar NPWP",
    "biro jasa NPWP",
    "biro jasa pendaftaran NPWP",
    "NPWP pribadi online",
    "urus NPWP cepat",
    "biro jasa NPWP TasikMalaya",
    "biro jasa NPWP Singaparna",
    "jasa NPWP JawaBarat",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Pembuatan NPWP",
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

export default function NpwpPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal pembuatan NPWP.";
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
        name: "Jasa Pembuatan NPWP Online — Cepat & Terima Beres",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Pembuatan NPWP",
        serviceType: "Pendaftaran NPWP",
        url: canonical,
        description:
          "Layanan bantuan pendaftaran NPWP secara online dengan proses yang dibantu hingga tuntas, cukup kirim data via WhatsApp.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType: "Individu atau pelaku usaha yang membutuhkan NPWP",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-npwp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Pembuatan NPWP Online"
          subtitle="Terima beres tanpa perlu input data sendiri—cukup kirim berkas via WhatsApp, kami selesaikan pendaftarannya dengan cepat."
          description="NPWP sangat penting untuk syarat kerja, pembukaan rekening bank, atau pengajuan kredit. Kami bantu proses pendaftaran online-nya secara resmi hingga kartu elektronik terbit."
          badgeText="Layanan NPWP"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage={waMessage}
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Pendaftaran NPWP", href: "/layanan/npwp" },
          ]}
          highlights={[
            {
              title: "Proses Online",
              description: "Tidak perlu datang ke kantor pajak, semua bisa lewat WhatsApp.",
            },
            {
              title: "Cepat & Valid",
              description: "Pendaftaran dilakukan sesuai data resmi e-KTP kamu.",
            },
            {
              title: "Data Aman",
              description: "Kerahasiaan dokumen pribadi dijamin selama proses input.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Kenapa buat NPWP lewat kami?"
          subheading="Bagi kamu yang sibuk atau bingung mengisi formulir online pajak yang panjang, kami hadir sebagai solusi praktis."
          items={[
            {
              title: "Tanpa Input Mandiri",
              description:
                "Kamu tidak perlu pusing mengisi formulir pendaftaran yang membingungkan. Kami yang kerjakan semuanya.",
            },
            {
              title: "Persyaratan Sangat Mudah",
              description:
                "Cukup siapkan Foto KTP, Alamat Email Aktif, dan No. HP yang terhubung ke WhatsApp.",
            },
            {
              title: "Dampingi Sampai Aktif",
              description:
                "Kami bantu pantau sampai NPWP Elektronik kamu terbit dan dikirim oleh kantor pajak.",
            },
            {
              title: "Konsultasi Gratis",
              description:
                "Bingung soal kategori pajak? Tanya dulu saja, admin kami siap membantu menjelaskan.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan Pendaftaran NPWP"
          subheading="Siapkan dokumen berikut dalam bentuk foto yang jelas untuk kami proses pendaftarannya."
          items={[
            { label: "Foto KTP yang Jelas (Asli)" },
            { label: "Alamat Email Aktif" },
            { label: "Nomor WhatsApp Aktif" },
            { label: "Keterangan Pekerjaan / Usaha" },
          ]}
        />

        <AlurProses
          heading="Alur Proses Pendaftaran NPWP"
          subheading="Langkahnya sangat simpel, semua bisa dilakukan sambil duduk santai di rumah."
          steps={[
            {
              title: "Kirim Data via WhatsApp",
              description:
                "Kirimkan foto KTP dan info pendukung. Admin kami akan melakukan verifikasi awal.",
            },
            {
              title: "Proses Input Data",
              description:
                "Tim kami melakukan pendaftaran secara online melalui sistem resmi Direktorat Jenderal Pajak.",
            },
            {
              title: "Verifikasi Kode OTP",
              description:
                "Kamu akan menerima kode verifikasi di email/HP, cukup teruskan kepada kami untuk finalisasi.",
            },
            {
              title: "Penerbitan NPWP",
              description:
                "Setelah disetujui, NPWP Elektronik akan dikirim langsung ke email kamu dan siap digunakan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi Waktu Pendaftaran"
          subheading="Proses pendaftaran NPWP online cenderung cepat namun bergantung pada stabilitas sistem kantor pajak."
          points={[
            {
              title: "Kesiapan Berkas",
              description:
                "Jika KTP dan data sudah lengkap, pengisian data hanya butuh waktu singkat.",
            },
            {
              title: "Stabilitas Sistem DJP",
              description:
                "Kadang server kantor pajak sedang maintenance, kami akan update jika terjadi kendala teknis.",
            },
            {
              title: "Verifikasi Cepat",
              description:
                "Semakin cepat kamu merespon kode verifikasi, semakin cepat pula NPWP kamu terbit.",
              icon: faClock,
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ NPWP"
          title="Hal yang sering ditanyakan soal NPWP"
          subtitle="Jawaban singkat untuk membantu kamu memahami proses pembuatan NPWP."
          waMessage={waMessage}
          faqs={[
            {
              q: "Apakah kartu fisik NPWP dikirim ke rumah?",
              a: "Saat ini kantor pajak lebih mengutamakan NPWP Elektronik (PDF) yang dikirim ke email. Namun kartu fisik biasanya dikirim otomatis oleh kantor pajak melalui pos ke alamat KTP.",
            },
            {
              q: "Apakah pendaftarannya resmi?",
              a: "Ya, kami melakukan pendaftaran melalui website resmi ereg.pajak.go.id sesuai dengan identitas kamu.",
            },
            {
              q: "Apa syarat utama buat NPWP?",
              a: "Cukup Foto KTP asli yang jelas, Email aktif, dan Nomor HP aktif untuk menerima kode verifikasi.",
            },
            {
              q: "Bagaimana jika saya belum bekerja?",
              a: "Tetap bisa membuat NPWP dengan kategori 'Wajib Pajak Orang Pribadi' untuk keperluan administratif bank atau lamaran kerja.",
            },
          ]}
        />

        <CtaClosingService
          heading="Butuh NPWP sekarang juga?"
          subheading="Klik tombol di bawah untuk kirim data via WhatsApp. Kami bantu proses pendaftarannya sampai selesai, cepat, dan aman."
          waMessage={waMessage}
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />

      </main>
    </>
  );
}