
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,fruit,rope,humam,stone;
var mango1,mango2,mango3,mango4,mango5;

function preload(){

	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(650,450,140,500)
    ground = new Ground(400,670,800,15)
    human = new Boy(150,600,130,350)
    stone = new Stone(140,550,0.000002,0.000002)
    rope = new Rope(stone.body,{x: 150,y: 300})
    mango1 = new Mango(650,200)
    mango2 = new Mango(635,225)
    mango3 = new Mango(665,180)
    mango4 = new Mango(650,260)
    mango5 = new Mango(660,280)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display();
  ground.display();
  human.display();
  stone.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5)
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

function detectcollision(stone,mango){
  stonebodyposition = stone.body.position
  mangobodyposition = mango.body.position

  var distance = dist(stonebodyposition.x,stonebodypostion.y,mangobodypostion.x,mangobodyposition.y)

  if(distance <= mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false)
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x: 210,y: 400});
    rope.attach(stone.body)
  }
}