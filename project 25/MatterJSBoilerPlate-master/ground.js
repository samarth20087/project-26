class ground{
    constructor(){
    var options={
    Statics: true 
 }
this.body=Bodies.rectancle(600,590,1200,15,options);;
this.width = 1200;
this.height= 15;
world.add(world,this.body);

}
display(){
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x,pos.y,this.width,this.height);
}
};