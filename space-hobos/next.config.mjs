/** @type {import('next').NextConfig} */

// For GitHub Pages project sites the app is served from /<repo>.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH=/eos-airdrops.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export — hostable on GitHub Pages / any static host
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
