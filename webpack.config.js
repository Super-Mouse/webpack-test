const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        main: "./src/main"
    },
    output: {
        path: path.join(__dirname, './dist'),   //存放打包后文件的输出目录，必填
        //publicPath: '../',   //制定资源文件引用的目录
        filename: 'js/[name].[chunkhash].bundle.js' //指定输出文件的名字
    },
    devtool: 'inline-source-map',
    devServer: {
         contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // filename: config.build.index,
            template: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
    ],
    optimization: {
        // runtimeChunk: {
        //     name: "manifest"
        // },
        splitChunks: {
            // chunks: "async",
            // minSize: 30000,
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            cacheGroups: {
                commons: {
                    // test: /[\\/]node_modules[\\/]/,
                    // name: "vendor",
                    // chunks: "all",
                }
            }
        }
    },
};


module.exports = config;