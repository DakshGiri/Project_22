var bullet, wall;
var  thickness;
var damage;
var  weight;
var speed;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50, 200, 60, 20);
  speed = random(223,321);
  weight = random(30,52);
 
}

function draw() {
  background("purple"); 
  isTouching(wall,bullet); 
  wall.shapeColor = color(80,80,80);
  if(isTouching(wall,bullet)){
    bullet.velocityX = 0;
  }else{bullet.velocityX = speed;}
  
  drawSprites();
}
function isTouching(object1,object2){
if(object1.x-object2.x<=(object2.width+object1.width)/2&&
object2.x-object1.x<=(object2.width+object1.width)/2)
{
 
 
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage>10){
  object2.shapeColor = color(255,0,0);
  }
  if(damage<10){
  object2.shapeColor = color(0,255,0);
  }
  return true;
}else{return false}
}