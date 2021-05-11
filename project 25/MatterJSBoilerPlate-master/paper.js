class paper{
    constructor(){
    var options= {
    restitution:0.,
    friction:0,
    density:1.2
    }
    
    this.body=Bodies.circle(250,540,20,options);
    this.width =33;
    this.image=loadImage("paper.png");
    world.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);
    fill("white")
    }
}