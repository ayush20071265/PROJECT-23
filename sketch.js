var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1;
var line2;
var line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 245, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-1, width,10);
	groundSprite.shapeColor=color("White");

	engine = Engine.create();
	world = engine.world;
	
	line1 = new Line(440,640,20,82);
	line2 = new Line(340,640,20,82);
	line3 = new Line(390,672,120,20);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic : false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic : true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  
  drawSprites();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.setStatic(packageBody,false);
    
  }
}



