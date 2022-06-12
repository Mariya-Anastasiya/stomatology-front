const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.(gif|png|jp(e)?g|svg)$/,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions: [
            ".tsx", ".ts", ".jsx", ".js", ".sass", ".scss", ".css", ".html"
        ],
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "@components": path.resolve(__dirname, "./src/components"),
          "@media": path.resolve(__dirname, "./src/media"),
          "@styles": path.resolve(__dirname, "./src/styles")
        }
    },
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        // new ESLintWebpackPlugin({
        //     extensions: ["ts"]
        // }),
        // new BundleAnalyzerPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            favicon: "./src/media/images/logo.svg"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};
