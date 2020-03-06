// 但是由于引入了第三方库lodash，浏览器是没法识别require指令的。
// 因此我们需要使用打包工具webpack来将第三库一起打包出来，让浏览器可以运行
import _ from 'lodash'


describe("Use lodash suite", () => {
    if ("fill array", () => {
        var array = [1, 2, 3];
        _.fill(array, 'a');
        console.log(array);

    });
});