var player, player_running,player_jump;
var ground,enemy
function preload(){
player_running = loadAnimation("images/Run_000.png","images/Run_001.png","images/Run_002.png","images/Run_003.png","images/Run_004.png","images/Run_005.png","images/Run_006.png","images/Run_007.png","images/Run_008.png","images/Run_009.png")
 backgroundImage = loadImage("images/background.jpg") 
 player_jump = loadAnimation("images/Jump_000.png","images/Jump_001.png","images/Jump_002.png","images/Jump_003.png","images/Jump_004.png")
idle_player=loadAnimation("images/Jump_000.png")
bulletImage=loadImage("images/Bullet-2.png")
}



function setup() {
 createCanvas(1000, 800); 
 
 background1= createSprite(500,350,width,height);
 background1.addImage(backgroundImage)
 background1.scale=0.22
 
 player = createSprite(100,645,20,50);
 player.addAnimation("Stay",idle_player);
 player.addAnimation("Running",player_running);
 player.addAnimation("jumping",player_jump);
 player.scale = 0.25; 

  ground=createSprite(500,710,width,10)
 ground.visible=false;
}


function draw() {
background("black")
  //enemy()
 if(keyWentDown("RIGHT_ARROW")){
  
  player.changeAnimation("Running")
 }
 if(keyDown("RIGHT_ARROW"))
 background1.x-=3
 if(keyWentUp("RIGHT_ARROW")){
  player.changeAnimation("Stay")
 }
 if(background1.x<250){
     background1.x=400
 }
 if(keyWentDown("UP_ARROW")){
     player.velocityY=-12;
     player.changeAnimation("jumping")
 }
 if(keyWentUp("UP_ARROW")){
    player.changeAnimation("Stay")
 }
player.velocityY+=0.5
 player.collide(ground)
  if(keyDown("space")){
    shootBullet()
  }
drawSprites();
}
function shootBullet(){
    
      bullet=createSprite(player.x,player.y,50,50)
      bullet.addImage(bulletImage)
      bullet.velocityX=3
      bullet.scale=0.1
     // bullet.setLifetime=300
      
  }