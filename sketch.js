
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	//creates the bobs
	bobObject1 = new Bob (300,200,30);
	bobObject2 = new Bob (350,200,30);
	bobObject3 = new Bob (400,200,30);
	bobObject4 = new Bob (450,200,30);
	bobObject5 = new Bob (500,200,30);
	

	//creates the roof
	roofObject = new Roof (400,100,500,20);

	//creates the ropes
	rope1 = new Rope (bobObject1.body,roofObject.body,-120,0);
	rope2 = new Rope (bobObject2.body,roofObject.body,-60,0);
	rope3 = new Rope (bobObject3.body,roofObject.body,0,0);
	rope4 = new Rope (bobObject4.body,roofObject.body,60,0);
	rope5 = new Rope (bobObject5.body,roofObject.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  //displays the bobs
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  console.log(bobObject1.body.position.x);

  //dipslays the roof
  roofObject.display();

  //displays the ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-31,y:31});
	if(bobObject1.body.position.x === 282 && Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-31,y:31})){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:31,y:-31});
	}	
	}
	
		
	
}



