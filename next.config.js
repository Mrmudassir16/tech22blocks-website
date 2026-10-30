/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? '/tech22blocks-website' : '');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
