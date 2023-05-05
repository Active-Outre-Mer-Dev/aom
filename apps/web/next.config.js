/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  modularizeImports: {
    ui: {
      transform: "ui/src/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  }
};
