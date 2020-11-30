class Paper{

    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,

        } 
        this.r=r;
        

        this.body= Bodies.circle(x,y,r,options)

        World.add(world,this.body)

}   


display(){
    var pos = this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);
    fill("blue")
    
    
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
}

}

