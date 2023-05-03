import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  ...options,
  minify: true,
  target: "es2018",
  external: ["react"],
  dts: true,
  clean: true,
  format: ["esm"],
  splitting: true,
  entry: ["src/**/*.tsx"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"'
    };
  }
}));
