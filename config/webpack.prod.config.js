const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkCheckerPlugin = require("awesome-typescript-loader").ForkCheckerPlugin;
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const helpers = require("./helpers.js");

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: ["awesome-typescript-loader"]
            }
        ]
    },

    plugins: [
        new ForkCheckerPlugin(),

        new CopyWebpackPlugin([
            { from: "./src/public", to: "./" }
        ]),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            comments: false,
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.NoErrorsPlugin(),
        //new BundleAnalyzerPlugin()
    ],

    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    entry: {
        "app": "./src/app/main.tsx"
    },

    output: {
        path: helpers.root("dist"),
        filename: "./app/[name].js"
    },

    performance: {
        hints: false
    }
}
