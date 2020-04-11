const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine ,world ;
var circle, stand , constrainedstand;

 function setup () {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world  = engine.world;

    circle = new circle(200,200,40,40);
    stand = new stand (10,10,300,PI/2);
    constrainedstand = new constrainedstand(200,200,10,10);
    

    var options = {
      bodyA : circle.body,
      bodyB : constrainedStand.body ,
      stiffness : 1.0 ,
      length : 1.0 
         } 


  var line = Constrait.create(options);
  World.add(world,line);
  
 } 



  function draw() {
      Engine.update(engine);
      circle.display();
      stand.display();
      constrainedstand.display(); 
      strokeweight(3);
     line(cirlce.body.position.x,circle.body.position.y,constrainedstand.body.position.x,constrainedstand.body.position.y); 

    

    
     drawsprites(); 
  } 

 
   

 

  
