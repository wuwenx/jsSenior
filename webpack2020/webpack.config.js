var Path = require("path");
const webpack=require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry: {
        app: "./src/index.js",
        // ver: "./src/vendor.js"
        //vendor:[],//工程所使用的库、框架等第三方模块集中打包而产生的bundle
    },
    output: {
        filename: 'bundle.js',
        chunkFilename:'[name].js'
        // filename: '[name]@[chunkhash].js',
        // path: Path.join(__dirname, "dist"),
        // publicPath: './assets/'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        //modules:true,
                        publicPath: "../"
                    },
                },
                "css-loader"

            ],
            exclude: /node_modules/,
            // include:/src/,
        }, {
            test: /\.scss$/,
            use: ["style-loader", {
                loader: "css-loader",
                options: {
                    sourceMap: true
                },
            }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true // 浏览器提示工具展示原码
                    }
                }]
        }, {
            test: /\.less$/,
            use: ["style-loader", {
                loader: "css-loader",
                options: {
                    sourceMap: true
                },
            }, {
                    loader: "less-loader",
                    options: {
                        sourceMap: true // 浏览器提示工具展示原码
                    }
                }]
        },  
        {
            test: /\.js$/,
            enforce: "pre",//将在所有正常loader之前执行，post 之后
            use: "eslint-loader"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,//对于babel-loader本身我们添加了cacheDirectory配置项，它会启用缓存机制，在重复打包未改变过的模块时防止二次编译
                    presets: ['@babel/preset-env']
                }

            }
        }, {
            test: /\.html$/,
            use: 'html-loader',
        }, {
            test: /\.(png|jpg|gif)$/,
            use: 'file-loader',
            // options: {
            //     name: "[name].[ext]",
            //     publicPath: './assets/'
            // }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: '[name].[ext]',
                    publicPath: './assets/',
                },
            }
        }, {
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            // 自定义loader
            test: /\.js$/,
            use: 'force-strict-loader'
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, './index.html'),
            filename: 'index.html'
        })
        
    ],
    // optimization:{
    //     splitChunks:{
    //         chunks:"all"
    //     }
    // }
    // devServer:{
    //     publicPath:'./dist'
    // }
}