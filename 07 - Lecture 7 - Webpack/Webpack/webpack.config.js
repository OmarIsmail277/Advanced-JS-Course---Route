// I have to write my path in a different way, beacuse node.js will deal with it

import path from "node:path";
import { fileURLToPath } from "node:url";

import HTMLWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // regex rule => any file that ends with .css
        use: ["style-loader", "css-loader"], // don't try to understand it, and use that loaders, order is important (from right to left)
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" })], // => array not an object, because I can add more than one plugin
  mode: "development",
};

// lets run our project!
// first go to package.json and add "build" script
