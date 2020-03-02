// 微任务 promise  process.nextTick          
// 宏任务 setTimeout  setInterval  I/O  script
// 同一次事件循环中  微任务永远在宏任务之前执行
// setTimeout(() => {
//     console.log('定时器开始啦');
// });
// var ss= new Promise((resolve,reject) => {
//     console.log('马上执行for循环');
//     for (var i = 0; i < 100; i++) {
//         i = 99 && resolve()
//     }
// }).then(()=>{
//     console.log('执行THEN函数了')
// }).catch(()=>{
//     reject('出错了')
// })
// console.log(ss)
// console.log('代码执行结束')

// result
// 马上执行for循环
// 代码执行结束
// 执行THEN函数了
// 定时器开始啦

// 首先执行script下的宏任务,遇到setTimeout,将其放到宏任务的【队列】里
// 遇到 new Promise直接执行,打印"马上执行for循环啦"
// 遇到then方法,是微任务,将其放到微任务的【队列里】
// 打印 "代码执行结束"
// 本轮宏任务执行完毕,查看本轮的微任务,发现有一个then方法里的函数, 打印"执行then函数啦"
// 到此,本轮的event loop 全部完成。
// 下一轮的循环里,先执行一个宏任务,发现宏任务的【队列】里有一个 setTimeout里的函数,执行打印"定时器开始啦"
// 直接返回一个Promise成功的对象（resolver）

// async function fn1() {
//     return 123;
// }
// function fn2() {
//     return 123;
// }
// console.log(fn1());
// console.log(fn2());

// setTimeout(() => {
//     console.log("settimeout1");
// }, 0);
// setTimeout(() => {
//     console.log('settimeout2');
//     Promise.resolve().then(() => {
//         console.log('promise3');
//         Promise.resolve().then(() => {
//             console.log('promise4');
//         })
//         console.log(5);
//     })
//     setTimeout(() => console.log('settimeout4'), 0);
// }, 0);
// setTimeout(()=>console.log('settimeout3'),0);
// Promise.resolve().then(()=>{
//     console.log('promise1');
// })


async function async1() {
    console.log(' async1 start');
    // 一旦遇到await 就立刻让出线程,阻塞后面的代码
    // 等候之后,对于await来说分两种情况 
    // 不是promise 对象
    // 是promise对象
    // 如果不是promise,await会阻塞后面的代码,先执行async外面的同步代码,同步代码执行完毕后,在回到async内部,把promise的东西,作为await表达式的结果
    // 如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。
    // 如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。
    await async2();
    console.log('async1 end')
}
async function async2() {
    console.log('async2');
}
async1();
console.log('script start')
// 执行结果
// async1 start
// async2
// script start
// async1 end