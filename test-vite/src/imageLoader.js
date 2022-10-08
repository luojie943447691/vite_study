// 主要来帮助我们李艾哦姐怎么加载静态图片资源

// import lzf from './assets/img/lzf.png?url' // 默认就是 url
// import lzf from './assets/img/lzf.png?raw' // 读取成 buffer
import lzf from '@assets/img/lzf.png'
import screen from '/截屏.png'



const img = document.createElement('img')
img.src = screen

document.body.appendChild(img)