
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "jesusimage.store",
      "upperroom.store",
      "store.elevationchurch.org",
    ],
    unoptimized: true
  },
  output: 'export'
};
