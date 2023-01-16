/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  // },
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
    ]
  }
}

module.exports = nextConfig
