/** @type {import('next').NextConfig} */
// Deploy: 2026-10-13 -- bathroom, kitchen, garage conversion calculators
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dwellinger.co.uk',
          },
        ],
        destination: 'https://dwellinger.co.uk/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
