
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "jesusimage.store",
      "upperroom.store",
      "store.elevationchurch.org",
    ],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.jesusimage.store'
      },
      {
        protocol: 'https',
        hostname: '**.upperroom.store'
      },
      {
        protocol: 'https',
        hostname: '**.elevationchurch.org'
      }
    ]
  },
  output: 'export',
  distDir: 'dist'
};
