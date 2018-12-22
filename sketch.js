const flock = [];


function setup() {
    createCanvas(640,500,P2D);
    for (let i = 0; i < 100; i++) {
    flock.push( new Boid( ) );
        
    }
}

function draw() {
    background(100);

    for ( let boid of flock) {
        boid.update();
        boid.show();
    }

}