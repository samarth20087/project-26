
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,  world;
var ground, ball;
var binImg, bin;

function preload()
{
binImg=loadImage("dustbingreen.png")	
}
	function setup() {
	var canvas = createCanavas(1200,600);
	engine = Engine.create();
	world = engine.world;

  	crumpledPaper= new paper();
 	ground=new ground();

    bin = createSprite(964,520,10,120);
	bin.addImage(binImg);
	bin.scale=0.45;

	binPart1 = new dustbin(902,505,10,120);
	binPart2 = new dustbin(902,565,130,10);
	binPart3 = new dustbin(1024,505,10,120);

	}
	function draw() {	
	background(0);
	Engine.update(engine)
	
	//text(mouseX+","+mouseY,200,200);

   ground.display();
   crumpledPaper.display();
   binPart1.display();
   binPart2.display();
   binPart3.display();

	drawSprites();
 }
 function keyPressed(){
	 if(keyCode === UP_ARROW){
	Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:15,y:-15})
 }
 }
