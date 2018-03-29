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
        // publicPath: './dist/',   //制定资源文件引用的目录
        filename: '[hash].bundle.js' //指定输出文件的名字
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
        /*splitChunks: {
            chunks: 'all',//"initial" | "async" | "all"
            cacheGroups: {
                default: false,
                vendors: false,
            },
        },*/
        /*splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }*/
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            maxInitialRequests: 2,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    // devServer: {
    //      contentBase: './dist'
    // },
};


module.exports = config;