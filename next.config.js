const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
require("dotenv").config();

const nextConfig = {
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = {
  css: withPlugins([[css]], nextConfig),
  env: {
    URL: process.env.URL || "http://localhost:3000",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
};
