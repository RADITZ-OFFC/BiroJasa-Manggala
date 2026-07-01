// app/layanan/balik-nama-kendaraan/page.tsx
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

const canonical = `${siteUrl}/layanan/balik-nama-kendaraan`;

const pageTitle = `Jasa Balik Nama Kendaraan | ${siteName}`;
const pageDescription =
  "Jasa balik nama kendaraan dengan persyaratan jelas (BPKB & STNK asli, fotocopy KTP pemilik baru, surat kuasa, cek fisik). BiroJasa Manggala Indonesia bantu proses transparan, rapi, dan hemat waktu tanpa bolak-balik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa balik nama kendaraan",
    "balik nama mobil",
    "balik nama motor",
    "syarat balik nama kendaraan",
    "cara balik nama kendaraan",
    "cek fisik kendaraan balik nama",
    "biro jasa balik nama",
    "urus balik nama cepat",
    "tanpa antre balik nama kendaraan",
    "balik nama kendaraan Ciputat",
    "balik nama kendaraan Tangerang Selatan",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Balik Nama Kendaraan",
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

export default function BalikNamaKendaraanPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal balik nama kendaraan.";
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
        name: "Jasa Balik Nama Kendaraan — Proses Rapi & Transparan",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Balik Nama Kendaraan",
        serviceType: "Balik Nama Kendaraan",
        url: canonical,
        description:
          "Layanan bantuan balik nama kendaraan dengan persyaratan jelas, alur transparan, dan update status yang rapi—agar kamu tidak bolak-balik dan tidak bingung berkas.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin balik nama kendaraan tanpa ribet",
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
          { "@type": "ListItem", position: 3, name: "Balik Nama Kendaraan", item: canonical },
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
        id="jsonld-balik-nama-kendaraan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Balik Nama Kendaraan"
          subtitle="Biar nggak bingung berkas dan nggak capek antre—kami bantu cek persyaratan, jelaskan alur, dan dampingi proses balik nama dengan komunikasi yang jelas."
          description="Balik nama biasanya melibatkan BPKB/STNK, data pemilik baru, dan cek fisik. Mulai dari chat WhatsApp dulu—kami cek berkas kamu dan jelaskan langkah paling aman."
          badgeText="Layanan Kendaraan"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal balik nama kendaraan."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Balik Nama Kendaraan", href: "/layanan/balik-nama-kendaraan" },
          ]}
          highlights={[
            {
              title: "Persyaratan jelas dari awal",
              description:
                "Kami bantu cek BPKB/STNK, KTP pemilik baru, surat kuasa, dan kebutuhan cek fisik.",
            },
            {
              title: "Transparan & rapi",
              description:
                "Alur dan komponen proses dijelaskan, status di-update, tidak bikin ragu.",
            },
            {
              title: "Berkas aman",
              description: "Dokumen penting ditangani tertib dan bertanggung jawab.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat balik nama kendaraan"
          subheading="Balik nama jadi terasa lebih ringan kalau langkahnya jelas dan berkasnya tertib."
          items={[
            {
              title: "Tidak perlu bolak-balik karena berkas kurang",
              description:
                "Kami bantu cek dulu persyaratan sesuai kasus kamu, jadi kamu tidak buang waktu di tengah proses.",
            },
            {
              title: "Alur proses mudah dipahami",
              description:
                "Kami jelaskan tahapannya dari awal—kamu tahu apa yang terjadi di setiap langkah.",
            },
            {
              title: "Transparan soal proses & kebutuhan",
              description:
                "Kalau ada hal yang memengaruhi proses, kami sampaikan di awal dengan bahasa yang jelas.",
            },
            {
              title: "Hemat waktu",
              description:
                "Proses dibantu dan dikawal, sehingga kamu tidak perlu antre panjang untuk hal yang sama.",
            },
            {
              title: "Update status yang jelas",
              description:
                "Kamu bisa tanya kapan saja via WhatsApp dan kami update progres secara informatif.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan balik nama kendaraan"
          subheading="Siapkan dokumen berikut. Kalau ada kondisi khusus pada dokumen, kami cek dan arahkan via WhatsApp."
          items={[
            { label: "BPKB Asli" },
            { label: "STNK Asli" },
            { label: "Fotocopy KTP Pemilik Baru" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            { label: "Cek Fisik", note: "Biasanya dibutuhkan dalam proses balik nama." },
          ]}
        />

        <AlurProses
          heading="Alur proses balik nama kendaraan"
          subheading="Langkah ringkas dan terstruktur agar kamu tidak bingung dan tidak bolak-balik."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu jelaskan kebutuhan (mobil/motor), area, dan kondisi dokumen. Kami tanya detail yang diperlukan.",
            },
            {
              title: "Cek persyaratan berkas",
              description:
                "Kami cek BPKB/STNK, KTP pemilik baru, surat kuasa (bila diwakilkan), serta kebutuhan cek fisik.",
            },
            {
              title: "Koordinasi cek fisik",
              description:
                "Kami arahkan tahapan cek fisik sesuai kebutuhan agar proses berikutnya lancar.",
            },
            {
              title: "Proses balik nama berjalan",
              description:
                "Kami jalankan prosesnya dengan tertib dan update status secara jelas.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan dan kami arahkan langkah lanjut bila dibutuhkan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi proses balik nama"
          subheading="Estimasi tergantung kondisi berkas, kebutuhan cek fisik, dan antrean di area terkait. Kami berikan perkiraan setelah cek berkas supaya realistis."
          points={[
            {
              title: "Kelengkapan dokumen",
              description:
                "BPKB/STNK dan data pemilik baru yang lengkap akan mempercepat alur. Kami bantu cek dari awal.",
            },
            {
              title: "Cek fisik & penjadwalan",
              description:
                "Kebutuhan cek fisik bisa memengaruhi estimasi. Kami arahkan langkahnya agar tidak bolak-balik.",
            },
            {
              title: "Area & antrean layanan",
              description:
                "Estimasi berbeda tiap area karena alur dan volume antrean setempat tidak selalu sama.",
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
          kickerText="FAQ Balik Nama"
          title="Pertanyaan umum sebelum balik nama kendaraan"
          subtitle="Jawaban ringkas biar kamu yakin dan paham langkahnya—tanpa bingung berkas."
          waMessage="Assalamualaikum admin, saya mau tanya perihal balik nama kendaraan."
          faqs={[
            {
              q: "Apa saja syarat balik nama kendaraan?",
              a: "Umumnya: BPKB asli, STNK asli, fotocopy KTP pemilik baru, surat kuasa bila diwakilkan, dan cek fisik. Jika ada kebutuhan tambahan sesuai kasus/area, kami informasikan setelah pengecekan.",
            },
            {
              q: "Cek fisik itu wajib untuk balik nama?",
              a: "Biasanya diperlukan. Kami akan arahkan tahapan dan kebutuhan cek fisik sesuai kondisi dokumen dan area pengurusan.",
            },
            {
              q: "Kalau saya sibuk, bisa diwakilkan?",
              a: "Bisa. Umumnya perlu surat kuasa dan dokumen pendukung yang sesuai. Chat dulu agar kami cek detailnya.",
            },
            {
              q: "Berapa lama estimasi proses balik nama?",
              a: "Tergantung kelengkapan dokumen, kebutuhan cek fisik, dan antrean area. Kami berikan estimasi setelah cek berkas agar realistis.",
            },
            {
              q: "Bagaimana cara mulai yang paling cepat?",
              a: "Chat WhatsApp: “Layanan: balik nama / Mobil atau motor / Area: … / Kondisi berkas: …”. Kami langsung arahkan langkah berikutnya.",
            },
          ]}
        />

        <CtaClosingService
          heading="Siap balik nama tanpa bingung berkas?"
          subheading="Mulai dari konsultasi dulu. Kami cek kebutuhan dokumen, jelaskan alur, dan bantu prosesnya dengan komunikasi yang jelas—tanpa bikin kamu bolak-balik."
          waMessage="Assalamualaikum admin, saya mau tanya perihal balik nama kendaraan."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}