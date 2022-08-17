import {
  ConfigEnv,
  defineConfig,
  loadEnv,
} from "vite";
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
  build: (obj:ConfigEnv) => Object.assign({},viteBaseConfig(obj), viteProConfig),
  serve: (obj: ConfigEnv) => Object.assign({},viteBaseConfig(obj), viteDevConfig),
};

export default ({ mode, command }: ConfigEnv) => {
  // console.log("process",process.env);
  const env = loadEnv(mode,process.cwd())
  // console.log("env",env);
  // console.log("viteBaseConfig",viteBaseConfig({mode} as ConfigEnv));
  return envResolver[command]({mode} as ConfigEnv);
};
