const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ConcatPlugin = require("webpack-concat-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env = { mode: "development" }) => {
  const isProduction = env.mode === "production";

  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new ConcatPlugin({
      uglify: isProduction,
      sourceMap: !isProduction,
      name: "combinejs",
      outputPath: "js/",
      fileName: "script.js",
      filesToConcat: ["./src/js/ssm.min.js", "./src/js/script.js"],
      attributes: {
        async: true,
      },
    }),
  ];

  if (isProduction) {
    plugins.push(
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin({}),
      new CopyPlugin({
        patterns: [
          {
            from: "**/*",
            context: path.resolve(__dirname, "src"),
            globOptions: {
              // ignore: ["**/*.js", "**/*.scss"],
              ignore: ["**/*.{js,scss}"],
            },
          },
        ],
      })
    );
  }

  return {
    mode: env.mode,
    entry: {
      app: ["./src/js/app.js", "./src/scss/style.scss"],
    },
    output: {
      path: __dirname + "/dist",
      filename: "js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins,
    devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      port: 9000,
      overlay: true,
      stats: {
        modules: false,
      },
    },
  };
};
