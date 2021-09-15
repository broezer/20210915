function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  var w = width * 2;
  var h = height * 2;
  
  translate(-w/2, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    //stroke('purple');
    //rectMode(CENTER);
    triangle(0 + ((w/w)*i), h = ((w/w)*i), w/2, 0, w, h - ((h/h)*i));
    
    
  }
  
  translate(w/200, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    //stroke('blue');
    //rectMode(CENTER);
    triangle(0 + ((w/w)*i), h = ((w/w)*i), w/2, 0, w, h - ((h/h)*i));
  }
  
  translate(-w/100, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    //stroke('cyan');
    rectMode(CENTER);
    triangle(0 + ((w/w)*i), h = ((w/w)*i), w/2, 0, w, h - ((h/h)*i));
  }
  
  noLoop();
  
  save("20210915.png");
  
}
