const Koa = require('koa')
const fs = require('fs')
const path = require("path")

const app = new Koa();

//  node 做的最多的就是处理请求和操作文件
app.use(async ctx => {
    console.log(ctx.request); 
    // console.log(ctx.response); 
    const url = ctx.request.url
    if(url === '/'){
        // 找我们要 根路径 的东西，一般情况下是返回个界面
        const indexContent = await fs.promises.readFile(path.resolve(__dirname,"./index.html")) 
        ctx.response.body = indexContent.toString()
        ctx.response.set("content-type","text/html;charset=utf-8")
    }
    if(url === '/main.js'){
        // 找我们要 根路径 的东西，一般情况下是返回个界面
        const indexContent = await fs.promises.readFile(path.resolve(__dirname,"./main.js")) 
        ctx.response.body = indexContent.toString()
        ctx.response.set("content-type","text/javascript;charset=utf-8")
    }
     if(url === '/App.vue'){
        // 找我们要 根路径 的东西，一般情况下是返回个界面
        const indexContent = await fs.promises.readFile(path.resolve(__dirname,"./App.vue")) 
        ctx.response.body = indexContent.toString()
        ctx.response.set("content-type","text/javascript;charset=utf-8")
    }
    if(url === '/api/getUsetInfo'){
        // 去数据库找到用户信息返回前端
    }
})
app.listen("3000",() => {
    console.log("启动成功！");
})
console.log("app",app);