const path = require("path");

module.exports = {
  watch: true,
  entry: [path.resolve(__dirname, "src", "index.jsx")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/webpack"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"],
      },
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
