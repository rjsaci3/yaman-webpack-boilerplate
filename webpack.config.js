const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
    ],
    // webpack-dev-server configuration
    devServer: {
        // This is where webpack-dev-server serves your static
        // pages. In this example configuration, put your shell
        // page index.html in './views' directory, and it becomes
        // accessible from:
        //   http://localhost/index.html
        contentBase: './',
        // Make webpack-dev-server live-reload when your
        // shell page changes
        watchContentBase: true,
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};