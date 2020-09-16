var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "black";
}

function draw() {
  background("orange"); 
  bullet.velocityX = speed;
  textSize(20);
  stroke(0);
  fill(0);
  text("Effectiveness test of wall", 700, 50)
  text("If the wall is green, then the wall is strong.", 150, 350);
  text("If the wall is red, then the wall is weak.", 1000, 350);
  text("Click refresh button for retrying the test.", 600, 350);

  if (hascollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10){
      wall.shapeColor = rgb(255, 0, 0);
    }
    if(damage<10){
      wall.shapeColor = rgb(0, 255, 0);
    }
  }

  drawSprites();
}

function hascollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  return false;
}