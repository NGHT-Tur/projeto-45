var home;
var beach;
var forteen;
var home2;
var luffy;

function preload(){
  home=loadImage("casa.png");
  beach=loadImage("cenário.png");
  forteen=loadImage("luffy.webp");
}

function setup() {
  createCanvas(800,400);
  home2=createSprite(600, 250, 50, 50);
 home2.addImage(home);
 home2.scale=0.2;
 luffy=createSprite(100, 350, 50, 50);
 luffy.addImage(forteen);
 luffy.scale=0.2;
}

function draw() {
  background(beach);  
  if(keyDown("d")){
    luffy.x+=5;
  }
  if(keyDown("a")){
    luffy.x-=5;
  }
  drawSprites();
}