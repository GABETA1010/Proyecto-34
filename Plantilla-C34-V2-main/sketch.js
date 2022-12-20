
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterImg;
var foodboxImg;
var inundacion;
var floor;

function preload(){
  inundacion = loadImage("assets/inundacion.jpg")
  helicopterImg = loadImage("assets/helicoptero-de-rescate.png")
  foodboxImg = loadImage("assets/caja_de_viveres.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  floor = new Floor(500,1000,700,50);
  
  
}


function draw() 
{
  background(51);
  image(inundacion,0,0,windowWidth,windowHeight);

  floor.display();

  Engine.update(engine);

  
  
}

