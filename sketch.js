let logo;
let logoWidth, logoHeight;
let counter = 999;
let updateInterval = 0;
let state = "show999";
let aNumber = 18

function preload(){
  logo= loadImage('logo.jpg');
}

function setup() {
  createCanvas(400, 400);

  let newWidth = 150;
  let ratio = logo.width/ logo.height;
  let newHeight = newWidth/ ratio;

  logoWidth = newWidth;
  logoHeight = newHeight;

  updateInterval = floor(random(60,360));

}

function draw() {
  background(243);

  fill(255)
  rect(116,115,logoWidth + aNumber ,logoHeight +aNumber ,20);

  let x = (width - logoWidth) /2 ;
  let y = (height - logoWidth) /2;

  image(logo, x, y,logoWidth, logoHeight);

  noStroke();
  fill(235, 1, 40);
  let circleX = x + logoWidth; 
  let circleY = y;
  circle(circleX, circleY, 42); 

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(counter, circleX, circleY);

  fill(0);
  textSize(16); 
  textAlign(CENTER, TOP); 
  let rectX = (width - (logoWidth + aNumber)) / 2; 
  let rectY = (height - logoWidth) / 2; 
  text("Gmail", width / 2, rectY + logoHeight + 20); 

  if (state === "show999") {

    if (frameCount % updateInterval === 0) {
      state = "decrement";
      updateInterval = floor(random(10, 180)); 
    }
  } else if (state === "decrement") {

    if (frameCount % updateInterval === 0) {
      counter -= floor(random(20, 71)); 
      if (counter <= 1) {
        counter = 1; 
        state = "show1"; 
        show1StartTime = frameCount; 
      }
      updateInterval = floor(random(60, 360)); 
    }
  } else if (state === "show1") {
   
    if (frameCount - show1StartTime >= 180) { 
      counter = 999;
      state = "show999";
      updateInterval = floor(random(10, 180)); 
    }
  }
}