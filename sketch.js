//declare all variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2,bottom;

//declare all constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//load images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//create canvas
	createCanvas(800, 700);
	rectMode(CENTER);

	//create package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	//create helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//create ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world,packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world,ground);
	 
	 //create box
	 side1 = createSprite(310,610,20,100,{isStatic:true});
	 side1.shapeColor = "red";
	 World.add(world,side1);

	 bottom = createSprite(400,650,200,20,{isStatic:true});
	 bottom.shapeColor = "red";
	 World.add(world,bottom);

	 side2 = createSprite(490,610,20,100,{isStatic:true});
	 side2.shapeColor = "red";
	 World.add(world,side2)

	console.log(packageSprite);
	//packageSprite.debug = true;
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x = helicopterSprite.x
  packageSprite.collide(bottom);
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}