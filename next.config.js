/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;

const withPWA = require('next-pwa');

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
};

module.exports =
  process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
