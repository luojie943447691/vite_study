import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";

export default ({ mode }: ConfigEnv) => {
  return defineConfig({
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
      preprocessorOptions:{
        // 这里会进入 lessc 命令行的配置具体看 less 的官网，比如你搜索 math 
        // https://less.bootcss.com/usage/#lessjs-options
        less:{
          math:"parens-division", // 没加括号就没法编译通过 
          globalVars:{ // 全局 less 变量，使用 @color1 引用
            "mainColor":'#ffffff'
          }
        }
      },
      devSourcemap: true // 我们打开谷歌的控制台之后，点击某个 div 的 style，会精准定位到具体的文件 
    },
  });
};
