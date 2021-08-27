// binary converter gui

var string = '';
var lines = 0;

function setup() {
  createCanvas(2000,875);
}


function draw() {
  clear();
  fill(0);
  rect(0,0,700,850);
  textSize(150);
  text(string,1100,750 - lines);
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
  if (mouseX > 240 && mouseX < 440 && mouseY > 680 && mouseY < 750){
    fill(0,0,200);
  } else {
    fill(200,0,0);
  }
  rect(240,680,200,70);
  if (mouseX > 240 && mouseX < 440 && mouseY > 760 && mouseY < 830){
    fill(0,0,200);
  } else {
    fill(200,0,0);
  }
  rect(240,760,200,70);
  if (mouseX > 460 && mouseX < 660 && mouseY > 680 && mouseY < 750){
    fill(0,0,200);
  } else {
    fill(0,200,0);
  }
  rect(460,680,200,70);
  if (mouseX > 460 && mouseX < 660 && mouseY > 760 && mouseY < 830){
    fill(0,0,200);
  } else {
    fill(0,200,0);
  }
  rect(460,760,200,70);
  fill(255);
  textSize(150);
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
  text('Delete',275,740);
  text('Reset',275,810);
  text('Binary',475,740);
  text('Decimal',475,810);
}

function mousePressed(){
  if (mouseX > 20 && mouseX < 220 && mouseY > 20 && mouseY < 220){
    string = string + '7';
  }
  rect(20,20,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 20 && mouseY < 220){
    string = string + '8';
  }
  rect(240,20,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 20 && mouseY < 220){
    string = string + '9';
  }
  rect(460,20,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 240 && mouseY < 440){
    string = string + '4';
  }
  rect(20,240,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 240 && mouseY < 440){
    string = string + '5';
  }
  rect(240,240,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 240 && mouseY < 440){
    string = string + '6';
  }
  rect(460,240,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 460 && mouseY < 660){
    string = string + '1';
  }
  rect(20,460,200,200);
  if (mouseX > 240 && mouseX < 440 && mouseY > 460 && mouseY < 660){
    string = string + '2';
  }
  rect(240,460,200,200);
  if (mouseX > 460 && mouseX < 660 && mouseY > 460 && mouseY < 660){
    string = string + '3';
  }
  rect(460,460,200,200);
  if (mouseX > 20 && mouseX < 220 && mouseY > 680 && mouseY < 830){
    string = string + '0';
  }
  rect(20,680,200,150);
  if (mouseX > 240 && mouseX < 440 && mouseY > 680 && mouseY < 750){
    string = string.slice(0, -1);
  }
  rect(240,680,200,70);
  if (mouseX > 240 && mouseX < 440 && mouseY > 760 && mouseY < 830){
    string = '';
    lines = 0;
  }
  rect(240,760,200,70);
  if (mouseX > 460 && mouseX < 660 && mouseY > 680 && mouseY < 750){
    let num = string;
    text(getbinary(num),1000,500);
  }
  rect(460,680,200,70);
  if (mouseX > 460 && mouseX < 660 && mouseY > 760 && mouseY < 830){
    let num = string;
    text(getdecimal(num),1000,500);
  }
}

function getbinary(num){
  var index = -1;
  var bit = 1;
  var binary = '';
  num = parseInt(num);
  sum = 0;
  binsum = num;
  
  while (bit <= num){
      bit = bit*2;
  }
  bit = parseInt(bit/2);
  
  while (bit >= 1){
    binsum = binsum - bit;
    binary = binary + '1';
    
    print(bit);
    
    while (bit > binsum){
      bit = bit/2;
      
      if (bit <= binsum || bit < 1){
        break;
      }else{
        binary = binary + '0';
    }
  }
}
  print(binary);
  string = string + '\n' + binary + '\n';
  lines = lines + 150;
  return binary;
}

function getdecimal(num){
  var index = 0;
  var bit = 1;
  var decimal = 1;
  var element = '';

  num = num;
  let x = 0;
 
  while (x <= 100){
      try{
        element = num.slice(index-1,index);
        if (element == '1'){
          decimal = decimal + bit;
        }
        
        bit = bit * 2;
        index = index - 1;
        x = x + 1;
        
      } catch(error){
        break;
      }
    }
  if (num % 2 == 0){
    decimal = decimal - 1;
  }
  string = string + '\n' + decimal + '\n';
  lines = lines + 150;
  return decimal;
}
