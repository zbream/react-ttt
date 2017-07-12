const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkCheckerPlugin = require("awesome-typescript-loader").ForkCheckerPlugin;

const helpers = require("./helpers.js");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ["awesome-typescript-loader"]
            }
        ]
    },

    plugins: [
        new ForkCheckerPlugin(),

        new CopyWebpackPlugin([
            { from: "./src/public", to: "./" }
        ])
    ],

    devtool: "cheap-module-eval-source-map",

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    entry: {
        "app": "./src/app/main.tsx"
    },

    output: {
        path: helpers.root("dist"),
        filename: "./app/[name].js",
        publicPath: "http://localhost:8080"
    },

    devServer: {
        contentBase: "./dist",

        // allow non-localhost connections
        host: "0.0.0.0"
    },

    performance: {
        hints: false
    }
}
