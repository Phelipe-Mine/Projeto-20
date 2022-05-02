
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var piso
var bola, rectangulo, quadrado
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var options = {
		isStatic : true
	}
	piso = Bodies.rectangle (400,680,800,10,options)
	World.add (world,piso)

	var qoptions = {
		restitution : 2,
		friction : 0.6,
		frictionAir : 0
	}
	quadrado = Bodies.rectangle (400,90,50,50,qoptions)
	World.add (world,quadrado)

	var roptions = {
		restitution : 1,
		friction : 0.06,
		frictionAir : 0
	}
	rectangulo = Bodies.rectangle (200,90,70,50,roptions)
	World.add (world,rectangulo)
	
  
	var coptions = {
		restitution : 1.2,
		friction : 0.8,
		frictionAir : 1
	}
	bola = Bodies.circle (500,90,50,coptions)
	World.add (world,bola)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode (DEGREES)
  background("pink");
  fill ("green")
  rect (piso.position.x,piso.position.y,800,10)
  rect (quadrado.position.x,quadrado.position.y,50,50)
  rect (rectangulo.position.x,rectangulo.position.y,70,50)
  ellipse (bola.position.x,bola.position.y,50)
  drawSprites();
 
}



