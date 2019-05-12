const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: [".ts", "tsx", ".js", ".json"]
  },
  mode: "development",
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      }
    ]
  }
};
