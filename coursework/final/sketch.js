
var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Starting location
  x = 200;
  y = windowHeight/2;
  // Dimensions
  w = 100;
  h = 100;
}

function draw() {
  background('rgb(255, 198, 235)');
rect(1250,windowHeight/3,200,300)

  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  }
  else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  noStroke();
  // Different fill based on state
  if (dragging) {
    fill ('rgb(255, 157, 216)');
  } else if (rollover) {
    fill('rgb(255, 157, 216)');
  } else {
    fill('rgb(168, 234, 255)');
  }
  ellipse(x, y, w, h);
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  dragging = false;
}
