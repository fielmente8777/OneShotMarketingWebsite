import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  poweredByHeader: false,
  compress: true,
  images: {
    // unoptimized: true,
    // WebP only: AVIF encoding is slow enough to time out on the large banners
    formats: ["image/webp"],
    qualities: [60, 75, 100],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["react-icons", "swiper"],
  },
  async headers() {
    return [
      {
        // Static files in /public (logos, backgrounds, favicon)
        source: "/:all*(svg|png|jpg|jpeg|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            // 30 days: long enough for good caching, short enough that a
            // replaced logo/background shows up without renaming the file
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  // trailingSlash: true,
};

export default nextConfig;
