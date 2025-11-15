import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:3000/', 'localhost'],
  }
};

export default withNextIntl(nextConfig);
