let img;
let w, h;
function preload(){
  img = loadImage('https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg');
}
function setup() {
  w = img.width;
  h = img.height;
  createCanvas(w, h);
}

function draw() {
  image(img, 0, 0, w, h);
}