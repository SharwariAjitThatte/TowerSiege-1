const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15
var block16,block17,block18,block19,block20,block21;
var polygonImg,polygon;
var sling;

function preload(){
   polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,690,1200,20);
    ground2 = new Ground(500,500,320,10);
    ground3 = new Ground(1000,300,190,10);

    
    
    //level1  
    block1 = new Block(502,480,20,40);    
    block2 = new Block(553,480,20,40);
    block3 = new Block(601,480,20,40);
    block4 = new Block(451,480,20,40);
    block5 = new Block(400,480,20,40);

    //level2
    block6 = new Block(527,430,20,40);
    block10 = new Block(479,430,20,40);
    block11 = new Block(431,430,20,40);
    block12 = new Block(575,430,20,40);

    //level3
    block13 = new Block(456,380,20,40);
    block14 = new Block(504,380,20,40)
    block15 = new Block(552,380,20,40);

    //level4
    block16 = new Block(480,330,20,40);
    block17 = new Block(530,330,20,40);

    //level5
    block18 = new Block(504,280,20,40);

    //level1
    block7 = new Block(1000,280,20,40);
    block8 = new Block(1051,280,20,40);
    block9 = new Block(948,280,20,40);

    //level2
    block19 = new Block(973,230,20,40);
    block20 = new Block(1023,230,20,40);

    //level3
    block21 = new Block(998,180,20,40);

    //polygon = new Polygon(100,550,20,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    sling = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){   
    background(rgb(102,4,4))
    Engine.update(engine);

    textSize(30);
    fill("white");
    text("Drag the Hexagonal Stone and release it, to launch it towards the Block",90,100);
    
    ground1.display();
    ground2.display();
    ground3.display();

    //level1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    //level2
    block6.display();
    block10.display();
    block11.display();
    block12.display();

    //level3
    block13.display();
    block14.display();
    block15.display();

    //level4
    block16.display();
    block17.display();

    //level5
    block18.display();

    //level1
    block7.display();
    block8.display();
    block9.display();

    //level2
    block19.display();
    block20.display();

    //level3
    block21.display();

    //polygon.display();
    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40);

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}
