let flock = [];


function setup() {
    createCanvas(640,500,P2D);

}
let wind;
const Wind = function(){
    wind = createVector(random(0.2,0.5), random(-2, -0.5));
}
function draw() {
    background(100,100);
    for (let i = 0; i < 100; i++) {
        if(i > 100){
            flock.length = 100;
        }
        if(mouseIsPressed){ 
            flock.push( new Boid( ) );
        }
    }
    for (let boid of flock) {
        boid.update();
        boid.show();
        if(key == 'w' && keyIsPressed){
            // boid.applyForce(wind);
            
            Wind();
            boid.applyForce(wind);
        }
    }

}