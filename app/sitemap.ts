// app/sitemap.ts
import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/layanan",
    "/layanan/perpanjang-stnk-tahunan",
    "/layanan/perpanjang-stnk-5-tahunan",
    "/layanan/balik-nama-kendaraan",
    "/layanan/mutasi-masuk-kendaraan",
    "/layanan/ganti-nomor-plat",
    "/layanan/ubah-bentuk-warna",
    "/layanan/stnk-hilang-rusak",
    "/layanan/plat-custom",
    "/tentang",
    "/testimoni",
    "/faq",
    "/kontak",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/layanan/") ? 0.9 : 0.8,
  }));
}