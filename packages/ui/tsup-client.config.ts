import { defineConfig, Options } from "tsup";

export default defineConfig(async (options: Options) => ({
  ...options,
  minify: true,
  target: "es2018",
  external: ["react"],
  dts: true,
  format: ["esm"],
  splitting: true,
  outDir: "dist/client",
  entry: ["src/client/**/*.tsx"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"'
    };
  }
}));
