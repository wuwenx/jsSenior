// var throttle = function (func, delay) {
//     var prev = Date.now();
//     return function () {
//         var context = this;
//         var args = arguments;
//         console.log(args)
//         var now = Date.now();
//         if (now - prev >= delay) {
//             func.apply(context, args);
//             prev = Date.now();
//         }
//     }

// }
// function handle() {
//     console.log(Math.random());
// }
// window.addEventListener('scroll', throttle(handle, 1000));



// var throttle = function (func, delay) {
//     var timer = null;
//     return function () {
//         var context = this;
//         var args = arguments;
//         if (!timer) {
//             timer = setTimeout(function () {
//                 func.apply(context, args);
//                 timer = null;
//             }, delay);
//         }
//     }
// }
// function handle() {
//     console.log(Math.random());
// }
// window.addEventListener('scroll', throttle(handle, 1000));



var throttle = function (func, delay) {
    var timer = null;
    var startTime = Date.now();  //设置开始时间
    return function () {
        var curTime = Date.now();
        var remaining = delay - (curTime - startTime);  //剩余时间
        var context = this;
        var args = arguments;
        clearTimeout(timer);  
        if (remaining <= 0) {      // 第一次触发立即执行
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);   //取消当前计数器并计算新的remaining
        }
    }
}
function handle(e) {
    // 处理逻辑
    console.log(e);
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));