/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
  publicRuntimeConfig: {APICAST_API_BASE_URL: process.env.APICAST_API_BASE_URL}
};

module.exports = nextConfig;
