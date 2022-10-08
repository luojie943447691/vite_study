// 预设环境里面就包含很多插件 postcss-preset-env
// 如果我们不使用预设去安装 postcss ，就会去是手动安装很多插件，比如
//    语法降级插件 编译插件 等等。

const postcssPresetEnv = require('postcss-preset-env')

//  npx postcss index.css
module.exports = {
    plugins: [
        postcssPresetEnv({

        })
    ]
}