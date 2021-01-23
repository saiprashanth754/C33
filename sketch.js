const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var score = 0;
var bg = "sprites/bg.png";

function preload() {
   getbackgroundImg();
    
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    //Boxes
    box1 = new Box(500,340,70,70);
    box2 = new Box(700,340,70,70);
    box3 = new Box(500,260,70,70);
    box4 = new Box(700,260,70,70);
    box5 = new Box(600,120,70,70);
    //logs
    log1 = new Log(600,120,300,PI/2);
    log2 = new Log(600,280,300,PI/2);
    log3 = new Log(580,100,150,PI/7);
    log4 = new Log(670,100,150,PI/-7);
    //Pigs
    pig1 = new Pig(600,340);
    pig2 = new Pig(600,260);
    //Birds
    bird = new Bird(200,50);
    //Ground
    ground = new Ground(600,390,1200,50);

    platform = new Ground(150,290,300,145);

    slingshot = new Slingshot(bird.body,{x:200,y:50})
   
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    
   
    textSize(20);
    fill("red")
    stroke(0);
    text("Score:"+score,1000,25);
    pig1.Score();
    pig2.Score();
   

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();
    
    bird.display();

    ground.display();

    slingshot.display();  

    platform.display();

    
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}


function mouseReleased() {
    slingshot.fly()
}

function keyPressed() {
    if (keyCode === 32  && bird.body.speed < 1) {
        bird.positions = [];
        Matter.Body.setPosition(bird.body, {x: 200, y: 50})
        slingshot.attach(bird.body)
    }
}

async function getbackgroundImg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responeJson = await response.json();
    var dateTime = responeJson.datetime
    var hour = dateTime.slice(11,13);

    if (hour>=06 && hour <= 18) {
        bg = "sprites/bg.png"
    }else {
        bg = "sprites.bg2.png"
    }
    backgroundImg = loadImage(bg);
}