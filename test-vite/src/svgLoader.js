import pistachio from './assets/svg/开心果.svg'
import pistachioBuffer from '@assets/svg/开心果.svg?raw'

// 第一种使用方式 img 直接引用
// const img = document.createElement('img')

// img.src = pistachio

// document.body.append(img)

// 第二种 使用 svg 方式读取

// console.log("pistachioBuffer", pistachioBuffer);
const div = document.createElement("div")
div.innerHTML = pistachioBuffer

document.body.appendChild(div)
