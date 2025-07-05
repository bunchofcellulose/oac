/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/REPO_NAME', // 🔁 Replace with your repo name (NOT username)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;