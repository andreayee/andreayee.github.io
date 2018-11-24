var v = document.getElementById("v0");
var bgm=document.getElementById("bgm");

v0.addEventListener("ended",function(){pop()});

function playit(){
  bgm.loop=true;
  bgm.play();
  v0.play();
  document.getElementById("start").style.visibility="hidden";
}

function pop(){
  document.getElementById("failure").style.visibility="visible";
}
