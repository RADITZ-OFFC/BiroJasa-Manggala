// app/layanan/ganti-nomor-plat/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroService from "@/app/components/heroService/HeroService";
import BenefitsSummary from "@/app/components/benefitsSummary/BenefitsSummary";
import PersyaratanDokumen from "@/app/components/persyaratanDokumen/PersyaratanDokumen";
import AlurProses from "@/app/components/alurProses/AlurProses";
import Estimasi from "@/app/components/estimasi/Estimasi";
import FaqMini from "@/app/components/faqMini/FaqMini";
import CtaClosingService from "@/app/components/ctaClosingService/CtaClosingService";

import { faClock } from "@fortawesome/free-solid-svg-icons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const canonical = `${siteUrl}/layanan/ganti-nomor-plat`;

const pageTitle = `Jasa Ganti Nomor Plat Kendaraan | ${siteName}`;
const pageDescription =
  "Jasa ganti nomor plat kendaraan dengan persyaratan jelas (BPKB & STNK asli, KTP asli, surat kuasa, cek fisik). BiroJasa Manggala Indonesia bantu proses transparan, rapi, dan hemat waktu tanpa bolak-balik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa ganti nomor plat",
    "ganti nomor plat kendaraan",
    "ganti plat nomor kendaraan",
    "syarat ganti nomor plat",
    "cara ganti nomor plat kendaraan",
    "cek fisik ganti plat",
    "biro jasa ganti plat",
    "urus ganti plat cepat",
    "tanpa antre ganti nomor plat",
    "ganti nomor plat Ciputat",
    "ganti nomor plat Tangerang Selatan",
    "biro jasa kendaraan Jabodetabek",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Ganti Nomor Plat Kendaraan",
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

