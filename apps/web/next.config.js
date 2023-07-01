/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  modularizeImports: {
    "@aomdev/ui": {
      transform: "@aomdev/ui/src/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  }
};
