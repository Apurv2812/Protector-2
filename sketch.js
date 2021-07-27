var fourArms,fourArmsImg;
var aggregor,aggregorImg;
var cannonbolt,cannonboltImg;
var drAnimo,drAnimoImg;
var omnimatrix,omnimatrixImg;
var swampfire,swampfireImg;
var vilgax,vilgaxImg;
var bg,bgImg;

function preload(){

  fourArmsImg = loadImage("Images/four arms.png");
  aggregorImg = loadImage("Images/aggregor.png");
  cannonboltImg = loadImage("Images/cannonbolt.png");
  drAnimoImg = loadImage("Images/dr.animo.png");
  omnimatrixImg = loadImage("Images/omnimatrix.png");
  swampfireImg = loadImage("Images/swampfire.png");
  vilgaxImg = loadImage("Images/vilgax.png");
  bgImg = loadImage("Images/background.png");
}

function setup(){
  createCanvas(1500,900);

  fourArms = createSprite(100,800,10,10);
  fourArms.addImage("fourArms",fourArmsImg);
  fourArms.scale = 0.5

}

function draw(){
  background(bgImg);

  if(keyDown("LEFT_ARROW")){
    fourArms.x-=5
  }
  else(
    fourArms.x+=0,
    fourArms.x-=0
  )
   if(keyDown("RIGHT_ARROW")){
    fourArms.x+=5;
  }

  SpawnOmnimatrix();
drawSprites();
}

function SpawnOmnimatrix(){

if(frameCount%100 === 0){
  omnimatrix = createSprite(1500,random(400,800),10,10)
  omnimatrix.addImage("omnimatrix",omnimatrixImg);
  omnimatrix.velocityX = -3;
  omnimatrix.scale = 0.5;

}
}