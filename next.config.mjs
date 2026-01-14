/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Bazen Unsplash bu domain'i de kullanır
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;