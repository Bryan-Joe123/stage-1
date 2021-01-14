var gameState;

function setup(){
  createCanvas(windowWidth-20,windowHeight-20);

  gameState="menu";
  
  story = new Story();
  menu = new Menu();
}

function draw(){
  menu.display();
  story.display();
}