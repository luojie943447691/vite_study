# vite 的预加载功能

```js
import _ from "loadsh";
```

在处理的过程中，如果发现非绝对或者相对路径的引用，他则会尝试开启路径补全

```js
import _ from '/node_modules/.vite/deps/loadsh.js'

// 打开 f12 查看引用路径
http://127.0.0.1:5173/node_modules/.vite/deps/loadsh.js?v=7e85263c
```

vite 寻找依赖的过程是从当前目录开始，依次向上直到根目录为止，寻找 node_modules 文件夹下是否有满足的模块，没有的话就报错。

<!-- 官网具体查看 依赖预构建 模块 -->

**依赖预构建**：首先 vite 会找到对应的依赖，然后调用 esbuild (对 js 语法进行一个集中处理的库)，将其他代码规范，比如 cjs、umd 等转换成 esm 规范，然后放到当前目录下的 /node_modules/.vite/deps 下，同时对 esm 规范的各个模块进行统一集成。

依赖预构建解决了以下三个问题

- 1、不同的第三方包会有不同的导出方式，但是 vite 解决了
- 2、对路径的处理，统一放到 /node_modules/.vite/deps 下，方便路径的重写
- 3、网络多包传输的性能问题（比如配置的 lodash-es 模块，在配置 optimizeDeps.exclude 的之后，会发现 lodash-es 没有进入 /node_modules/.vite/deps 目录下，意味着并没有执行 依赖预构建 功能，而是把 lodash-es 所依赖的所有包请求出来了，导致几百个 http 请求，极大的消耗了网络资源，打开 F12 即可看到。 esbuild 构建会把 形如 export { default as add } from './add.js' 直接解析成一个函数，而不再需要一个网络资源。从而减少了网络多宝传输的数量）。有了依赖预构建之后，，无论原本依赖的包有多少个 import 和 export (也就是在未优化前会发送网络请求的包) ，都只会被 vite 构建成一个或者几个模块。