class Snowfall {
    constructor(x, y,width,height) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("images/snow4.jpg");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
}
}