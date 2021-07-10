import babel from "@rollup/plugin-babel";
import commonJs from "@rollup/plugin-commonjs";
export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    name: "shortText"
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "inline"
    }),
    commonJs()
  ]
};
