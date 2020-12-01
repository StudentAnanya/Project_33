var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var engine,world;
var ground;
var particle;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score=0;
var turn = 5;
var gamestate = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  Engine.update(engine);
 
  textSize(30);
  fill("white");
  text("500",15,530);
  text("500",95,530);
  text("500",175,530);
  text("500",255,530);
  text("100",335,530);
  text("100",415,530);
  text("100",495,530);
  text("200",575,530);
  text("200",655,530);
  text("200",735,530);
  textSize(20)
  text("Score : "+score,20,30);
  text("Chance : "+turn,20,55);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
  
   if(particle!=null){
     particle.display();

       if(particle.body.position.x<300 && particle.body.position.y>760){
         score=score+500;
         particle=null;
         turn--;
            if(turn<=0){
              gamestate="end";
            }
       }
   }

   if(particle!=null){
    particle.display();

      if(particle.body.position.x>301 && particle.body.position.x<600 && particle.body.position.y>760){
        score=score+100;
        particle=null;
        turn--;
           if(turn<=0){
             gamestate="end";
           }
      }
  }
  if(particle!=null){
    particle.display();

      if(particle.body.position.x>601 && particle.body.position.x<900 && particle.body.position.y>760){
        score=score+200;
        particle=null;
        turn--;
           if(turn>=0){
             gamestate="end";
           }
      }
  }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(gamestate==="end"){
    textSize(60);
    fill("yellow");
    text("Game Over!!!",220,245);
   }
}

function mousePressed(){
if(gamestate!="end"){
  particle=new Particle(mouseX,10,10,10);
}
}