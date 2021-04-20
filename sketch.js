const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var ground, ground2, ground3;
var stand
var block, block2, block3, block4, block5, block6
var block7, block8, block9, block10, block11, block12
var block13, block14, block15
var hexagon
var slingshot
function setup(){
    var canvas = createCanvas(1200, 400)

    engine = Engine.create();

    world = engine.world;

    ground = new Ground(600, 275, 225, 10)
    //green blocks
    block = new Block(600, 250, 25, 40)
    block2 = new Block(635, 250, 25, 40)
    block3 = new Block(670, 250, 25, 40)
    block4 = new Block(565, 250, 25, 40)
    block5 = new Block(530, 250, 25, 40)
    block10 = new Block(600, 180, 25, 40)
    block11 = new Block(635, 180, 25, 40)
    block12 = new Block(568, 180, 25, 40)
    block15 = new Block(590, 115, 25, 40)
    //red blocks
    block6 = new Block(585, 215, 25, 40)
    block7 = new Block(550, 215, 25, 40)
    block8 = new Block(620, 215, 25, 40)
    block9 = new Block(655, 215, 25, 40)
    block13 = new Block(575, 150, 25, 40)
    block14 = new Block(610, 150, 25, 40)
    

    
    ground2 = new Ground(850, 200, 150, 10)
    ground3 = new Ground(600, 390, 1200, 10)
    ground4 = new Ground(1175, 200, 10, 1200)
    
    hexagon = new Hex(300, 315, 50, 50)
    slingshot = new SlingShot(hexagon.body,{x: 200,y:175})
    //stand = new BaseClass(200, 100, 10, 50, PI/2)
}

function draw(){
    background("green")
    Engine.update(engine);
    //stand.display()
    ground.display()
    ground2.display()
    ground3.display()
    ground4.display()
    fill("beige");
    block.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block10.display()
    block11.display()
    block12.display()
    fill("pink");
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block13.display()
  block14.display()
  fill("red")
  block15.display()
    hexagon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }
