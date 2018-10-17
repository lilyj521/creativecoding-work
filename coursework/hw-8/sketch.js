
function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('rgb(209, 168, 255)')

for (let x = 0; x <= width; x += 119) {
  for (let y = 0; y <= height; y += 133) {
  noStroke()
  ellipse(x, y, 75, 75)
    }
  }
push()
  for (let i = 5; i <= width; i += 119) {
    for (let e = 5; e <= height; e += 264) {
      fill('blue')
      ellipse(i, e, 50, 50)
    }
  }
  pop()

  push()
  for (let i = -5; i <= width; i += 119) {
    for (let e = 133; e <= height; e += 266) {
      fill('blue')
      ellipse(i, e, 50, 50)
    }
  }
  pop()
}
