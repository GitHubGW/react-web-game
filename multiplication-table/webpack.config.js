const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "multiplication-table-setting",
  mode: "development",
  devtool: "eval",
  resolve: { extensions: [".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: { browsers: ["> 1% in KR"] }, debug: true }], "@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  entry: { app: ["./index"] },
  output: { path: path.join(__dirname, "dist"), filename: "index.js" },
};
