const flock = [];


function setup() {
    createCanvas(640,500,P2D);

}

function draw() {
    background(100,20);
        if(mouseIsPressed){ 
         for (let i = 0; i < 100; i++) {
         flock.push( new Boid( ) );
             
         }
        }
    for ( let boid of flock) {
        boid.update();
        boid.show();
    }

}