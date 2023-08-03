import { defineConfig } from "rollup"
import typescript from "rollup-plugin-typescript2"
import shebang from "rollup-plugin-preserve-shebang"
import terser from "@rollup/plugin-terser"

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: "dist/index.mjs",
    format: "module",
  },
  plugins: [typescript(), shebang(), terser()],
})
