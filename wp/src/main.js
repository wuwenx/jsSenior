import $ from 'jquery';
// webpack 默认只能打包处理Js类型的文件
import './css/index.css';
import './css/index.less'
import './css/index.scss'

$(function () {
    $("#jq").html('wuwx');
})
class Person {
    static info = { name: 'za', age: 20 }
}