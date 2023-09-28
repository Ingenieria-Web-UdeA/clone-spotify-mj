/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['ingenieria-web-spotify-media.s3.amazonaws.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
