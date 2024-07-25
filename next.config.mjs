/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // ถ้า Production ให้เป็น True
  images: {
    //domains: ['localhost'],
    
    minimumCacheTTL: 10,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "mis.nurse.cmu.ac.th",
      },
    ],
  },
};

export default nextConfig;