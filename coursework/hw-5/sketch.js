
function setup() {
  createCanvas(windowWidth,windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {

background(r, g, b);

r = r + 1
r = r % 255

g = g + 1
g = g % 255

b = b + 1
b = b % 255


push();
noCursor();
fill(g,b,r);
noStroke();
ellipse(mouseX, mouseY, 50);
pop();

if (mouseIsPressed) {
  fill(b,r,g);
  textSize(36);
  text('congrats you pressed the mouse!!!!!!!!!!!!!!',mouseX-300,mouseY-50);
}
}
