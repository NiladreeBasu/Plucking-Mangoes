class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.stone = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sorites/stone.png");          
        World.add(world,this.stone);
    }

    display(){
        var pos = this.stone.position;        
        ellipseMode(RADIUS)
        image(this.image,pos.x,pos.y,this.radius);
    }
}