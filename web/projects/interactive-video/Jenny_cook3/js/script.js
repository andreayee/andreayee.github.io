var v = document.getElementById("v0");
var vboil = document.getElementsByClassName("Vboil");
var bar1 = document.getElementById("q1-container");
var bar2 = document.getElementById("q2-container");
var wrong = new Audio("audio/messup.mp3");
var n1=0,n2=0;
var nmp = 0;
var np1=0,np2=0;
var ns=0;

v0.addEventListener("timeupdate",function(){choice1()});
v0.addEventListener("timeupdate",function(){proceed1()});
vboil[0].addEventListener("timeupdate",function(){choice2()});
vboil[0].addEventListener("timeupdate",function(){proceed2()});
vboil[1].addEventListener("timeupdate",function(){messup(this)});
vboil[2].addEventListener("ended",function(){messup(this)});
vboil[3].addEventListener("ended",function(){success(this)});

// function vanish(e){
//   e.style.visibility="hidden";
// }
function playit(e){
  v0.play();
  e.style.visibility="hidden";
}

function choice1(){
  if(np1===0 && v0.currentTime>0.5){
    appearBar1();
    np1=1;
  }
}
function proceed1(){
  if(v0.ended){
      bar1.style.visibility="hidden";
      v0.style.visibility="hidden";
      vboil[1].style.visibility="visible";
      vboil[1].play();
  }
}

function appearBar1(){
  bar1.style.visibility="visible";
  move1();
}
function disappearBar1(e){
  bar1.style.visibility="hidden";
  if(e.id==="c10"){
    vboil[1].style.visibility="visible";
    vboil[1].play();
  }else if(e.id==="c11"){
    vboil[0].style.visibility="visible";
    vboil[0].play();
    n1=1;
  }
  v0.pause();
  v0.style.visibility="hidden";
}



function choice2(){
  if(np2===0 && vboil[0].currentTime>16){
    appearBar2();
    np2=1;
  }
}
function proceed2(){
  if(vboil[0].ended){
      bar2.style.visibility="hidden";
      vboil[0].style.visibility="hidden";
      vboil[2].style.visibility="visible";
      vboil[2].play();
  }
}

function appearBar2(){
  bar2.style.visibility="visible";
  move2();
}
function disappearBar2(e){
  bar2.style.visibility="hidden";
  if(e.id==="c20"){
    vboil[3].style.visibility="visible";
    vboil[3].play();
    n2=1;
  }else if(e.id==="c21"){
    vboil[2].style.visibility="visible";
    vboil[2].play();
  }
  vboil[0].pause();
  vboil[0].style.visibility="hidden";
}

function success(e){
  if(ns===0 && e.currentTime>41){
    document.getElementById("success").style.visibility="visible";
    ns=1;
  }
}
function messup(e){
  var t = 0;
  if(e.id==="m1"){
    t=18;
  }else if(e.id==="m2"){
    t=4;
  }
  if(nmp===0 && e.currentTime>t){
    wrong.play();
    if(e.id==="m1"){
      document.getElementById("f").innerHTML="ahhh, the wontons are stuck to the pot..."
    }else if(e.id==="m2"){
      document.getElementById("f").innerHTML="nooo! the wontons are not fully cooked"
    }
    document.getElementById("failure").style.visibility = "visible";
    nmp=1;
  }
}



function move1() {
    var elem = document.getElementById("myBar1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width+=0.285;
            elem.style.width = width + '%';
        }
    }
}
function move2() {
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width+=0.167;
            elem.style.width = width + '%';
        }
    }
}
