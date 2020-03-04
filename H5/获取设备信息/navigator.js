

if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, errFun, options)
}
var options = {
    enableHighAccuracy: false,// 是否获取高精度的坐标信息
    timeout: 3000,
    maximumAge: 0
}
navigator.geolocation.getCurrentPosition(success, errFun, options)

function success(success) {
    console.log("获取位置信息成功" + success.coords)
}
function errFun(err) {
    console.log("获取位置信息失败" + err.message)
}