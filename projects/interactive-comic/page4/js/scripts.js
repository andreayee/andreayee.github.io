
window.onload = 
document.getElementById('main-image').style.opacity = 0;



var counter = 0;

function nextPicture () {


  if (counter === 0){
    document.getElementById('main-image').style.opacity = 1;
    document.getElementById('textbox').style.opacity = 0;
  }
  if (counter === 1){
    document.getElementById('main-image').src = "images/walk-1.png";
  }
    if (counter === 2){
    document.getElementById('main-image').src = "images/walk-2.png";
  }
  if (counter === 3){
    window.open("../page5/index.html","_self")

  }


  counter = counter + 1;

  // if(counter >= 7){
  //  counter = 0;
  // }
}

    

