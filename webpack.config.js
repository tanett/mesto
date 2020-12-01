const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
       main: './src/pages/index.js'},
    output: {
        publicPath: '',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 8080
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {importLoaders: 1}
                }, 'postcss-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ]
};