// import add from "./add-content";
// import './style/base.css'
// import './style/a.scss'
// import './style/b.less'
// import('./next-page');
// document.write("任家庄")
// add();
import vue from 'vue'
document.write('index.js', vue.version);
import('./next-page').then(({ add }) => {
    add(3, 4);
})