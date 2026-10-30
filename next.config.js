const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_ACTIONS === true;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? '/tech22blocks-website' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
