
var timer = 10;

setInterval(function() {
  timer = timer - 1;
  if (timer >= 0) {
    span = document.getElementById("count");
    span.innerHTML = timer;
  }

  if (timer === 0) {
    alert('Out of time!');
    clearInterval(timer);
  }

}, 1000);


var counter = 0;

function nextPicture () {


  if (counter === 0){

    document.getElementById('innertext').innerHTML = "Only a few seconds left until class starts. I'd better run!"; 
  }
  if (counter === 1){
    document.getElementById('main-image').src = "images/run-1.png";
    document.getElementById('textbox').style.opacity = 0;
  }
  if (counter === 2){
    document.getElementById('main-image').src = "images/run-2.png";
  }
  if (counter === 3){
    document.getElementById('main-image').src = "images/run-3.png";
  }
  if (counter === 4){
    document.getElementById('main-image').src = "images/run-4.png";
  }
    if (counter === 5){
    document.getElementById('main-image').src = "images/run-5.png";
  }
  if (counter === 6){
    document.getElementById('main-image').src = "images/run-6.png";
  }
  if (counter === 7){
    document.getElementById('main-image').src = "images/run-7.png";
  }
  if (counter === 8){
    document.getElementById('main-image').src = "images/run-8.png";
  }
  if (counter === 9){
    document.getElementById('main-image').src = "images/run-9.png";
  }
   if (counter === 10){
    document.getElementById('main-image').src = "images/run-10.png";
  }

  if (counter === 11){
    window.open("../page8/index.html","_self")
  }


  counter = counter + 1;
}

    

