var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(500,200,40,40);
  obj1.shapeColor = "blue";
  obj2 = createSprite(800,200,40,40);
  obj2.shapeColor = "blue";
  obj1.velocityX = 2;
  obj2.velocityX = -2;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
BounceOff(fixedRect,movingRect);
  BounceOff(obj1,obj2);

  drawSprites();
}


