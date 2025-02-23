let numLines = 8;
let lineGap,lineWidth;

function setup() {
  createCanvas(500, 500);
  lineGap = width / numLines;
}

function draw() {
  background(220);
  lineWidth = 1;
  for (let x=0; x<=width;x+=lineGap){
    strokeWeight(lineWidth);
    line(x,0,x,height);
    lineWidth=lineWidth + 10;
    //lineWidth+=10;
  }
}
