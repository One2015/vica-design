/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [85, 95, 100],
    deviceSizes: [640, 1080, 1920, 2560, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
