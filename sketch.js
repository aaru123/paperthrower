
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,l1,l2,l3,l4,o1
var i1,i2
function preload()
{
  i1 = loadImage("paper.png")
  i2 = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 600);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  var Option = {
    isStatic:true,
      }
  ground = Bodies.rectangle(400,580,800,20,Option)
  l1 = Bodies.rectangle(600,570,200,20,Option)
  l2 = Bodies.rectangle(490,470,20,200,Option)
  l3 = Bodies.rectangle(710,470,20,200,Option)
  l4 = Bodies.rectangle(600,470,10,10,Option)
  o1 = Bodies.circle(100,570,20,{restitution:0.3, density:1.2, friction:0.5, isStatic:false});
  
  World.add(world,ground)
  World.add(world,l1)
  World.add(world,l2)
  World.add(world,l3)
  World.add(world,o1)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  rectMode(CENTER)
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,20)
  fill("white");
  rect(l1.position.x,l1.position.y,200,20)
  rect(l2.position.x,l2.position.y,20,200)
  rect(l3.position.x,l3.position.y,20,200)
  imageMode(CENTER)
  image(i2,l4.position.x,l4.position.y,210,210)
  //fill("green");
  //ellipse (o1.position.x,o1.position.y,20,20)
  image(i1,o1.position.x,o1.position.y,30,30)
   }

function keyPressed(){
  if(keyCode ===UP_ARROW){
    Matter.Body.applyForce(o1,o1.position,{x:65,y:-65})
  }
}

