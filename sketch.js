var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var particle
var score =0;
var turn = 5
var gameState = "play"
function setup() {
  createCanvas(800, 700);
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
  textSize(20)
  
 text("Score : "+score,20,30);
 for(var v = 15;v<400;v = v+85){
 text("500",v,450)
 }
 for(var d = 400;d<800;d = d+88){
  text("100",d,450)
  }
  
  Engine.update(engine);
 ground.display()
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   
     
   }
   
   if(turn === 0){
     gameState = "end"
     textSize(30)
     fill("yellow")
     text("GAME OVER",300,200)
     text("YOU CURRENT SCORE IS "+score,200,250)
   }
   // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
 }
 text("chances = "+turn,450,30)
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   scores()
}
function mousePressed(){
 if(gameState === "play"){
  
    turn = turn-1
    particles.push(particle = new Particle(mouseX, 10,10));

     
  }
  }
  function scores(){
    
 if(particle!==null){
  // particlee.display()
   if(particle.body.position.x<400){
     score = score+500
     particle = null
   }
   if(particle.body.position.x>400){
     score= score+100
     particle = null
   }
 }
  
  }