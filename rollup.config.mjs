import { defineConfig } from "rollup"
import typescript from "rollup-plugin-typescript2"

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: "dist/index.mjs",
    format: "module",
  },
  plugins: [typescript()],
})
