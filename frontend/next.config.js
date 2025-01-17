
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
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
