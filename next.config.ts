/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/phongkhamdakhoa',
  assetPrefix: '/phongkhamdakhoa/',   // 
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig