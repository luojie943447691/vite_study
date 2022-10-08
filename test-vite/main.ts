import { createApp } from 'vue';
import App from './src/App'
// import './src/imageLoader'
// import './src/svgLoader'

// import Test from './src/test.jsx'
// console.log("Test",Test);
// console.log("hhh",import.meta.env);

createApp(App).mount("#app")

fetch("/api/user",{
    method:"post"
}).then((data) => {
    console.log("data",data);
}).catch((err) => {
    console.error(err);
})