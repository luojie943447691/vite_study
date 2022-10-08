import path from "path";
import { ConfigEnv, defineConfig, loadEnv, Plugin } from "vite";
const postcssPresetEnv = require("postcss-preset-env");
import { ViteAliases } from "vite-aliases";
const MyViteAliases = require("./plugins/ViteAliases");
const MyCreateHtmlPlugin = require("./plugins/CreateHtmlPlugin.ts");
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteMockServe } from "vite-plugin-mock";

export default (mode) => {
  return defineConfig({
    // 项目根目录
    // root:'./',
    // 开发目录
    // base:"./",
    resolve: {
      // 别名
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
      },
      // 情景导出
      // conditions: ["module", "export", "default"],
    },
    envPrefix: "ENV_", // 只有 ENV_ 开头的环境变量会被 VITE 识别并暴露给外面
    css: {
      // modules 模块最终会丢给 postcss-modules
      modules: {
        /**
         * 默认：'camelCaseOnly'
         */
        localsConvention: "camelCaseOnly", // 返回的那个对象的 key 的组成方式（驼峰、烤肉串、驼峰+烤肉串）
        // scopeBehaviour:'local' , // global 不会在 css 后面产生 hash 值， local 则会在 class 后面产生 hash 值
        // generateScopedName:'[name]_[local]_[hash:5]',
        // generateScopedName(name, filename, css) {
        //   // name css文件名字
        //   // filename 当前 css 文件的绝对路径
        //   // css -> 当前css样式
        //   return "123"
        // },
        // hashPrefix:"hello",
        // globalModulePaths:[new RegExp("./Component.module.css")]
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
    build: {
      rollupOptions: {
        output: {
          // file:'bundle.js',
          // format:'iife',
          // name:'MyBundle',
          assetFileNames: "[hash].[name].[ext]",
        },
      },
      // assetsInlineLimit: 81 * 1024 , // 指定限制的大小
      // outDir: "dist123",
      // assetsDir: "hhh", // 静态资源目录
    },
    // esbuild: {
    //   jsxFactory: "h",
    //   jsxFragment: "Fragment",
    //   jsxInject: "import { h ,Fragment} from 'vue'; ",
    // },
    // clearScreen: false,
    plugins: [
      MyViteAliases(),
      vue(),
      vueJsx(),
      MyCreateHtmlPlugin({
        inject: {
          data: {
            title: "111",
          },
        },
      }),
      // mock 数据
      viteMockServe({
        
      })
    ],
  });
};
