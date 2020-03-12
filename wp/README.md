### 打包命令
1. webpack ./src/main.js --output  ./dist/bundle.js
### webpack 做了那些事情
1. 查找项目的webpack.config.js文件，执行解析文件
### webpack-dev-server 自动打包编译功能
1. 想要运行必须在本地安装webpak，webpack4.0需要安装webpack-cli
2. package.json中的name不能为webpack,不然安装不上 
3. dev-server 帮我们打包生成的bubdle.js并没有存放在dist中，是托管在内存中的
### html-webpack-plugin 在内存中申城生成HTML文件
1. 不在需要手动处理bundel.js路径，它会自动创建script标签，引入bundle.js
### css文件需要安装 style-loader css-loader 在module对象中配置rules
### 默认情况下webpack无法处理css文件中的地址，不管是图片还是样式地址