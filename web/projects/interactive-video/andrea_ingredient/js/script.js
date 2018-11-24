var videos = document.getElementsByClassName("videos");
var imgs = document.getElementsByClassName("ingredient");
var wrong = new Audio("audio/wrong.mp3");
var n = 0;

for(var i = 0; i<4; i++){
  videos[i].addEventListener("ended",function(){vanish(this)});
  videos[i].addEventListener("ended",function(){popButton()});
}

function playVideo(e){
  var index = 0;
  if(e.id === "g0"){
    index = 0;
  }else if(e.id === "g1"){
    index = 1;
  }else if(e.id === "g2"){
    index = 2;
  }else if(e.id === "g3"){
    index = 3;
  }
  videos[index].style.visibility = "visible";
  videos[index].play();
  imgs[index].style.opacity = "0.8";

  n++;
}

function vanish(v){
  v.style.visibility = "hidden";
}

function playAudio(e){
  wrong.play();
  e.style.opacity = "0.5";
}

function popButton(){
  var btn = document.getElementById("lets-cook");
  if(n===4){
    document.getElementById("lets-cook").style.visibility = "visible";
  }
}


function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="../andrea_cook/index.html"
    var link2="../andrea_fail_one/index.html"
    var link3="../andrea_fail_two/index.html"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}