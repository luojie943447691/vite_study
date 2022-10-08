const Koa = require('koa')
const fs = require('fs')
const path = require("path")

// 问题： vite.config.js 需不需要使用 fs 去读取？
// 因为我们不需要将 vite.config.js 返回给客户端，而且我们约定好名字就是 vite.config.js

const app = new Koa();

// 导入 viteConfigjs
const viteConfig = require('./vite.config')
console.log("viteConfig",viteConfig);

// 导入 处理路径的文件 
const aliasResolver = require("./utils/aliasResolver")


//  node 做的最多的就是处理请求和操作文件
app.use(async ctx => {
    const url = ctx.request.url
    // console.log("url",url);
    if (url === '/') {
        // 找我们要 根路径 的东西，一般情况下是返回个界面
        const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
        ctx.response.body = indexContent.toString()
        ctx.response.set("content-type", "text/html;charset=utf-8")
    }
    // 以 js  后缀结尾
    if (url.endsWith(".js")) {
        const indexContent = await fs.promises.readFile(path.resolve(__dirname, "." + url))
        // 导入  main.js 的时候，会读取到 import '@/test.js'，而不会执行导入操作
        // console.log("indexContent",indexContent.toString());
        const lastResult = aliasResolver(viteConfig.resolve.alias,indexContent.toString())
        ctx.response.body = lastResult
        ctx.response.set("content-type", "text/javascript;charset=utf-8")
    }
})
app.listen("3000", () => {
    console.log("启动成功！");
})
console.log("app", app);