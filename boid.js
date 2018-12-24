class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5,2.5));
        this.acceleration = createVector();
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    applyForce(force){
        this.acceleration.add(force);
    }

    show() {
        strokeWeight(5);
        stroke(255,random(0,100));
        point(this.position.x, this.position.y);
        strokeWeight(2);
        stroke(255,random(255));
        point(this.position.x, this.position.y);
    }
}