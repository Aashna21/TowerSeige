const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var ground, polygon, polyIm, slingshot; 

function preload() {
    polyIm = loadImage("polygon.png");
}

function setup() { 
    createCanvas(600,600); 

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); 

    block1 = new Box(330, 235, 30, 40); 
    block2 = new Box(360, 235, 30, 40); 
    block3 = new Box(390, 235, 30, 40);
    block4 = new Box(420, 235, 30, 40); 
    block5 = new Box(450, 235, 30, 40); 

    block6 = new Box(360, 195, 30, 40); 
    block7 = new Box(390, 195, 30, 40); 
    block8 = new Box(420, 195, 30, 40); 
    block9 = new Box(390, 155, 30, 40); 

    ground = new Ground(390, 265, 200, 20); 

    polygon = Bodies.circle(50, 200, 20); 
    World.add(world, polygon)

    slingshot = new SlingShot(this.polygon, {x: 150, y: 150});
}

function draw() {
    background(84, 181, 255);

    fill(237, 180, 21);
    block1.display()
    block4.display() 

    fill(19, 235, 112); 
    block2.display() 

    fill(32, 69, 48); 
    block3.display()

    fill(12, 64, 207); 
    block5.display() 

    fill(201, 12, 15); 
    block6.display() 
    block8.display() 

    fill(143, 156, 26); 
    block7.display() 

    fill(25, 83, 158); 
    block9.display()

    ground.display()

    imageMode(CENTER)
    image(polyIm, polygon.position.x, polygon.position.y, 40, 40)

    slingshot.display()

}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY})
}

function mouseReleased() {
    slingshot.fly(); 
}