/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iso.500px.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
    ],
  },

}

module.exports = nextConfig
