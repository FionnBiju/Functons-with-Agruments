var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,500, 50, 50)
  gameObject1.shapeColor = "Blue"
  gameObject1.velocityX = 2
  gameObject2 = createSprite(800,500, 50, 50)
  gameObject2.shapeColor = "Blue"
  gameObject2.velocityX = -2
  gameObject3 = createSprite(500,200, 50, 50)
  gameObject3.shapeColor = "Blue"

  gameObject4 = createSprite(600,200, 50, 50)
  gameObject4.shapeColor = "Blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect ,gameObject1,)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "Blue";
  }


  bounceOff(gameObject1, gameObject2)

    
 
  drawSprites();
}

