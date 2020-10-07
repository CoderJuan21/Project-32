const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1;
var polygon;
var slingshot, backgroundImg;
var score = 0;
var bg = "light.jpg";

function preload(){
  changeBakcgroundImg();
}


function setup() {
  var canvas = createCanvas(900,400);
   engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(450,390,900,20);
  ground2 = new Ground(670,200,200,20);
 // ground2 = new Ground(350,300,200,20);

  //block1 = new Box(300,275,30,40);
 //block2 = new Box(330,275,30,40);
 block3 = new Box(600,160,30,30);
 block4 = new Box(630,160,30,30);
 block5 = new Box(660,160,30,30);
 block6 = new Box(690,160,30,30);
 block7 = new Box(720,160,30,30);
 block8 = new Box(620,140,30,30);
 block9 = new Box(650,140,30,30);
 block10 = new Box(680,140,30,30);
 block11 = new Box(710,140,30,30);
 block12 = new Box(640,120,30,30);
 block13 = new Box(670,120,30,30);
 block14 = new Box(700,120,30,30);
 block15 = new Box(650,100,30,30);
 block16 = new Box(680,100,30,30);
 block17 = new Box(670,80,30,30);

 /*block7 = new Box(480,235,30,40);
 block8 = new Box(330,235,30,40);
 block9 = new Box(360,235,30,40);
 block10 = new Box(390,235,30,40);
 block11 = new Box(420,235,30,40);
 block12 = new Box(450,235,40,40);*/

 polygon = new Polygon(400,600,50,50);

 //polygon=createSprite(600,200,20,100);
 //polygon = Bodies.rectangle(300,600,20,100, {isStatic:true} );
	// World.add(world, block1);

   slingshot = new SlingShot(polygon.body,{x:300, y:150});
 
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  Engine.update(engine);

  text("SCORE : "+ score, 750, 40);
  ground.display();
  ground2.display();

  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();


  
  //strokeWeight(3);
  //stroke(15);
 fill("blue");
 // block1.display();
 // block2.display();
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
  block17.display();
 /* block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();*/

  slingshot.display();

  polygon.display();

  

  
drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}
async function changeBakcgroundImg(){
 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  //console.log(responseJSON.datetime);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  
  if(hour >= 6 && hour<= 16){
     bg = ("dark.jpg");
  }
  else {
     bg = ("light.jpg");
  }
 backgroundImg = loadImage(bg);
 
  }