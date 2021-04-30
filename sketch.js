var bgImg, snowflake;
function preload(){
  bgImg = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(1200,600);

  
   if(frameCount % 60 === 0) {
    snowflake = new Snow(200,20,20,20);
  }

}

function draw() {  
  background(bgImg);
  
  snowflake.display();
  drawSprites();
}