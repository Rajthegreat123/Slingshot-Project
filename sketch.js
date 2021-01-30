const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var ground;

var stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var bird;

var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	stand1 = new Ground(600, 500, 400, 15);
	stand2 = new Ground(900, 250, 250, 15);

	block1 = new Block(470, 495, 40, 50);
	block2 = new Block(515, 495, 40, 50);
	block3 = new Block(560, 495, 40, 50);
	block4 = new Block(605, 495, 40, 50);
	block5 = new Block(650, 495, 40, 50);
	block6 = new Block(695, 495, 40, 50);
	block7 = new Block(740, 495, 40, 50);

	block8 = new Block(515, 445, 40, 50);
	block9 = new Block(560, 445, 40, 50);
	block10 = new Block(605, 445, 40, 50);
	block11 = new Block(650, 445, 40, 50);
	block12 = new Block(695, 445, 40, 50);

	block13 = new Block(560, 395, 40, 50);
	block14 = new Block(605, 395, 40, 50);
	block15 = new Block(650, 395, 40, 50);

	block16 = new Block(605, 345, 40, 50);

	bird = new Bird(200,50);

	slingshot = new SlingShot(bird.body,{x:100, y:200});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	Engine.update(engine);
	background(0);
  
	ground.display();

	stand1.display();
	stand2.display();  

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();

	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();

	block13.display();
	block14.display();
	block15.display();

	block16.display();

	bird.display();
	
	slingshot.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


