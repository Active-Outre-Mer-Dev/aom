/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@aom/ui": {
      transform: "@aom/ui/src/{{ kebabCase member }}",
      skipDefaultConversion: true
    }
  }
  // experimental: {
  //   serverActions: true
  // }
};

module.exports = nextConfig;
