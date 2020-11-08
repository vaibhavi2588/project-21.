var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1200,400);

  speed = random (50,90); 
  weight = random (1500,400);
  thickness = random (22,83);
  
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,60,height/2);
}

function draw() {
  background(0);  

  if ( wall. x - bullet. x< wall. width /2 + bullet. width/2)
{
  bullet.velocityX=0
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

  if(damage<10){
    bullet.shapeColor = "green"
  }

  if(damage>10){
    bullet.shapeColor = "red"
  }

} 
  drawSprites();
}