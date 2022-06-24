const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  extensions: ["ts", "tsx", "js", "jsx"],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
};
