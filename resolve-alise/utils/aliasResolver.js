const {resolve,join,normalize} = require("path")
module.exports = function(alias,jsContent){

    const entries = Object.entries(alias)
    let lastContent = jsContent
    entries.forEach(entry => {
        const [alias,path] = entry
        // 找到 src 
        const srcIndex = path.indexOf("\\src") === -1 ? path.indexOf("/src") : path.indexOf("\\src")
        const realPath = path.slice(srcIndex,path.length)
        // 最终 alias 的别名，就是做一个字符串替换
        lastContent = jsContent.replace(alias, realPath.replace(/\\/g,"/") )
    })
    console.log("lastContent",lastContent);
    return lastContent
}