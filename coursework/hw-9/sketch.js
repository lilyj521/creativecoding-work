//create array
let nums = [30,55,100,200,400];

function setup() {
createCanvas(1000,700);
}

function draw() {

//make background
background( 'rgb(199, 245, 255)' );

//add monsters
createMonster(nums[0],nums[0],nums[0],nums[0]);
createMonster(nums[1],nums[1],nums[1],nums[1]);
createMonster(nums[2],nums[2],nums[2],nums[2]);
createMonster(nums[3],nums[3],nums[3],nums[3]);
createMonster(nums[4],nums[4],nums[4],nums[4]);
}

function createMonster(x,y,w,h) {
//body and head
  fill('rgb(253, 255, 156)');
  stroke('rgb(253, 255, 156)');
  strokeWeight();
  ellipse(x * 1.25,y * 1.5, w * 1.25,h * 1.75)
  ellipse(x * 1.25,y * .75,w,h);

//eyes
  fill('rgb(241, 159, 141)');
  stroke('rgb(241, 159, 141)');
  strokeWeight();
  ellipse(x, y * .625, w * .225, h * .225);
  ellipse(x * 1.5, y * .625, w * .225, h * .225);

//mouth
  fill('rgb(255, 181, 221)');
  stroke('rgb(255, 181, 221)');
  strokeWeight();
  arc( x * 1.25, y * .8, w/2, h/2, 0, PI );

//tooth
  fill('white');
  stroke('white');
  strokeWeight();
  triangle(x * 1.15, y * .875, x * 1.2, y * .8, x * 1.1, y * .8);

//pupils
  fill('black');
  stroke('black');
  strokeWeight(h * .125)
  point(x, y * .625);
  point(x * 1.5, y * .625);

//eye shine
  fill('white');
  stroke('white');
  strokeWeight();
  ellipse(x * 1.025,y * .6,w * .075,h * .075);
  ellipse(x * 1.525, y * .6, w * .075, h * .075);
}
