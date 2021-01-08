var car;
var wall;
var deformation;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(12,19);
  weight = random(400,1500);
  car = createSprite(10,200,30,30);
  car.velocityX = speed;
  wall = createSprite(1200,200,60,200);  
}

function draw() {
  background("black");  
  if(wall.x-car.x<car.width+wall.width/2)
  {
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22509;
    if (deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }
    if (deformation<180 && deformation>100)
    {
      car.shapeColor = color(230,230,0);
    }
    if (deformation<100)
    {
      car.shapeColor = color(0,225,0);
    }
  }
  drawSprites();
}