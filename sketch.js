
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(500,390);

	crumpleBall= new Paper(300,400,50);
	
	Engine.run(engine);

}


function draw() {
  background("black");

crumpleBall.display();
ground.display();

keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	

}
