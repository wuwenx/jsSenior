const path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')

// 向外暴露配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,// 自动打开浏览器
        port: 3000,// 端口
        contentBase: 'src',// 指定你托管根目录
        hot: true,// 启动热更新的第一步
    },
    plugins: [// 配置插件
        new webpack.HotModuleReplacementPlugin(),// 热更新模块对象 第二步
        new htmlwebpackplugin({// 创建一个在内存中生成html插件
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'

        })
    ],
    module: {// 用于配置所有的第三方模块  加载器
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=30115&name=[hash:8]-[name].[ext]'] },// 处理图片路径limt 给的值大于limt不会将图片进行编码
            { test: /\.(ttf|eot|woff|woff2)$/, use: ['url-loader'] },// 字体文件
            { test: /\.js$/, use: ['babel-loader'],exclude:/node_modules/ },
        ]

    }
}