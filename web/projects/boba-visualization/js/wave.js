
// wave graphic

var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(windowWidth, windowHeight)
  .parent('wave-holder');
}

function draw() {
  background(248,206,155);
  noStroke();

  fill(246,219,186);
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 15) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, 100,500);

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.02;
  }
  // increment y dimension for noise
  yoff += 0.007;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}