/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/portfolio", destination: "/portfolio.html" },
    ];
  },
};
module.exports = nextConfig;
