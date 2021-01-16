
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p= new Paper(200,240);
	d= new Dustbin(200,350);
    g= new Ground(400,400,800,50);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  console.log("hi")
  p.display();
  d.display();
  g.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("hello")
		Matter.Body.applyForce(p.body,p.body.position,{x:89,y:-89})

	}
	console.log("44")
}



