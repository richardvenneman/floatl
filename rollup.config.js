import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const banner = `/* ${pkg.name} version ${pkg.version} */`
const exports = "default"

export default [
  {
    input: "src/main.ts",
    output: { banner, exports, file: pkg.browser, format: "umd", name: "Floatl" },
    plugins: [typescript()]
  },
  {
    input: "src/main.ts",
    output: [
      { banner, exports, file: pkg.main, format: "cjs" },
      { banner, exports, file: pkg.module, format: "es" }
    ],
    plugins: [typescript()]
  }
];
