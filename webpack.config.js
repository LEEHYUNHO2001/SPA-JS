const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  //   devServer: {
  //     contentBase: "./dist",
  //   },
  entry: "./front/static/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "front", "dist"),
    clean: {
      keep: /\.git/,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new HtmlWebpackPlugin({
      template: "./front/index.html",
    }),
  ],
  target: ["web", "es5"],
};
