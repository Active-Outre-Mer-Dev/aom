/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  modularizeImports: {
    "@aom/ui": {
      transform: "@aom/ui/src/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  }
};
