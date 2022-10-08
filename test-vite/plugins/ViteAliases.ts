const fs = require("fs");
const { resolve } = require("path");
import { Plugin, UserConfig } from "vite";

function diffFileAndDir(dirFileArray = [], baseUrl = "") {
  const result = {
    dirs: [],
    files: [],
  };
  dirFileArray.forEach((name) => {
    const t = fs.statSync(resolve(__dirname,baseUrl,name));
    t.isFile() && result.files.push(name)
    t.isDirectory() && result.dirs.push(name)
  });
  
  return result;
}

function getTatolSrcDir() {
  const results = fs.readdirSync(resolve(__dirname, "../src"));
  const diffResults = diffFileAndDir(results, "../src");
  const resultAssets = {}
  diffResults.dirs.forEach(dirName => {
    const key = `@${dirName}`
    const absResolve = resolve(__dirname, "../src",dirName)
    resultAssets[key] = absResolve
  })
  return resultAssets
}
module.exports = (): Plugin => {
  return {
    name: "ViteAliases",
    // 这里的 config 就是之前在 vite.congfig.js 里面返回出来的 配置文件
    // 最终 Vite 会把在这里返回出去的对象和 vite.congfig.js 进行一个合并，最终输出结果
    config(config: UserConfig, env: { mode: string; command: string }) {
      // console.log("config", config);
      // console.log("mode", env.mode);
      // console.log("command", env.command);
      const resolveAliases = getTatolSrcDir();
      return {
        ...resolveAliases
      };
    },
  };
};
