
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
