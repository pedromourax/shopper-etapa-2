/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://backend:3000/:path*", // Mapeia para o backend
      },
    ];
  },
};

export default nextConfig;
