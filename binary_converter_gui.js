// binary converter gui

var string = '';

function setup() {
  createCanvas(2000,875);
}


function draw() {
  fill(0);
  rect(0,0,700,850);
  textSize(150);
  if (mouseX > 20 && mouseX < 220 && mouseY > 20 && mouseY < 220){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(20,20,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 20 && mouseY < 220){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(240,20,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 20 && mouseY < 220){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(460,20,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 240 && mouseY < 440){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(20,240,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 240 && mouseY < 440){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(240,240,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 240 && mouseY < 440){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(460,240,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 460 && mouseY < 660){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(20,460,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 460 && mouseY < 660){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(240,460,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 460 && mouseY < 660){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(460,460,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 680 && mouseY < 830){
    fill(0,0,200);
  } else {
    fill(125);
  }
  rect(20,680,200,150);
  if (mouseX > 240 && mouseX < 440 && mouseY > 680 && mouseY < 830){
    fill(0,0,200);
  } else {
    fill(0,200,0);
  }
  rect(240,680,200,150);
  if (mouseX > 460 && mouseX < 660 && mouseY > 680 && mouseY < 830){
    fill(0,0,200);
  } else {
    fill(0,200,0);
  }
  rect(460,680,200,150);
  fill(255);
  text('7',75,175);
  text('8',275,175);
  text('9',475,175);
  text('4',75,385);
  text('5',275,385);
  text('6',475,385);
  text('1',75,595);
  text('2',275,595);
  text('3',475,595);
  text('0',75,800);
  textSize(45);
  text('Binary',275,800);
  text('Decimal',475,800);
}

function mousePressed(){
  if (mouseX > 20 && mouseX < 220 && mouseY > 20 && mouseY < 220){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(20,20,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 20 && mouseY < 220){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(240,20,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 20 && mouseY < 220){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(460,20,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 240 && mouseY < 440){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(20,240,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 240 && mouseY < 440){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(240,240,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 240 && mouseY < 440){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(460,240,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 460 && mouseY < 660){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(20,460,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 460 && mouseY < 660){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(240,460,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 460 && mouseY < 660){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(460,460,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 680 && mouseY < 830){
    fill(200,0,0);
  } else {
    fill(125);
  }
  rect(20,680,200,150);
  if (mouseX > 240 && mouseX < 440 && mouseY > 680 && mouseY < 830){
    fill(200,0,0);
  } else {
    fill(0,200,0);
  }
  rect(240,680,200,150);
  if (mouseX > 460 && mouseX < 660 && mouseY > 680 && mouseY < 830){
    fill(200,0,0);
  } else {
    fill(0,200,0);
  }
}
