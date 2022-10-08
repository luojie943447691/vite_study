/**
 * 在 node 端，一定会去读文件
 * 假如我们写的是相对路径，那么他会尝试拼接成绝对路径
 * 
 * 这里我们做一个操作，在当前文件夹下 node main.js  (正常运行)
 * 返回上一层再 node .\test-path\main.js （报错）
 * 
 * 原因：node 端去读取文件的时候，如果发现你是相对路径，就会使用 process.cwd() 来对路径进行拼接
 * process.cwd() 返回 node 的执行目录
 * __dirname 就是获取当前文件所在目录，
 */

const fs = require('fs') // 处理文件（读文件、修改文件）
const path = require('path') // path 可以帮我们处理好 windows 或者 mac 等系统的文件路径问题，本质就是字符串处理模块

// 如果 node 在 当前目录下运行，就可以得到相应的结果
// 如果 node 不在当前目录下运行，得不到正确的文件
const result= fs.readFileSync(path.resolve(__dirname,'./variable.css'))
console.log(path.resolve(__dirname,'./variable.css'));

// console.log("process.cwd()",process.cwd());
// console.log("__dirname",__dirname);

console.log("result",result.toString());
