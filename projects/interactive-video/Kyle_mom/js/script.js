var v = document.getElementById("v0");

v0.addEventListener("ended",function(){pop()});

function playit(){
  v0.play();
  document.getElementById("start").style.visibility="hidden";
}

function pop(){
  document.getElementById("failure").style.visibility="visible";
}
