/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['promot.skagtech.com', 'promot.co.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'promot.skagtech.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  env: {
    WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  },
}

module.exports = nextConfig