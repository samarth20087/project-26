
class dustbin{
    constructor(x,y,width,height){
    var options={
    isStatic:true }
    this.bodie=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height = height;
    world.add(world,this.body);
};
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255,255,0.5);
    rect(pos.x,pos.y,this.width,this.height);
    }
};
