var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 350, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "yellow";
}

function draw() {
  background("green")
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2){
    
    movingRect.shapeColor = " blue";
    fixedRect.shapeColor = " purple";
    }
    
    else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "red";
    }
    

  drawSprites();
}