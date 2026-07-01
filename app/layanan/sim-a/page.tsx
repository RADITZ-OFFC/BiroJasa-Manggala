// app/layanan/sim-a/page.tsx
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

const canonical = `${siteUrl}/layanan/sim-a`;

const pageTitle = `Jasa Perpanjang SIM A | ${siteName}`;
const pageDescription =
  "Jasa perpanjang SIM A dengan persyaratan jelas (SIM asli, KTP asli, surat kuasa) dan alur proses transparan. BiroJasa Manggala Indonesia bantu kamu tanpa antre & bolak-balik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa perpanjang SIM A",
    "perpanjang SIM A",
    "syarat perpanjang SIM A",
    "cara perpanjang SIM A",
    "biro jasa SIM A",
    "biro jasa perpanjang SIM A",
    "tanpa antre perpanjang SIM A",
    "urus SIM cepat",
    "biro jasa SIM TasikMalaya",
    "biro jasa SIM Singaparna",
    "jasa SIM JawaBarat",
    "konsultasi gratis WhatsApp",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Perpanjang SIM A",
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

export default function PerpanjangsimaPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal perpanjang SIM A.";
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
        name: "Jasa Perpanjang SIM A — Cepat & Tanpa Ribet",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Perpanjang SIM A",
        serviceType: "Perpanjang SIM A",
        url: canonical,
        description:
          "Layanan bantuan perpanjang SIM A dengan persyaratan jelas, komunikasi status yang responsif, dan proses yang rapi agar tidak perlu antre dan bolak-balik.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin perpanjang SIM A tanpa ribet",
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan",
            item: `${siteUrl}/layanan`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Perpanjang SIM A",
            item: canonical,
          },
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
        id="jsonld-sim-a"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Perpanjang SIM A"
          subtitle="Tanpa antre & bolak-balik—kami bantu cek persyaratan berkas, jelaskan alur, dan dampingi prosesnya dengan komunikasi yang rapi."
          description="Cocok untuk kamu yang ingin proses yang jelas dan aman. Mulai dari chat WhatsApp dulu—kami arahkan berkas yang dibutuhkan sesuai kondisi dokumen dan area."
          badgeText="Layanan SIM A"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang SIM A."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            {
              label: "Perpanjang SIM A",
              href: "/layanan/sim-a",
            },
          ]}
          highlights={[
            {
              title: "Persyaratan jelas",
              description:
                "SIM ASLI, KTP asli, dan surat kuasa—kami bantu cek dari awal.",
            },
            {
              title: "Transparan & rapi",
              description: "Alur proses dijelaskan, status di-update, tidak bikin bingung.",
            },
            {
              title: "Berkas aman",
              description: "Penanganan dokumen tertib dan komunikasi responsif.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat perpanjang SIM A"
          subheading="Biar kamu nggak bingung dan nggak capek bolak-balik—ini yang kamu dapat saat proses bareng BiroJasa Manggala Indonesia."
          items={[
            {
              title: "Tidak perlu antre & bolak-balik",
              description:
                "Kamu tinggal konsultasi, kami arahkan persyaratan dari awal dan bantu jalankan prosesnya dengan rapi.",
            },
            {
              title: "Persyaratan berkas jelas",
              description:
                "Untuk SIM A, umumnya: SIM ASLI, KTP asli, dan surat kuasa (jika diwakilkan).",
            },
            {
              title: "Biaya & langkah transparan",
              description:
                "Kami jelaskan alur dan komponen prosesnya sejak awal supaya tidak ada kejutan yang bikin ragu.",
            },
            {
              title: "Berkas ditangani dengan aman",
              description:
                "Dokumen penting ditangani tertib. Komunikasi status juga jelas supaya kamu tenang.",
            },
            {
              title: "Update progress responsif",
              description:
                "Kamu bisa tanya kapan saja via WhatsApp, dan kami bantu pantau progres secara informatif.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan perpanjang SIM A"
          subheading="Sesuai layanan utama BiroJasa Manggala Indonesia, siapkan dokumen berikut sebelum proses dimulai."
          items={[
            { label: "SIM ASLI" },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
          ]}
        />

        <AlurProses
          heading="Alur proses perpanjang SIM A"
          subheading="Langkahnya singkat dan jelas. Kamu tahu apa yang terjadi di setiap tahap."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu ceritakan kebutuhan dan area pengurusan. Kami tanya hal penting agar arahannya tepat.",
            },
            {
              title: "Cek persyaratan berkas",
              description:
                "Kami cek dokumen yang kamu punya dan pastikan sesuai (SIM asli, KTP asli, surat kuasa bila diwakilkan).",
            },
            {
              title: "Serah-terima berkas",
              description:
                "Berkas diserahkan sesuai kesepakatan, lalu kami mulai proses dengan penanganan yang tertib.",
            },
            {
              title: "Proses pengurusan berjalan",
              description:
                "Kami jalankan prosesnya dan kamu bisa tanya kapan saja. Status akan kami update dengan jelas.",
            },
            {
              title: "Selesai & berkas kembali",
              description:
                "Setelah selesai, berkas kamu kami kembalikan. Kamu dapat arahan langkah lanjut bila dibutuhkan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi perpanjang SIM A"
          subheading="Estimasi bersifat fleksibel. Kami akan kasih perkiraan setelah cek berkas dan area pengurusan—supaya jelas dan realistis."
          points={[
            {
              title: "Kondisi & kelengkapan berkas",
              description:
                "Berkas yang lengkap dan sesuai (SIM ASLI, KTP asli, surat kuasa bila diwakilkan) bikin proses lebih lancar.",
            },
            {
              title: "Area pengurusan",
              description:
                "Estimasi bisa berbeda antar area karena alur dan antrean layanan setempat tidak selalu sama.",
            },
            {
              title: "Waktu pengajuan & antrean",
              description:
                "Perkiraan dipengaruhi jam operasional, volume antrean, dan momentum tertentu (mis. ramai di periode tertentu).",
              icon: faClock,
            },
            {
              title: "Komunikasi dan follow-up",
              description:
                "Kami update status secara jelas. Jika ada yang perlu dilengkapi, kami kabari lebih awal agar tidak buang waktu.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ SIM A"
          title="Pertanyaan umum sebelum perpanjang SIM A"
          subtitle="Jawaban ringkas biar kamu paham alurnya dari awal—tanpa bingung, tanpa bolak-balik."
          waMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang SIM A."
          faqs={[
            {
              q: "Apa saja syarat perpanjang SIM A?",
              a: "Umumnya: SIM ASLI, KTP asli, dan surat kuasa jika pengurusan diwakilkan. Jika ada kondisi khusus pada dokumen, kami informasikan setelah pengecekan.",
            },
            {
              q: "Apakah perpanjang SIM A perlu cek fisik?",
              a: "Biasanya tidak. Namun bisa ada kebutuhan tertentu tergantung kasus/area. Chat dulu agar kami cekkan kondisi berkas dan kebutuhannya.",
            },
            {
              q: "Kalau saya sibuk, bisa diwakilkan?",
              a: "Bisa. Kamu siapkan surat kuasa dan dokumen pendukung yang diperlukan. Kami bantu arahkan langkahnya lewat WhatsApp.",
            },
            {
              q: "Estimasi prosesnya berapa lama?",
              a: "Tergantung kelengkapan berkas dan area pengurusan. Kami berikan estimasi setelah cek berkas supaya kamu dapat gambaran yang realistis.",
            },
            {
              q: "Kalau berkas saya kurang lengkap gimana?",
              a: "Kami cek dulu. Kalau ada yang kurang, kami jelaskan apa yang perlu dilengkapi dan opsi terbaiknya supaya proses tidak mentok.",
            },
          ]}
        />


        <CtaClosingService
          heading="Siap beresin SIM A tanpa ribet?"
          subheading="Mulai dari konsultasi dulu. Kami cek kebutuhan berkas, jelaskan alur, dan bantu prosesnya dengan komunikasi yang jelas—tanpa bikin kamu bolak-balik."
          waMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang SIM A."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />

      </main>
    </>
  );
}