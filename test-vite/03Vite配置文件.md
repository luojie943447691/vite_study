# vite 配置文件

代码提示

1、在 js、ts 中，import { defineConfig } from 'vite'
2、在 js 中，在需要配置的变量上写上如下代码，就会出现提示
```js
/** @type import("vite").UserConfigExport */
const config = {
}
```
正常情况下来说，是有三个配置文件的，即 基础配置、生产配置和开发配置

- vite.base.config.js
- vite.pro.config.js
- vite.dev.config.js

详细配置看自己配置的这三个