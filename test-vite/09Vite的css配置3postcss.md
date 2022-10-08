# postcss 概念

vite 对 PostCSS 完美的支持

postcss 基本和全屋净水系统一致，保证 css 在执行起来的时候是万无一失的。即兼容所有浏览器的代码。以下这段代码就会出现兼容性问题。

```css
// index.less
:root{
    --globalRed: red;
}

// 别的 文件下
.footer{
    width: 300px;
    height: (600px / 2);
    background-color: var(--globalRed);
}
```
解决的问题：
1、 由于 css 自身并不能实现语法降级，所以低版本浏览器可能不能适用。
2、 前缀补全。比如一些老版本浏览器才支持的属性，会被加上 --webkit 



我们的 css ----> postcss ----> 将语法编译成原生 css (比如嵌套语法、函数、变量)【**这个功能 less 和 sass 等预处理器也能做，所以这一步我们可以用 less 和 sass 进行替换**】 ----> 再次对 css 进行降级处理 ----> 前缀补全  ---> 浏览器客户端

值得注意的是 postcss 对 嵌套语法、函数、变量 的处理， less 和 sass 等预处理器也能做， 但是 less sass 没法做语法降级。因此 postcss 是包含 less sass 的功能的，而且比他们更强大。**但是由于历史原因，postcss 目前不再支持 less sass 的编译， 因为很麻烦，而且 less sass 能做的很好，所以 postcss 只需要拿到它们编译之后的 css 文件就可以做降级操作了。** 因此就有了一个新的说法，就是说 postcss 是一个后置处理器，而 less 和 sass 是前置处理器。

## 使用 postcss 


详细配置请看 test-postcss。

如果需要看命令，去 postcss-cli 去看操作命令，如果需要看 postcss 有哪些配置文件， 搜索 postcss-plugins list 即可。

1、 安装依赖 
yarn add postcss-cli postcss -D

2、 书写描述文件 

- postcss.config.js
- 安装预设 yarn add postcss-preset-env -D

什么是预设？ 
预设环境里面就包含很多插件 postcss-preset-env，如果我们不使用预设去安装 postcss ，就会去是手动安装很多插件，比如：语法降级插件 编译插件 等等，会花费很多时间。

然后直接使用 npx postcss index.css 即可查看编译之后的结果。会发现兼容了低版本的代码。

