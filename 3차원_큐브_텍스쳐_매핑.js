let img; 
function preload() {
   img = loadImage('https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'); 
}
function setup() {
  createCanvas(400, 400, WEBGL);  
}

function draw() {
  background(220);
  texture(img); 
  box(150);
}