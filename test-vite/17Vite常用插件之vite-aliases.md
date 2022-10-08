# vite-aliases

插件学习由简入繁

vite-aliases 可以帮助我们自动生成别名，检测你当前目录下包括 src 在内的所有文件夹，并帮助我们去生成别名

具体查看 plugins 目录下的  ViteAliases

大致的思路就是 读取文件目录，使用 config 钩子将 vite.config.ts 中的 resolve 内容进行合并。