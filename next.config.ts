import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Increase this to 10MB
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rmuakgaxzsbhnaanwkyi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
