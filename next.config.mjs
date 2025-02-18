/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/public/robots.txt',
      },
      {
        source: '/sitemap.xml',
        destination: '/public/sitemap.xml',
      },
    ]
  },
};

export default nextConfig;
