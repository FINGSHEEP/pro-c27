class Circle{ 
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }

    display() {
        var ball = Bodies.circle(200,200,40);

        //push();
        translate(this.body.position.x, this.body.position.y);
        rotate(ball);
        ellipseMode(CENTER);
        ellipse(200,200,40,40);
        //pop();
    }
}