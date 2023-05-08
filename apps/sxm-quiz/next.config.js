/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    ui: {
      transform: "ui/src/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
