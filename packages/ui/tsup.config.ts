import { defineConfig, Options, build } from "tsup";

export default defineConfig(async (options: Options) => ({
  ...options,
  minify: true,
  target: "es2018",
  external: ["react", "react-dom"],
  dts: !process.env.CI,
  clean: true,
  format: ["esm"],
  splitting: true,
  entry: ["src/**/index.tsx", "src/**/styles.tsx"],
  treeshake: true
}));
