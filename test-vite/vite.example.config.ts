import path from "path";
import { defineConfig } from "vite";

const postcssPresetEnv = require("postcss-preset-env");

export default defineConfig({
  // 别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"./src"),
      "@assets":path.resolve(__dirname,"./src/assets")
    },
  },
  // 优化专用
  optimizeDeps: {
    exclude: ["lodash-es"],
  },
  // 配置 vite 注入客户端环境变量校验的 env 前缀
  // 比如 .env 里面只有 ENV_ 开头的才注入到 环境变量中
  envPrefix: "ENV_",
  css: {
    // modules 模块最终会丢给 postcss-modules
    modules: {
      /**
       * 默认：'camelCaseOnly'
       */
      localsConvention: "camelCaseOnly", // 返回的那个对象的 key 的组成方式（驼峰、烤肉串、驼峰+烤肉串）
      scopeBehaviour: "local", // global 不会在 css 后面产生 hash 值， local 则会在 class 后面产生 hash 值
      // generateScopedName:'[name]_[local]_[hash:5]',
      generateScopedName(name, filename, css) {
        // name css文件名字
        // filename 当前 css 文件的绝对路径
        // css -> 当前css样式
        return "123";
      },
      hashPrefix: "hello",
      globalModulePaths: [new RegExp("./Component.module.css")],
    },
    preprocessorOptions: {
      // 这里会进入 lessc 命令行的配置具体看 less 的官网，比如你搜索 math
      // https://less.bootcss.com/usage/#lessjs-options
      less: {
        math: "parens-division", // 没加括号就没法编译通过
        globalVars: {
          // 全局 less 变量，使用 @color1 引用
          mainColor: "#ffffff",
        },
      },
    },
    devSourcemap: true, // 我们打开谷歌的控制台之后，点击某个 div 的 style，会精准定位到具体的文件
    postcss: {
      plugins: [
        postcssPresetEnv({
          // 让一些全局变量可以让 postcss 检测到，不然跨文件的形如 --globalColor:red ，这样的代码
          //   会在编译的时候出问题，比如当前这个例子里面，如果不加这句配置，编译之后会少一句代码
          //    background-color: red; 就是这个。
          importFrom: path.resolve(__dirname, "./vars.css"),
        }),
      ],
    },
  },
  build:{
    rollupOptions:{
      output:{
        // file:'bundle.js',
        // format:'iife',
        // name:'MyBundle',
        assetFileNames:"[hash].[name].[ext]",
      }
    },
    // assetsInlineLimit: 81 * 1024 , // 指定限制的大小 
    outDir:"dist123",
    assetsDir:"hhh" , // 静态资源目录
  }
});
