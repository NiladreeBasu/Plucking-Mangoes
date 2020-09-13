class Mango{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.mango = Bodies.circle(x,y,10,options);
        this.image = loadImage("sorites/mango.png");
        World.add(world,this.mango);
    }

    display(){
        var pos = this.mango.position
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,10,10)
    }
}