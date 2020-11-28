var fixedRect, movingRect,spriet1,sprite2,sprite3,sprite4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);  //25
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30); //40
  movingRect.shapeColor = "green";

  sprite2=createSprite(400,200,50,90);
  sprite3=createSprite(600,700,100,40);
  sprite4=createSprite(1000,500,40,50);
  sprite1=createSprite(700,400,60,60);
  sprite4.shapeColor="pink";
  sprite1.shapeColor="yellow";
  sprite2.shapeColor="cyan";
  sprite3.shapeColor="magenta";
  
}

function draw() {
  background(0);  

  movingRect.x= mouseX;
  movingRect.y=mouseY;

  movingRect.depth=movingRect.depth+1
 
  if(isTouching(movingRect,sprite2)){

    movingRect.shapeColor="red";
    sprite2.shapeColor="red";

  }
  else{
    sprite2.shapeColor = "cyan";
    movingRect.shapeColor="green";

  }
 

  
  drawSprites();
}


