let myGrid;

function setup() {
  createCanvas(500, 500);
  noStroke();
  noLoop();
  ellipseMode(CORNER);
  background(220);
  myGrid = width/20;
}

function draw() {
  
  for(let x =0;x < width; x = x + myGrid){
    for(let y=0; y<height; y += myGrid){
      fill(random(255)); 
      circle(x,y,myGrid);

    }


  }
}
