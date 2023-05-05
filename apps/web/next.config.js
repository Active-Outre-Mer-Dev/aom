/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  modularizeImports: {
    "ui/src/client": {
      transform: "ui/src/client/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  }
};
