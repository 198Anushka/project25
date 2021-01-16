class Paper {
    constructor(x,y){
      var options={
     isStatic:false,
     restitution:0.3,
     friction:0.2,
     density:1.0


      }
     this.body=Bodies.circle(x,y,50);
     this.image = loadImage("sprites/paper.png");
     this.r=50;

     World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(  this.body);
      pop();


    
      
    }
  }
  