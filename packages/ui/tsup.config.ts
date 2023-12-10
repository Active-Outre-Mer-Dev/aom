import { defineConfig } from "tsup";

export default defineConfig([
  {
    minify: true,
    target: "es2018",
    external: ["react", "react-dom"],
    dts: true,
    format: ["esm"],
    splitting: true,
    entry: ["src/**/index.ts", "src/**/index.tsx"],
    treeshake: true,
    clean: true
  },
  {
    minify: true,
    target: "es2018",
    external: ["react", "react-dom"],
    dts: true,
    format: ["esm"],
    splitting: true,
    entry: ["client/index.ts", "client/**/index.tsx"],
    outDir: "./dist/client",
    esbuildOptions: (options) => {
      options.banner = {
        js: '"use client"'
      };
    }
  },
  {
    minify: true,
    target: "es2018",
    external: ["react", "react-dom"],
    dts: true,
    format: ["esm"],
    splitting: true,
    treeshake: true,
    entry: ["styles/**/*.ts"],
    outDir: "./dist/styles"
  }
]);
