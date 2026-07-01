// app/layanan/perpanjang-stnk-5-tahunan/page.tsx
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

const canonical = `${siteUrl}/layanan/perpanjang-stnk-5-tahunan`;

const pageTitle = `Jasa Perpanjang STNK 5 Tahunan | ${siteName}`;
const pageDescription =
  "Jasa perpanjang STNK 5 tahunan (ganti plat) dengan persyaratan jelas dan alur transparan, termasuk cek fisik (no rangka/no kendaraan). BiroJasa Manggala Indonesia bantu kamu tanpa antre & bolak-balik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa perpanjang STNK 5 tahunan",
    "perpanjang STNK 5 tahunan",
    "perpanjang STNK ganti plat",
    "ganti plat 5 tahunan",
    "syarat perpanjang STNK 5 tahunan",
    "cek fisik no rangka no kendaraan",
    "biro jasa STNK",
    "urus STNK cepat",
    "tanpa antre perpanjang STNK",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "jasa STNK Jabodetabek",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Perpanjang STNK 5 Tahunan",
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

export default function PerpanjangStnk5TahunanPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal perpanjang STNK 5 tahunan (ganti plat).";
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
        name: "Jasa Perpanjang STNK 5 Tahunan — Ganti Plat Tanpa Ribet",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Perpanjang STNK 5 Tahunan",
        serviceType: "Perpanjang STNK 5 Tahunan (Ganti Plat)",
        url: canonical,
        description:
          "Layanan bantuan perpanjang STNK 5 tahunan (ganti plat) termasuk cek fisik no rangka/no kendaraan, dengan persyaratan jelas, alur transparan, dan update status yang rapi.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin perpanjang STNK 5 tahunan (ganti plat) tanpa ribet",
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
            name: "Perpanjang STNK 5 Tahunan",
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
        id="jsonld-perpanjang-stnk-5-tahunan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Perpanjang STNK 5 Tahunan"
          subtitle="Ganti plat tanpa ribet—kami bantu cek persyaratan, arahkan cek fisik, dan dampingi prosesnya dengan komunikasi yang jelas."
          description="Untuk STNK 5 tahunan, biasanya ada tahapan cek fisik (no rangka/no kendaraan). Mulai dari chat WhatsApp dulu—kami cek berkas kamu dan jelaskan langkahnya biar tidak bolak-balik."
          badgeText="Layanan STNK"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang STNK 5 tahunan (ganti plat)."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            {
              label: "Perpanjang STNK 5 Tahunan",
              href: "/layanan/perpanjang-stnk-5-tahunan",
            },
          ]}
          highlights={[
            {
              title: "Arahan cek fisik jelas",
              description:
                "Kami bantu jelaskan kebutuhan cek fisik (no rangka/no kendaraan) dari awal.",
            },
            {
              title: "Transparan & rapi",
              description:
                "Alur proses dijelaskan, status di-update, tidak bikin bingung.",
            },
            {
              title: "Berkas aman",
              description: "Penanganan dokumen tertib dan komunikasi responsif.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat perpanjang STNK 5 tahunan"
          subheading="Biar proses ganti plat terasa lebih ringan—ini yang kamu dapat saat dibantu BiroJasa Manggala Indonesia."
          items={[
            {
              title: "Tidak perlu tebak-tebakan langkah",
              description:
                "Kami jelaskan tahapan dari awal termasuk cek fisik, supaya kamu paham alurnya dan tidak salah langkah.",
            },
            {
              title: "Persyaratan berkas jelas",
              description:
                "Untuk STNK 5 tahunan, umumnya perlu STNK asli, KTP asli, surat kuasa (jika diwakilkan), dan cek fisik (no rangka/no kendaraan).",
            },
            {
              title: "Lebih praktis, minim bolak-balik",
              description:
                "Kami bantu koordinasi proses dan kebutuhan administrasi, jadi kamu bisa hemat waktu.",
            },
            {
              title: "Komunikasi transparan",
              description:
                "Kami jelaskan alur dan kebutuhan sesuai kasus kamu, termasuk hal yang bisa memengaruhi proses.",
            },
            {
              title: "Update status yang jelas",
              description:
                "Kamu tetap dapat info progress agar tenang dan tidak menebak-nebak.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan perpanjang STNK 5 tahunan"
          subheading="Siapkan dokumen berikut supaya proses lebih lancar. Jika ada kondisi khusus, kami cek dan arahkan via WhatsApp."
          items={[
            { label: "STNK Asli" },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            {
              label: "Cek Fisik (No Rangka, No Kendaraan)",
              note: "Biasanya dibutuhkan untuk STNK 5 tahunan / ganti plat.",
            },
          ]}
        />

        <AlurProses
          heading="Alur proses perpanjang STNK 5 tahunan"
          subheading="Langkah dibuat jelas dari awal—termasuk tahapan cek fisik."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu ceritakan kebutuhan, area pengurusan, dan kondisi berkas. Kami arahkan langkah yang paling aman.",
            },
            {
              title: "Cek persyaratan & kesiapan berkas",
              description:
                "Kami cek dokumen (STNK asli, KTP asli, surat kuasa bila diwakilkan) dan pastikan sesuai untuk proses 5 tahunan.",
            },
            {
              title: "Arahan cek fisik (no rangka/no kendaraan)",
              description:
                "Kami jelaskan kapan dan bagaimana kebutuhan cek fisik dilakukan agar kamu tidak bolak-balik.",
            },
            {
              title: "Proses pengurusan berjalan",
              description:
                "Kami jalankan prosesnya dan update status dengan jelas. Kamu bisa tanya kapan saja via WhatsApp.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan. Kami juga arahkan langkah lanjut bila diperlukan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi perpanjang STNK 5 tahunan"
          subheading="Estimasi bisa lebih variatif karena ada tahapan cek fisik dan perbedaan antrean tiap area. Kami berikan perkiraan setelah cek berkas."
          points={[
            {
              title: "Kelengkapan berkas",
              description:
                "Berkas lengkap dan sesuai akan mempercepat alur. Kami bantu cek dari awal agar tidak ada yang terlewat.",
            },
            {
              title: "Kebutuhan cek fisik",
              description:
                "Cek fisik (no rangka/no kendaraan) adalah faktor penting yang memengaruhi estimasi di layanan 5 tahunan.",
            },
            {
              title: "Area & antrean layanan",
              description:
                "Estimasi bisa berbeda antar area karena alur dan volume antrean setempat tidak selalu sama.",
              icon: faClock,
            },
            {
              title: "Kondisi kasus & penyesuaian",
              description:
                "Jika ada kondisi khusus pada dokumen/kendaraan, kami jelaskan dampaknya ke proses dan estimasi sejak awal.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ STNK 5 Tahunan"
          title="Pertanyaan umum sebelum ganti plat (STNK 5 tahunan)"
          subtitle="Jawaban ringkas biar kamu paham alurnya—terutama soal cek fisik dan persyaratan."
          waMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang STNK 5 tahunan (ganti plat)."
          faqs={[
            {
              q: "Apa saja syarat perpanjang STNK 5 tahunan?",
              a: "Umumnya: STNK asli, KTP asli, surat kuasa jika diwakilkan, serta cek fisik (no rangka/no kendaraan). Jika ada kebutuhan tambahan sesuai kasus/area, kami informasikan setelah pengecekan.",
            },
            {
              q: "Cek fisik itu apa dan kapan dilakukan?",
              a: "Cek fisik adalah pengecekan identitas kendaraan (no rangka/no mesin) untuk kebutuhan administrasi 5 tahunan/ganti plat. Kami akan arahkan detailnya sesuai kondisi dan area pengurusan.",
            },
            {
              q: "Kalau saya sibuk, bisa diwakilkan?",
              a: "Bisa. Umumnya perlu surat kuasa dan dokumen identitas yang sesuai. Chat dulu agar kami cek kebutuhan persisnya untuk kasus kamu.",
            },
            {
              q: "Berapa lama estimasi prosesnya?",
              a: "Tergantung kelengkapan berkas, kebutuhan cek fisik, dan antrean di area terkait. Kami berikan estimasi setelah cek berkas agar realistis.",
            },
            {
              q: "Bagaimana cara mulai yang paling cepat?",
              a: "Chat WhatsApp dengan format: “Layanan: STNK 5 tahunan / Area: … / Kondisi berkas: lengkap/belum …”. Kami langsung arahkan langkah berikutnya.",
            },
          ]}
        />

        <CtaClosingService
          heading="Mau ganti plat 5 tahunan tanpa bingung cek fisik?"
          subheading="Mulai dari konsultasi dulu. Kami cek kebutuhan berkas, jelaskan alur cek fisik (no rangka/no kendaraan), dan bantu prosesnya dengan komunikasi yang jelas."
          waMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang STNK 5 tahunan (ganti plat)."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}