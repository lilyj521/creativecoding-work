
function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('rgb(220, 208, 255)')

//white circles
push()
for (let x = 0; x <= width; x += 119) {
  for (let y = 0; y <= height; y += 133) {
  noStroke()
  ellipse(x, y, 75, 75)
    }
  }
pop()

  //right-facing circles
push()
  for (let i = 6; i <= width; i += 119) {
    for (let e = 5; e <= height; e += 264) {
      fill('rgb(173, 223, 255)')
      ellipse(i, e, 50, 50)
    }
  }
  pop()

//left-facing circles
  push()
  for (let i = -6; i <= width; i += 119) {
    for (let e = 133; e <= height; e += 266) {
      fill('rgb(255, 196, 232)')
      ellipse(i, e, 50, 50)
    }
  }
  pop()
}
