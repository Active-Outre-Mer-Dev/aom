import { defineConfig, Options, build } from "tsup";

export default defineConfig(async (options: Options) => ({
  ...options,
  minify: true,
  target: "es2018",
  external: ["react"],
  dts: true,
  clean: true,
  format: ["esm"],
  splitting: true,
  entry: ["src/index.tsx", "src/client/index.tsx"],
  treeshake: true
}));
