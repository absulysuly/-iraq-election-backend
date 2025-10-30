const normalizeBaseUrl = value => {
  if (!value) {
    return undefined;
  }

  return value.endsWith('/') ? value.slice(0, -1) : value;
};

const backendBase = normalizeBaseUrl(process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.BACKEND_URL);

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  async rewrites() {
    const destinationBase = backendBase ?? 'http://localhost:4000';

    return [
      {
        source: '/api/:path*',
        destination: `${destinationBase}/api/:path*`
      }
    ];
  }
};

export default nextConfig;
