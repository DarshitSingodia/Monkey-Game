var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
  ground=createSprite(300,290,800,10);
  ground.velocityX=-4;
  
  monkey=createSprite(60,260,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();

  
}


function draw() {
  background("cyan");

  if (ground.x<400){
    
    ground.x=ground.width/2;
    
  }
  
  monkey.collide(ground);
  
  if (keyDown("space") && monkey.y>=250){
    
    monkey.velocityY=-14;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  spawnFood();
  spawnObstacles();
  
drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.round(frameCount/frameRate());
  text("SURVIVAL TIME:"+score,200,50);
  
}

function spawnFood(){
  
  if (frameCount%80==0){
    
 banana=createSprite(600,Math.round(random(100,200)),20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=100;
    
    FoodGroup.add(banana);
    
  }
}

function spawnObstacles(){
  
  if (frameCount%300==0){
    
    obstacle=createSprite(700,265,0,0);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.14;
    obstacle.velocityX=-5
    
  }
  
}