export default function GantiNomorPlatPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal ganti nomor plat kendaraan.";
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
        name: "Jasa Ganti Nomor Plat Kendaraan — Proses Rapi & Transparan",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Ganti Nomor Plat Kendaraan",
        serviceType: "Ganti Nomor Plat Kendaraan",
        url: canonical,
        description:
          "Layanan bantuan ganti nomor plat kendaraan dengan persyaratan jelas, alur transparan, dan update status yang rapi—agar kamu tidak bolak-balik dan tidak bingung berkas.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin ganti nomor plat dengan proses yang jelas dan rapi",
        },
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: waHref,
            servicePhone: "+6285324188967",
            availableLanguage: ["id"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Layanan", item: `${siteUrl}/layanan` },
          { "@type": "ListItem", position: 3, name: "Ganti Nomor Plat", item: canonical },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-ganti-nomor-plat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Ganti Nomor Plat Kendaraan"
          subtitle="Nomor plat baru tanpa bingung berkas—kami bantu cek persyaratan, jelaskan alur, dan kawal prosesnya dengan komunikasi yang jelas."
          description="Ganti nomor plat biasanya butuh dokumen utama kendaraan dan cek fisik. Mulai dari chat WhatsApp dulu—kami cek berkas kamu dan arahkan langkah yang paling aman."
          badgeText="Layanan Kendaraan"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal ganti nomor plat kendaraan."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Ganti Nomor Plat", href: "/layanan/ganti-nomor-plat" },
          ]}
          highlights={[
            {
              title: "Persyaratan jelas dari awal",
              description:
                "Kami bantu cek BPKB/STNK, KTP, surat kuasa, dan kebutuhan cek fisik.",
            },
            {
              title: "Transparan & rapi",
              description:
                "Alur dijelaskan, status di-update, tidak bikin kamu ragu.",
            },
            {
              title: "Hemat waktu",
              description: "Mengurangi antre dan bolak-balik yang melelahkan.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat ganti nomor plat"
          subheading="Biar prosesnya rapi, jelas, dan kamu nggak capek ngulang langkah yang sama."
          items={[
            {
              title: "Tidak bingung berkas",
              description:
                "Kami cek dulu persyaratan sesuai kasus kamu—supaya proses tidak mentok di tengah jalan.",
            },
            {
              title: "Langkah mudah dipahami",
              description:
                "Kami jelaskan tahapannya dari awal, termasuk kebutuhan cek fisik bila diperlukan.",
            },
            {
              title: "Transparan soal kebutuhan proses",
              description:
                "Kalau ada hal yang memengaruhi proses, kami sampaikan di awal dengan jelas.",
            },
            {
              title: "Hemat waktu & tenaga",
              description:
                "Kamu tidak perlu antre panjang untuk hal yang sama—kami bantu arahkan alurnya.",
            },
            {
              title: "Update status responsif",
              description:
                "Tanya kapan saja via WhatsApp, kami update progres secara informatif.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan ganti nomor plat"
          subheading="Siapkan dokumen berikut agar proses lebih lancar. Jika ada kondisi khusus pada dokumen, kami cek dan arahkan via WhatsApp."
          items={[
            { label: "BPKB Asli" },
            { label: "STNK Asli" },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            { label: "Cek Fisik", note: "Biasanya dibutuhkan untuk proses ganti nomor plat." },
          ]}
        />

        <AlurProses
          heading="Alur proses ganti nomor plat"
          subheading="Tahapan dibuat ringkas dan jelas supaya kamu tidak bolak-balik."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu jelaskan kebutuhan (mobil/motor), area, dan kondisi dokumen. Kami arahkan langkah awalnya.",
            },
            {
              title: "Cek persyaratan berkas",
              description:
                "Kami cek BPKB/STNK, KTP, surat kuasa (bila diwakilkan), dan kebutuhan cek fisik.",
            },
            {
              title: "Koordinasi cek fisik",
              description:
                "Kami arahkan tahapan cek fisik sesuai kebutuhan agar proses berikutnya lancar.",
            },
            {
              title: "Proses pengurusan berjalan",
              description:
                "Kami jalankan prosesnya dan update status secara jelas selama proses berlangsung.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi proses ganti nomor plat"
          subheading="Estimasi tergantung kondisi berkas, kebutuhan cek fisik, dan antrean area. Kami berikan perkiraan setelah cek berkas supaya realistis."
          points={[
            {
              title: "Kelengkapan dokumen",
              description:
                "BPKB/STNK dan identitas yang lengkap membantu proses lebih lancar. Kami bantu cek dari awal.",
            },
            {
              title: "Kebutuhan cek fisik",
              description:
                "Cek fisik bisa memengaruhi estimasi. Kami arahkan tahapan dan kebutuhan agar tidak bolak-balik.",
            },
            {
              title: "Area & antrean layanan",
              description:
                "Estimasi bisa berbeda antar area karena alur dan volume antrean setempat tidak selalu sama.",
              icon: faClock,
            },
            {
              title: "Kondisi kasus khusus",
              description:
                "Jika ada penyesuaian pada dokumen/kendaraan, kami jelaskan dampaknya ke estimasi sejak awal.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ Ganti Nomor Plat"
          title="Pertanyaan umum sebelum ganti nomor plat"
          subtitle="Jawaban ringkas biar kamu paham alurnya dan tahu dokumen yang perlu disiapkan."
          waMessage="Assalamualaikum admin, saya mau tanya perihal ganti nomor plat kendaraan."
          faqs={[
            {
              q: "Apa saja syarat ganti nomor plat?",
              a: "Umumnya: BPKB asli, STNK asli, KTP asli, surat kuasa bila diwakilkan, dan cek fisik. Jika ada kebutuhan tambahan sesuai kasus/area, kami informasikan setelah pengecekan.",
            },
            {
              q: "Cek fisik itu wajib?",
              a: "Seringkali dibutuhkan untuk memastikan identitas kendaraan. Kami akan arahkan kebutuhan cek fisik sesuai kondisi berkas dan area pengurusan.",
            },
            {
              q: "Kalau saya sibuk, bisa diwakilkan?",
              a: "Bisa. Umumnya butuh surat kuasa dan dokumen pendukung yang sesuai. Chat dulu agar kami cek detailnya.",
            },
            {
              q: "Berapa lama estimasi prosesnya?",
              a: "Tergantung kelengkapan dokumen, kebutuhan cek fisik, dan antrean area. Kami berikan estimasi setelah cek berkas agar realistis.",
            },
            {
              q: "Bagaimana cara mulai paling cepat?",
              a: "Chat WhatsApp: “Layanan: ganti nomor plat / Mobil atau motor / Area: … / Kondisi berkas: …”. Kami langsung arahkan langkah berikutnya.",
            },
          ]}
        />

        <CtaClosingService
          heading="Mau ganti nomor plat tanpa bingung berkas?"
          subheading="Mulai dari konsultasi dulu. Kami cek kebutuhan dokumen, jelaskan alur, dan bantu prosesnya dengan komunikasi yang jelas—tanpa bikin kamu bolak-balik."
          waMessage="Assalamualaikum admin, saya mau tanya perihal ganti nomor plat kendaraan."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}