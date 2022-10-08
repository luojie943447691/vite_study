import { ConfigEnv, defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProConfig from "./vite.pro.config";

// 具体细节去官网看 环境变量与模式
// mode 是通过 vite build/serve/dev --mode mode的名称 传入进来的 mode的名称
//  在没有指定 --mode 的情况下，serve/dev 对应的 mode 是 development ，而 build 是 production

// 策略模式
// const envResolver = {
//   build: (mode:string) => Object.assign(viteBaseConfig(mode), viteProConfig(mode)),
//   serve: (mode:string) => Object.assign(viteBaseConfig(mode), viteDevConfig(mode)),
// };

const envResolver = {
  // 这里尤其要注意不要使用  viteProConfig 的内容会覆盖 viteBaseConfig 的内容
  // 之前因为这个原因找了一个多小时
  build: (mode) => Object.assign({}, viteBaseConfig(mode), viteProConfig),
  serve: (mode) => Object.assign({}, viteBaseConfig(mode), viteDevConfig),
};

export default  ({ mode, command }: ConfigEnv) => {
  // console.log("process",process.env);
  const env = loadEnv(mode, process.cwd());
  // console.log("env",env);
  return envResolver[command](mode)
};
