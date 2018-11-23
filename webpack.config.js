const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('Path name :: ', __dirname)

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx','.css']
    }
}