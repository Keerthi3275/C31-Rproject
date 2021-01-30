var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  

  
  for (var x = 50; x <=width; x=x+50) 
  {
    plinkos.push(new Plinko(x,75));
  }
  for (var x = 50; x<=width-10; x=x+50) 
  {
    plinkos.push(new Plinko(x,175));
  }
  
}
function draw() {
  background("black");
  Engine.update(engine);
  
}