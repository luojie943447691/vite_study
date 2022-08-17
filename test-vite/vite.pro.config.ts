import { defineConfig, UserConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// export default (mode: string): UserConfig => {
//   return {};
// };
export default defineConfig({
    base:"./",
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: "生产标题",
        },
      },
    }),
  ],
});
