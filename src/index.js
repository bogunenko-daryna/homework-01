import "../index.css";
import JS_IMAGE from '../assets/js-img.png';

console.log('Hello World!');

const jsImageHtml = document.createElement('img')
jsImageHtml.className = 'js-image';
jsImageHtml.src = JS_IMAGE;

document.body.append(jsImageHtml)



console.log('Hello world!')