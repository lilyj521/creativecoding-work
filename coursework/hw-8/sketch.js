
function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('rgb(209, 168, 255)')

for (let i = 0; i <= width; i += 119) {
  noStroke()
  ellipse(i, 100, 75, 75)
}
}
