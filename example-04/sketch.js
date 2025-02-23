let numLines = 9;
let startX,startY,endX,endY;

function setup() {
  createCanvas(400, 400);
  noLoop();
  background(0);
  stroke(255);
  endX=random(width);
  endY=random(height);
}

function draw() {

  for (let i=1;i<=numLines;i++){
    strokeWeight(i*2);
    startX=endX;
    startY=endY;
    endX=random(width);
    endY=random(height);
    line(startX,startY,endX,endY);
  
  }
}
