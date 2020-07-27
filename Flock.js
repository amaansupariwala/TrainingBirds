function Flock(){
  this.birds = [];
  this.flocksize = 80;
  this.matingPool = [];
  
  
  for(var i = 0; i < this.flocksize; i++){
    this.birds[i] = new Bird();
  }
  
  
  
  this.run = function(){
    
    for(var i = 0; i < this.flocksize; i++){
      this.birds[i].update();
      this.birds[i].show();
    }
    
  }
  
  this.evaluate = function(){
    
    var maxFit = -1;
    for(var i = 0; i < this.flocksize; i++){
      this.birds[i].calcFitness();
      if (this.birds[i].fitness > maxFit){
        maxFit = this.birds[i].fitness
      }
      
    }
    
    for(var i = 0; i < this.flocksize; i++){
      this.birds[i].fitness /= maxFit;
      
    }
    
    this.matingPool = [];
    
    for(var i = 0; i < this.flocksize; i++){
      
      var newFit = this.birds[i].fitness * 100;
      for (var j = 0; j < newFit; j++){
        this.matingPool.push(this.birds[i]);
      }
      
    }
    
  }  
    
  this.naturalSelection = function(){
    
    var newBirds = [];
    for (var i = 0; i < this.birds.length; i++){
      var parentA = random(this.matingPool).dna;
      var parentB = random(this.matingPool).dna;
      var childDNA = parentA.combineDNA(parentB);
      //childDNA.mutation();
      newBirds[i] = new Bird(childDNA)
    }
    this.birds = newBirds;
  }
  
 } 
