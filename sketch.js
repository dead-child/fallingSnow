const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var backgroundImg;
var child
var ground

var snowFall
var sni

function preload(){
backgroundImg = loadImage("snow1.jpg");
sni = loadImage("snow5.webp")

}


function setup() {
  var canvas = createCanvas(1200,400)
 
  engine = Engine.create();
  world = engine.world; 

  child = createSprite(200,360,50,50);
  child.shapeColor = "violet" ;
  
  ground = createSprite(600, 400, 1200, 40);

  snowFall = new Snow(200,200,20)

}

function draw() {
  background(backgroundImg);          

  if (frameCount%10 === 0){
    snowFall = createSprite(Math.round(random(0,1000)),Math.random(10),15,15);
    snowFall.addImage(sni);
    snowFall.scale = 0.09
    snowFall.velocityY = 5;


   }
 // snowFall.display(); 
  drawSprites();
}




