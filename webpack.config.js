const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    mode: 'production', //设置全局变量process.env.NODE_ENV为'production'，注意：这个全局变量不是node的环境变量
    entry: {
        main: "./src/main",
    },
    output: {
        path: path.join(__dirname, './dist'),   //存放打包后文件的输出目录，必填
        //publicPath: '../',   //制定资源文件引用的目录
        filename: 'js/[name].[chunkhash].bundle.js' //指定输出文件的名字
    },
    devtool: 'source-map',
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
        //DefinePlugin可以在编译时期创建全局变量
        new webpack.DefinePlugin({
            'SuperMouse': '666'    //设置全局变量Super-Mouse'为'666'
        }),
    ],
    optimization: {
        splitChunks: {
            // chunks: "all",
            // minSize: 30000,
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            cacheGroups: {  //此配置将jquery单独打包出来，然后将其余第三方插件打包在一起（lodash和vue）
                jquery: {
                    test: /jquery/,
                    name: 'jquery',
                    chunks: "all",
                    priority: 10
                },
                // lodash: {
                //     test: /lodash/,
                //     name: 'lodash',
                //     chunks: "all",
                //     priority: 10
                // },
                // vue: {
                //     test: /vue/,
                //     name: 'vue',
                //     chunks: "all",
                //     priority: 10
                // },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                    //minChunks: 2,
                },
            }
        },
        runtimeChunk: {
            name: "manifest",
        },
    },
};

module.exports = config;