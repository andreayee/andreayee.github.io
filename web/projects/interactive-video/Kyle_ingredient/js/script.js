var videos = document.getElementsByClassName("videos");
var imgs = document.getElementsByClassName("ingredient");
var wrong = new Audio("audio/wrong.mp3");
var n0=0,n1=0,n2=0,n3=0,n4=0;

for(var i = 0; i<5; i++){
  videos[i].addEventListener("ended",function(){vanish(this)});
  videos[i].addEventListener("ended",function(){popButton()});
}

function playVideo(e){
  var index = 0;
  if(e.id === "g0"){
    index = 0;
    n0=1;
  }else if(e.id === "g1"){
    index = 1;
    n1=1;
  }else if(e.id === "g2"){
    index = 2;
    n2=1;
  }else if(e.id === "g3"){
    index = 3;
    n3=1;
  }else if(e.id === "g4"){
    index = 4;
    n4=1;
  }
  videos[index].style.visibility = "visible";
  videos[index].play();
  imgs[index].style.opacity = "0.6";
}

function vanish(v){
  v.style.visibility = "hidden";
}

function playAudio(e){
  wrong.play();
  e.style.opacity = "0.4";
}

function popButton(){
  var btn = document.getElementById("lets-cook");
  if(n0+n1+n2+n3+n4===5){
    btn.style.visibility = "visible";
  }
}
