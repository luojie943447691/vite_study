// import './src/imageLoader'


// 这么导入，是不能进行 treeshaking 摇树优化的
// 因为 打包工具并不敢保证你是否 用了这个对象里面的某个变量，所以不能进行 treeshaking ，
// import json from './src/assets/json/index.json'


// 这么导入的话，就能进行 treeshaking 摇树优化
// import { name } from './src/assets/json/index.json'

// console.log("json", json); // 如果不是用的 vite ,在其他工具里面，有可能是导出的是一个 json 字符串