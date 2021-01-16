class Dustbin{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.Body = Bodies.rectangle(570, 350, 200,10, options);
        this.image = loadImage("sprites/dustbingreen.png");
        this.bw=200;
        this.bh=10;
        
    
      
    
        World.add(world, this.Body);
        
      }
      display(){
        var angle = this.Body.angle;
        push();
        translate(this.Body.position.x, this.Body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.Body);
        pop();
      
      }
}