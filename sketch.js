function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(0);  //背景顏色 
  noFill()//不充滿顏色
  stroke(255)  //線條顏色(255為白色)
  rectMode(CENTER)

  for(var j=0;j<(height/50);j++){ //i++ ==>i=i+1
    for(var i=0;i<(width/50);i++) //i++ ==>i=i+1
  {
    ellipse(25+(i*50),25+(j*50),50+mouseX/10)
    rect(25+(i*50),25+(j*50),50)
    ellipse(50+(i*50),50+(j*50),20)
  }
}
}