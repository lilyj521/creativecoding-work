var rx, ry, rw, rh
var x, y, w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 200;
  y = 500
  w = 100;
  h = 100;

  rx = 1250
  ry = 250
  rw = 200
  rh = 300
}

function draw() {
  background('rgb(255, 198, 235)');

//make ball move with arrows
if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
  }
if (keyIsDown(RIGHT_ARROW)) {
          x += 5;
  }


//create ball
noStroke();
fill('rgb(156, 231, 255)')
ellipse(x, y, w, h);

//create "goal"
  push();
  fill('rgb(255, 125, 211)')
rect(rx,ry,rw,rh)
  pop();

//display text when "goal" scored
  if(x >= 1300 && y >= 300 && y <= 500) {
    fill('rgb(255, 236, 108)')
    textSize(60)
    text('you scored a goal!!!',windowWidth/2,100)
  }
}
