//make line object and assign color
let longline = {};
longline.color = 255*1 ;

//set up canvas
function setup() {
  createCanvas(windowWidth,windowHeight);
  background('yellow');
  //make line width variables
  lin1 = width/2;
  lin2 = width/2;
}

function draw() {
  //define variables for horizontal line points
  lin1 = lin1 - 1;
  lin2 = lin2 + 1;
  //define variable to map color to mouseX
  color = map( mouseX, 0, width, 0, 255);

  //create line
  fill(longline.color);
  strokeWeight(10);
  line(lin1, height/2, lin2, height/2);

  //create ellipses
  push();
  noStroke();
  fill(color);
  ellipse(60, 60, 60, 60);
  ellipse(width - 60, 60, 60, 60);
  pop();
}
function mousePressed() {
  //define ranW and ranH variables in function
  ranW = random(ceil(.5), floor(50.5));
  ranH = random(1,100);
  ranH = ranH % 50
  //create ellipse
  noStroke();
  fill(random(1,255));
  ellipse(mouseX,mouseY,ranW,ranH);
}
