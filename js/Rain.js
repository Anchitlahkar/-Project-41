class Drop {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.4,
            friction: 0.1,
            density: 0.0002
        }
        this.rain = Bodies.circle(x, y, radius, options);
        this.color = "blue"
        this.radius = radius;
        World.add(world, this.rain);
    }
    display() {
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x: random(0,500), y:random(-10,600)})
        }

        var pos = this.rain.position;
        var angle = this.rain.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}