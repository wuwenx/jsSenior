// 在Node中，一个文件就是一个模块，将方法挂载在exports对象上作为属性即可定义导出的方式
exports.add = function () {
    var sum = 0, i = 0, args = arguments, l = args.length;
    console.log(arguments)
    while (i < l) {
        sum += args[i];
        i++
    }
    console.log(sum)
    return sum;
}