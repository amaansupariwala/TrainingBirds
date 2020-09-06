var lifespan = 405;
var count = 0;
var target;
var generation = 1;
var madeIt = 0;

rx = 250;
ry = 150;
rw = 200;
rh = 10;



var maxForce = 0.2


function setup() {
  
  createCanvas(700, 600);
  flock = new Flock();
    
  generationShown = createP();  
  lifespanShown = createP();
  countShown = createP();
  madeItShown = createP();  

  
  
  target = createVector(width/2, 50);
  generationShown.html("Generation: " + generation);
}




function draw() {
  background(255);
  
  fill("green");
  ellipse(target.x, target.y, 25, 25);
    
  if (count == lifespan) {
    
    flock.evaluate();
    flock.naturalSelection();
    count = 0;   
    generation++;
    generationShown.html("Generation: " + generation);
  }
  
  createObstacle();
  
  
  flock.run();  
  countShown.html("Age of Birds: " + count + " frames");
  lifespanShown.html("Lifespan of Birds: " + lifespan + " frames");
  //madeItShown.html("Amount of Birds That Reached: " + madeIt + " Birds");

  count++;
  
}

createObstacle = function(){
  
  fill("red");
  rect(rx, ry, rw, rh);
  
}
