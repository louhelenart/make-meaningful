let a;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  a="MAKE MEANINGFUL"
}

function draw() {
  noStroke();
  fill(random(0, 255), random(0, 150), random(0, 150));
  square(mouseX, mouseY, random(24, 64));
  text (a, mouseX,mouseY,)

  
}

function mousePressed() {
  background (255);
}
