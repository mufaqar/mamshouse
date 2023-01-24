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
  },

  serverless: {
    functions: {
      stripeWebhook: './pages/api/webhook.js'
    }
  },

  api: {
    bodyParser: false,
  },

}

module.exports = nextConfig
