const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './index.js',
    mode: 'production',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "bootstrap4-custom.min.css"
        })
    ]
};