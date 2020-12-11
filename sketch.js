const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
//var slingshot; 

function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600, 800, 1200, 20);
    ground2 = new Ground(500, 500, 300, 20);
    ground3 = new Ground(1000, 250, 300, 20);

    block1 = new Block(700,450,70,70);
    block2 = new Block(920,450,70,70);
    block3 = new Block(700,450,70,70);
    block4 = new Block(920,450,70,70);
    block5 = new Block(810,450,70,70);
    block6 = new Block(700,450,70,70);
    block7 = new Block(920,450,70,70);
    block8 = new Block(700,450,70,70);
    block9 = new Block(920,450,70,70);
    block10 = new Block(810,450,70,70);
    block11 = new Block(700,450,70,70);
    block12 = new Block(920,450,70,70);
    block13 = new Block(700,450,70,70);
    block14 = new Block(920,450,70,70);
    block15 = new Block(810,450,70,70);
    block16 = new Block(810,450,70,70);

    //slingshot = new Slingshot(bird.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    //slingshot.display();    
}

//function mouseDragged(){
//    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}

//function mouseReleased(){
//    slingshot.fly();
//}
