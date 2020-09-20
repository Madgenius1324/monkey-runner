var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  player = createSprite(100,320,20,50);
  player.addAnimation("monkeyRunning",monkey_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityx = -4;
  ground.x = ground.width/2;
  
bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
background("white")

  stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("score:" + score,100,50);
  
  if(keyDown("space")&& player.y >= 250) {
        player.velocityY = -14;
    }
  
  player.velocityY = player.velocityY + 0.8;
  player.collide(ground);
  
  fruits();
  obstacles();
  
  drawSprites();
  
}


function fruits() {
  
  if(World.frameCount % 80 === 0){
    
 
   fruit = createSprite(400,200,20,20);
    fruit.scale= 0.2;
    fruit.addImage(bananaImage)
    
    fruit.y=Math.round(random(120,200));
    fruit.velocityX = -7;
    fruit.setliftime = 100
    
    bananaGroup.add(fruit);
  }
  
}


function obstacles() {
  
  if(World.frameCount % 300 === 0){
    
 
   obstacle = createSprite(400,200,20,20);
    obstacle.scale= 0.2;
    obstacle.addImage(obstaceImage);
    
    obstacle.y=Math.round(random(120,200));
    obstacle.velocityX = -7;
    obstacle.setliftime = 100;
    
    obstacleGroup.add(obstacle);
  }
  
}

