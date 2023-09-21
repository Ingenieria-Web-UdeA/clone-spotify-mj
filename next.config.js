/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ingenieria-web-spotify-media.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
