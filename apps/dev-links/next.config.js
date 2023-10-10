/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@aomdev/ui": {
      transform: "@aomdev/ui/dist/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
