# vite 中配置 postcss

// 可以在 vite 中配置，也可以自己写一个 postcss.config.js 配置，优先 vite 的

```ts
css: {
  preprocessorOptions: {
    postcss: {
      // 让一些全局变量可以让 postcss 检测到，不然跨文件的形如 --globalColor:red ，这样的代码
      //   会在编译的时候出问题，比如当前vite项目里面，如果不加这句配置，编译之后会少一句代码
      //    background-color: red; 就是这个。具体原因是 postcss 是逐个扫描文件的，并不会把全局变量记录下来，如果不提前导入的话，就识别不了全局 css 变量
      importFrom: path.resolve(__dirname, "./vars.css");
    }
  }
}
```
