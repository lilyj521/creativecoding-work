let circle;
let circleAmount = 6;

function setup() {
    createCanvas(windowWidth, windowHeight);
for(let i = 0; i < circleAmount; i++){
  circle = new Circle(60, 60, 80, ('rgb(136, 204, 247)'))
    }
  }

function draw() {
    background('rgb(242, 213, 237)');
frameRate(100);
circle.show();
circle.move();
circle.bounce();
}

class Circle {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.rad = this.size / 2;
        this.x = x;
        this.y = y;
        this.movX = random(-2, 2);
        this.movY = random(-2, 2);
    }
    show() {
      push();
      noStroke();
      fill(this.color);
      translate(this.x, this.y);
      ellipse(60,60,this.size);
      pop();
    }

    move() {
      this.x += this.movX;
      this.y += this.movY;
    }
   bounce() {
     if(this.x + this.rad >= height || this.x - this.rad <= 0){
       this.movX *= -1;
     }
     if(this.y + this.rad >= height || this.y -this.rad <= 0) {
       this.movY *= -1;
     }
   }
}
