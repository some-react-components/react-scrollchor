import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  external: ['react', 'requestanimationframe-timer'],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), terser()]
};
