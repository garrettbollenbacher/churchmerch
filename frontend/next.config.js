
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upperroom.store',
      'jesusimage.store',
      'store.elevationchurch.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
