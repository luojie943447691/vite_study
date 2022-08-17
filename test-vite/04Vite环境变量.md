# vite 环境变量配置

vite 环境变量是如何处理的？

dotenv 第三方库。

dotenv 会读取 .env 文件，并解析文件中对应的环境变量，并将其注入到 node 中的 process(进程对象) 下，但是 Vite 考虑到和其他配置的一些冲突问题，他不会直接注入到 process 对象下，我们需要使用如下配置才能解决这个问题。

在 vite.config.js 中配置项
- root
- envDir 用来配置当前环境变量的文件地址

我们可以使用 loadEnv 来获取想要的环境变量。

process.cwd 方法，返回当前工作目录。比如 当前文件夹就在 D:\vite学习\vite_study\test-vite  下。

loadEnv(模式,工作目录,文件结尾(默认是 .env ，也有 .env.development/.env.production 等等))

.env： 所有环境都需要的环境变量。
.env.development： 开发环境需要用到的环境变量（vite会自动去加载）。
.env.production： 生产环境需要用到的环境变量（vite会自动去加载）。

vite dev --mode mode名 就可以修改环境变量

当我们调用 loadEnv 的时候，会做如下几件事:
1、直接找到 .env 文件不解释，并解析其中环境变量，放进一个对象里面
2、会将传进来的 mode 这个变量的值进行拼接：```.env[.传进来的 mode 名称]```，并根据我们提供的目录去对应的配置文件寻找是否有满足条件的配置文件，存在的话就把环境变量文件解析到环境变量中。

总结：
- 服务端使用 loadEnv 查看环境变量
- 客户端，比如 js 里面，使用 import.meta.env 获取环境变量