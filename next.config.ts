import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/layanan",
        permanent: true, // = 301
      },
      {
        source: "/about",
        destination: "/tentang",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/kontak",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
