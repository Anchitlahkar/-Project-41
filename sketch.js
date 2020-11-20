const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Constraint = Matter.Constraint;


var rainArray = [];

function preload(){
  humanImg = loadImage("images/rainperson.png")
  lightningImg1 = loadImage("images/lightnning1.png")
  lightningImg2 = loadImage("images/lightnning2.png")
}

function setup() {
  var canvas = createCanvas(500, 700);
  engine = Engine.create();
  world = engine.world;  

  person = new Person(width/2,550,80,100)

  human = createSprite(width/2,600,10,10)
  human.addImage(humanImg)

}

function draw() {
  background(0);
  Engine.update(engine);
  strokeWeight(4);

if(rainArray.length!== 100){
  if (frameCount % 2 === 0) {
    rainArray.push(new Drop(random(0,500), -10,5))
  }
}
  for (var j = 0; j < rainArray.length; j++) {
    rainArray[j].display();
  }

  spawnlighting()
  person.display()

  drawSprites()
}


function spawnlighting(){
  if (frameCount % 50 === 0){

    var x = Math.round(random(0,500));
    var lightning = createSprite(x,100,10,40);

     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: lightning.addImage(lightningImg1);
               break;
       case 2: lightning.addImage(lightningImg2);
               break;
       default: break;
     }

     
     lightning.scale = 1;
     lightning.lifetime = 20;
  }
 }