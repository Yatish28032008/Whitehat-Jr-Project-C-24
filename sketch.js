// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground1,tanker1,ball1,ball2,ball3,shooter;
var canonBall;
var launcherX, launcherY;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(
        innerWidth,
        innerHeight
    )
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(width / 2, height - 10, width, 30);
   tanker1 = new Tanker(65, height - 80, 70,30);
    ball1 = new Ball(400,200,50);
    ball2 = new Ball(500,200,50);
    ball3 = new Ball(600,200,50);
    canonBall = new CanonBall(20, 20);
    shooter = new ShootBall(canonBall.body, { x: 70, y: height - 220 });
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0,89,89);
Matter.Engine.update(engine);
ground1.display();
ball1.display();
ball2.display();
ball3.display();
tanker1.display();
shooter.display();
canonBall.display();
if (keyIsDown(32)) {
    shooter.attach(canonBall.body)
}
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode === (32)) {
        shooter.shoot();
    }
}