# vite 是如何处理 css 的

1、 main.js 中导入 index.css 
2、 直接使用 fs 模块读取 index.css 中的内容
3、 创建 style 标签，将 index.css 中的内容 copy 进 style 标签里面，
4、 将 style 标签插入到 index.html 文件中
5、 将 css 文件中的内容直接替换成为 js 脚本（方便热更新或者 css 模块化），即在响应头里面直接使用 js 的content-type 

关于如何解决两个独立开发的人，写的不同的 css 但是拥有了同样的类名，就会出现覆盖的行为。 vite 使用 cssmodule 做了处理。

即在我们的 css 文件前加上 module ，引入的时候就会是一个模块，直接引用即可。

比如当前文件夹下的 ComponentA.module.css 。 module 是一种约定，只要你以 module.css 结尾的， vite 就默认你开启了 css 模块化，即会在类名之后补上 一堆 hash 值。具体流程如下:

1、 module.css 
2、 实现规则替换（比如 ： footer -> footer_i122_st ）
3、 生成一个 映射对象，包含了以前的 footer 类名和 生成的 类名。{"footer":"footer_i122_st"}
4、 将替换之后的 css 文件放入 style 标签。
5、 将 module.css 文件内容全部抹除，生成 js 脚本