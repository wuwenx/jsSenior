// function outer() {
//     var scope = 10;
//     return ()=> {
//         scope += 10;
//         console.log(scope);
//     }
// }
// var scope = 100;
// console.log(scope)
// var fn = outer();
// fn();
// console.log(scope)
var scope = 10;
function calculate(addend) {
    console.log(scope + addend)
}
!function (ca) {
    var scope = 100;
    ca(5);

}(calculate)