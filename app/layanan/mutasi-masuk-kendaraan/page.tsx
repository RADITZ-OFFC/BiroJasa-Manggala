// app/layanan/mutasi-masuk-kendaraan/page.tsx
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

const canonical = `${siteUrl}/layanan/mutasi-masuk-kendaraan`;

const pageTitle = `Jasa Mutasi Masuk Kendaraan | ${siteName}`;
const pageDescription =
  "Jasa mutasi masuk kendaraan (dari luar daerah) dengan persyaratan jelas dan alur transparan. Dokumen utama: BPKB & STNK asli, arsip BPKB/arsip STNK, KTP, surat kuasa, dan cek fisik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa mutasi masuk kendaraan",
    "mutasi masuk kendaraan dari luar daerah",
    "mutasi kendaraan masuk",
    "syarat mutasi masuk kendaraan",
    "cara mutasi masuk kendaraan",
    "arsip BPKB mutasi",
    "arsip STNK mutasi",
    "cek fisik mutasi masuk",
    "biro jasa mutasi masuk Ciputat",
    "biro jasa mutasi masuk Tangerang Selatan",
    "biro jasa kendaraan Jabodetabek",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Mutasi Masuk Kendaraan",
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

export default function MutasiMasukKendaraanPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal mutasi masuk kendaraan dari luar daerah.";
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
        name: "Jasa Mutasi Masuk Kendaraan — Dari Luar Daerah Jadi Lebih Rapi",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Mutasi Masuk Kendaraan",
        serviceType: "Mutasi Masuk Kendaraan (Dari Luar Daerah)",
        url: canonical,
        description:
          "Layanan bantuan mutasi masuk kendaraan dari luar daerah dengan persyaratan jelas, alur transparan, dan komunikasi responsif agar tidak bolak-balik dan tidak bingung berkas.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin mutasi masuk dari luar daerah dengan proses yang rapi",
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
          { "@type": "ListItem", position: 3, name: "Mutasi Masuk Kendaraan", item: canonical },
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
        id="jsonld-mutasi-masuk-kendaraan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Mutasi Masuk Kendaraan"
          subtitle="Mutasi masuk dari luar daerah tanpa bikin kamu pusing—kami bantu cek persyaratan, arahkan cek fisik, dan kawal prosesnya dengan komunikasi yang jelas."
          description="Mutasi masuk biasanya butuh arsip dokumen dari daerah asal (arsip BPKB/arsip STNK) selain BPKB dan STNK. Mulai dari chat WhatsApp dulu—kami cek kelengkapan kamu biar langkahnya rapi dan tidak bolak-balik."
          badgeText="Mutasi Kendaraan"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal mutasi masuk kendaraan dari luar daerah."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Mutasi Masuk Kendaraan", href: "/layanan/mutasi-masuk-kendaraan" },
          ]}
          highlights={[
            {
              title: "Cek berkas dari awal",
              description:
                "Kami bantu cek arsip BPKB/arsip STNK dan dokumen utama sebelum proses dimulai.",
            },
            {
              title: "Proses rapi & transparan",
              description:
                "Alur dijelaskan step-by-step, komunikasi jelas, dan update status yang informatif.",
            },
            {
              title: "Hemat waktu, minim bolak-balik",
              description:
                "Kamu tidak perlu tebak-tebakan dokumen dan langkah yang benar.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat mutasi masuk kendaraan"
          subheading="Mutasi dari luar daerah sering bikin orang bingung karena arsip dokumen—kita rapikan dari awal."
          items={[
            {
              title: "Tidak bingung arsip dokumen",
              description:
                "Kami bantu cek kebutuhan arsip BPKB dan arsip STNK agar proses tidak mentok di tengah jalan.",
            },
            {
              title: "Alur jelas dari awal",
              description:
                "Kami jelaskan langkah-langkahnya dengan bahasa yang mudah dipahami, termasuk kebutuhan cek fisik.",
            },
            {
              title: "Komunikasi transparan",
              description:
                "Kalau ada hal yang memengaruhi proses, kami sampaikan lebih awal supaya kamu tenang.",
            },
            {
              title: "Hemat waktu & tenaga",
              description:
                "Proses dibantu dan dikawal sehingga kamu tidak bolak-balik untuk hal yang sama.",
            },
            {
              title: "Update status responsif",
              description:
                "Kamu bisa tanya kapan saja via WhatsApp dan kami update progres secara jelas.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan mutasi masuk kendaraan"
          subheading="Siapkan dokumen berikut agar proses lebih lancar. Kalau ada dokumen yang belum lengkap, kami bantu cek opsi langkahnya."
          items={[
            { label: "BPKB Asli" },
            { label: "Arsip BPKB (dari luar daerah)" },
            { label: "STNK Asli" },
            { label: "Arsip STNK" },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            { label: "Cek Fisik", note: "Biasanya dibutuhkan untuk proses mutasi masuk." },
          ]}
        />

        <AlurProses
          heading="Alur proses mutasi masuk kendaraan"
          subheading="Langkah ringkas dan jelas agar kamu tidak bolak-balik—terutama terkait arsip dokumen dari luar daerah."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu jelaskan kebutuhan mutasi masuk, daerah asal, dan kondisi dokumen/arsip yang kamu punya.",
            },
            {
              title: "Cek persyaratan & arsip dokumen",
              description:
                "Kami cek BPKB, STNK, arsip BPKB/arsip STNK, KTP, surat kuasa (bila diwakilkan), serta kebutuhan cek fisik.",
            },
            {
              title: "Koordinasi cek fisik",
              description:
                "Kami arahkan tahapan cek fisik sesuai kebutuhan agar proses berikutnya lebih lancar.",
            },
            {
              title: "Proses mutasi masuk berjalan",
              description:
                "Kami bantu prosesnya dengan tertib dan update status yang jelas selama proses berlangsung.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi proses mutasi masuk"
          subheading="Estimasi tergantung kelengkapan arsip dokumen, kebutuhan cek fisik, serta antrean dan alur tiap area. Kami berikan perkiraan setelah cek berkas supaya realistis."
          points={[
            {
              title: "Kelengkapan arsip (dari luar daerah)",
              description:
                "Arsip BPKB dan arsip STNK adalah faktor penting. Kalau ada yang kurang, kami arahkan langkah terbaiknya.",
            },
            {
              title: "Cek fisik & penjadwalan",
              description:
                "Kebutuhan cek fisik dapat memengaruhi estimasi. Kami bantu arahkan tahapannya agar tidak bolak-balik.",
            },
            {
              title: "Perbedaan alur & antrean area",
              description:
                "Mutasi lintas daerah bisa punya alur berbeda. Estimasi dipengaruhi antrean dan ketentuan setempat.",
              icon: faClock,
            },
            {
              title: "Kondisi kasus khusus",
              description:
                "Jika ada penyesuaian pada dokumen/kendaraan, kami jelaskan dampaknya ke proses dan estimasi sejak awal.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ Mutasi Masuk"
          title="Pertanyaan umum sebelum mutasi masuk kendaraan"
          subtitle="Jawaban ringkas biar kamu paham kebutuhan arsip dokumen dan tahu langkah yang benar."
          waMessage="Assalamualaikum admin, saya mau tanya perihal mutasi masuk kendaraan dari luar daerah."
          faqs={[
            {
              q: "Apa saja syarat mutasi masuk kendaraan?",
              a: "Umumnya: BPKB asli, arsip BPKB (dari luar daerah), STNK asli, arsip STNK, KTP asli, surat kuasa bila diwakilkan, dan cek fisik. Jika ada kebutuhan tambahan sesuai kasus/area, kami informasikan setelah pengecekan.",
            },
            {
              q: "Arsip BPKB dan arsip STNK itu apa?",
              a: "Arsip adalah dokumen/berkas pendukung dari daerah asal yang biasanya diperlukan untuk proses mutasi masuk. Kami bantu cek apa yang kamu punya dan apa yang masih perlu dilengkapi.",
            },
            {
              q: "Kalau arsip saya belum lengkap, gimana?",
              a: "Chat dulu. Kami cek kondisi dokumen kamu dan arahkan opsi langkah paling aman agar proses tetap bisa berjalan sesuai ketentuan.",
            },
            {
              q: "Apakah cek fisik wajib untuk mutasi masuk?",
              a: "Pada banyak kasus mutasi masuk, cek fisik diperlukan. Kami akan arahkan kebutuhan dan tahapannya sesuai kondisi berkas dan area pengurusan.",
            },
            {
              q: "Bagaimana cara mulai yang paling cepat?",
              a: "Chat WhatsApp: “Layanan: mutasi masuk / Daerah asal: … / Area tujuan: … / Dokumen: BPKB-STNK + arsip ada/tidak …”. Kami langsung cek dan arahkan langkah berikutnya.",
            },
          ]}
        />

        <CtaClosingService
          heading="Mutasi masuk dari luar daerah? Biar kami rapikan langkahnya."
          subheading="Mulai dari konsultasi dulu. Kami cek kelengkapan arsip dokumen, arahkan cek fisik, dan bantu prosesnya dengan komunikasi yang jelas—tanpa bikin kamu bolak-balik."
          waMessage="Assalamualaikum admin, saya mau tanya perihal mutasi masuk kendaraan dari luar daerah."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}