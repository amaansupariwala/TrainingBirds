
function Bird(dna){
  
  this.pos = createVector(width/2, height - 20);
  this.vel = createVector();
  this.acc = createVector();
  this.fitness = 0;
  this.timefitness = 0;
  this.completed = false;
  this.crashed = false;
  
  if (dna){
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }

  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  
  this.update = function(){
    
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if (d < 10){
      this.completed = true;
      //if (!this.timefitness) {
      //  this.timeFitness = map(count, 0, lifespan, 50, 1);
      //}
      this.pos = target.copy();
    }
    if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh){
      this.crashed = true;
    }

    if (this.pos.x > width || this.pos.x < 0){
      this.crashed = true;
    }
    if (this.pos.y > height || this.pos.y < 0){
      this.crashed = true;
    }
    
    
    this.applyForce(this.dna.genes[count]);

    
    if (!this.completed && !this.crashed){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }
  
  this.show = function(){
    
    
    push();
    noStroke();
    fill(255, 200); 
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0,0,25,5);
    pop();
  }
  
  this.calcFitness = function(){
    
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0);
    
    if (this.completed){
      this.fitness *= 45;
      
    }
    if (this.crashed){
      this.fitness /= 10;
    }
    
    
    
    
  }



}