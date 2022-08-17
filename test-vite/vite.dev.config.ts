import { defineConfig, UserConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// export default (mode: string): UserConfig => {
//   return {};
// };
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: "开发标题",
        },
      },
    }),
  ],
});
