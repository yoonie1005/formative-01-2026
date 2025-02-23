let numCircles = 300;

function setup() {
  createCanvas(500, 500);
  noLoop();
  noStroke();
  colorMode(HSB,255);
}

function draw() {
  background(220);
  for (let i=0;i<numCircles;i++){
    fill(random(255),255,255);
    circle(random(width),random(height),random(3,30));

  }
}
