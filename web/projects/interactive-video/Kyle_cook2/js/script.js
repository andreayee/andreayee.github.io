var v = document.getElementsByClassName("V");
var vstuff = document.getElementsByClassName("Vstuff");
var bar1 = document.getElementById("q1-container");
var bar2 = document.getElementById("q2-container");
var add = document.getElementById("add");
var wrong = new Audio("audio/messup.mp3");
var nstuff=0,nfold=0;

v[0].addEventListener("ended",function(){playit2()});
v[1].addEventListener("ended",function(){appearBar1()});
vstuff[0].addEventListener("ended",function(){(appearBar2())})

vstuff[1].addEventListener("ended",function(){messup()});
vstuff[2].addEventListener("ended",function(){messup()});
vstuff[3].addEventListener("ended",function(){success()});


function playit(e){
  v[0].play();
  e.style.visibility="hidden";
}

function playit2(){
  v[0].style.visibility="hidden";
  v[1].style.visibility="visible";
  v[1].play();
}

function vanish(e){
  e.style.visibility="hidden";
}

function appearBar1(){
  bar1.style.visibility="visible";
}
function appearBar2(){
  bar2.style.visibility="visible";
}
function disappearBar1(e){
  bar1.style.visibility="hidden";
  if(e.id==="c10"){
    vstuff[0].style.visibility="visible";
    vstuff[0].play();
  }else if(e.id==="c11"){
    nstuff=1;
    bar2.style.visibility="visible";
  }
}
function disappearBar2(e){
  bar2.style.visibility="hidden";
  if(e.id==="c20"){
    nfold=1;
  }
  if(nstuff===1){
    if(nfold===1){
      vstuff[3].style.visibility="visible";
      vstuff[3].play();
    }else if(nfold===0){
      vstuff[2].style.visibility="visible";
      vstuff[2].play();
    }
  }else if(nstuff===0){
    if(nfold===1){
      vstuff[1].style.visibility="visible";
      vstuff[1].play();
    }else if(nfold===0){
      vstuff[2].style.visibility="visible";
      vstuff[2].play();
    }
  }
}

function messup(){
    playAudio();
    document.getElementById("f").innerHTML="oh, no! I forgot how to make sauce :<"
    document.getElementById("failure").style.visibility = "visible";
}

function success(){
  document.getElementById("success").style.visibility="visible";
}

function playAudio(e){
  wrong.play();
}
