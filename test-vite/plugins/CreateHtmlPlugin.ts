// 如果在使用这个插件的时候，发现 控制台报错了，就是因为别的插件在使用html文件，但是此时的 html
// 还拥有 ejs 的写法，其他插件无法识别，就会报错。此时需要换一种写法
// module.exports = (options) => {
//   return {
//     name: "html-transform",
//     transformIndexHtml(html,ctx) {
//         console.log("path",ctx.path);
//         console.log("filename",ctx.filename);
//         return html.replace(
//           /<%- title %>/g,
//           options.inject.data.title
//         )
//     },
//   };
// };

module.exports = (options) => {
  return {
    name: "html-transform",
    transformIndexHtml: {
      enforce: "pre",
      transform(html, ctx) {
        console.log("path", ctx.path);
        console.log("filename", ctx.filename);
        return html.replace(/<%- title %>/g, options.inject.data.title);
      },
    },
  };
};
