const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var div1, div2, div3, div4, div5, div6, div7;
var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;
var p11, p12, p13, p14, p15, p16, p17, p18, p19;
var p20, p21, p22, p23, p24, p25, p26, p27, p28, p29;
var p30, p31, p32, p33, p34, p35, p36, p37, p38;

var particles = [];

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 800, 490, 20);
  
  div1 = new Divisions(5, 700, 10, 500);
  div2 = new Divisions(90, 700, 10,500);
  div3 = new Divisions(175, 700, 10, 500);
  div4 = new Divisions(250, 700, 10, 500);
  div5 = new Divisions(325, 700, 10, 500);
  div6 = new Divisions(400, 700, 10, 500);
  div7 = new Divisions(475, 700, 10, 500);

  p1 = new Plinko(40, 100, 20);
  p2 = new Plinko(90, 100, 20);
  p3 = new Plinko(140, 100, 20);
  p4 = new Plinko(190, 100, 20);
  p5 = new Plinko(240, 100, 20);
  p6 = new Plinko(290, 100, 20);
  p7 = new Plinko(340, 100, 20);
  p8 = new Plinko(390, 100, 20);
  p9 = new Plinko(440, 100, 20);
  p10 = new Plinko(540, 100, 20);

  p11 = new Plinko(65, 180, 20);
  p12 = new Plinko(115, 180, 20);
  p13 = new Plinko(165, 180, 20);
  p14 = new Plinko(215, 180, 20);
  p15 = new Plinko(265, 180, 20);
  p16 = new Plinko(315, 180, 20);
  p17 = new Plinko(365, 180, 20);
  p18 = new Plinko(410, 180, 20);
  p19 = new Plinko(465, 180, 20);

  p20 = new Plinko(40, 260, 20);
  p21 = new Plinko(90, 260, 20);
  p22 = new Plinko(140, 260, 20);
  p23 = new Plinko(190, 260, 20);
  p24 = new Plinko(240, 260, 20);
  p25 = new Plinko(290, 260, 20);
  p26 = new Plinko(340, 260, 20);
  p27 = new Plinko(390, 260, 20);
  p28 = new Plinko(440, 260, 20);
  p29 = new Plinko(540, 260, 20);

  p30 = new Plinko(65, 340, 20);
  p31 = new Plinko(115, 340, 20);
  p32 = new Plinko(165, 340, 20);
  p33 = new Plinko(215, 340, 20);
  p34 = new Plinko(265, 340, 20);
  p35 = new Plinko(315, 340, 20);
  p36 = new Plinko(365, 340, 20);
  p37 = new Plinko(410, 340, 20);
  p38 = new Plinko(465, 340, 20);
  
  Engine.run(engine);
}

function draw() {
  background(0); 

  ground.display();
  
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();

  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();

  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();

  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p37.display();
  p38.display();

  if(frameCount%60 == 0){
  	particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var j = 0;j < particles.length; j++){
  	particles[j].display();
  }

  drawSprites();
}