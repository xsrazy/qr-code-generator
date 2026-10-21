/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'qr.xsrazy.web.id' }],
        destination: 'https://tools.xsrazy.web.id/qr/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
