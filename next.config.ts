const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/oac' : '',
  assetPrefix: isProd ? '/oac/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
