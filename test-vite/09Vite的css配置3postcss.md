# postcss

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
1、 由于 less、sass 等自身并不能实现语法降级，所以低版本浏览器可能不能适用。
