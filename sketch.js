const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg;
var hour;
var snowfall;

function preload() {
  // create getBackgroundImg( ) here
  getBackgroundImage();
}



function setup() {
  var canvas = createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  if (backgroundImg) {
    background(backgroundImg);
  }

  Engine.update(engine);
  
}


function keyPressed() {
  if (keyCode === 32) {
      Snowfall.trajectory=[];
      Matter.Body.setPosition(snowfall.body,{x:200,y:50});
                
  }
}

async function getBackgroundImage() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11, 13);
  console.log(hour);
  if (hour >= 06 && hour <= 17) {
    bg = "snow3.jpg";

  }
  else {
    bg = "snow2.jpg";
  }
  backgroundImg = loadImage(bg);
}