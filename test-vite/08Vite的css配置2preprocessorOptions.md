# vite 中 css 配置的 preprocessorOptions （css 预处理器）

preprocessorOptions：比如我们 编译 less 。具体命令行查看 [这里](https://less.bootcss.com/usage/#command-line-usage-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E5%92%8C%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%94%A8%E6%B3%95)。也可以直接看 options 配置项，查看详细的使用规则。

该配置项包含众多配置，如下
- math: 如何计算 height: 100px / 2 ;这样的 css 属性
- globalVars: 全局属性。可以使用 @ 符号引用

```ts
css:{
    preprocessorOptions:{
        // 这里会进入 lessc 命令行的配置具体看 less 的官网，比如你搜索 math 
        // https://less.bootcss.com/usage/#lessjs-options
        // 这些配置 webpack 也有的
        less:{
          math:"parens-division", // 没加括号就没法编译通过 
          globalVars:{ // 全局 less 变量，使用 @mainColor 引用
            "mainColor":'#ffffff'
          }
        }
      }
}
```