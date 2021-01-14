var fixedRect,movingRect;
function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;

}

function draw() {
  background(0);  
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  // if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  //   fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  //   movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  //   fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
  //     movingRect.shapeColor = "red";
  //     fixedRect.shapeColor = "red";

  // }else{
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }


  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
    ){
      movingRect.velocityX=movingRect.velocityX * (-1);
      fixedRect.velocityX=fixedRect.velocityX * (-1);

  }


  drawSprites();
}
