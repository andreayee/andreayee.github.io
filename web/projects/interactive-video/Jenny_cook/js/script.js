var vmeat = document.getElementsByClassName("Vmeat");
var vsea = document.getElementsByClassName("Vsea");
var imgs = document.getElementsByClassName("seasoning");
var bar = document.getElementById("sea-container");
var add = document.getElementById("add");
var wrong = new Audio("audio/messup.mp3");
var n0=0,n1=0,n2=0,n3=0;

for(var i = 0; i<4; i++){
  imgs[i].addEventListener("click",function(){playVideo(this)});
}
vmeat[0].addEventListener("ended",function(){playit2()});
vmeat[1].addEventListener("ended",function(){appearBar()});
vmeat[2].addEventListener("ended",function(){check()});

for(var i = 0; i<4; i++){
  vsea[i].addEventListener("ended",function(){vanish(this)});
}
add.addEventListener("click",function(){disappearBar()});

function playit(e){
  vmeat[0].play();
  e.style.visibility="hidden";
}
function playit2(){
  vmeat[0].style.visibility="hidden";
  vmeat[1].style.visibility="visible";
  vmeat[1].play();
}

function playVideo(img){
  var index;
  if(img.id==="i0"){
    index = 0;
    n0=1;
  }else if(img.id==="i1"){
    index = 1;
    n1=1;
  }else if(img.id==="i2"){
    index = 2;
    n2=1;
  }else if(img.id==="i3"){
    index = 3;
    n3=1;
  }
  vsea[index].style.visibility = "visible";
  vsea[index].play();
  img.style.opacity="0.7";
}

function vanish(e){
  e.style.visibility="hidden";
}

function appearBar(){
  bar.style.visibility="visible";
}
function disappearBar(){
  bar.style.visibility="hidden";
  vmeat[2].style.visibility="visible";
  vmeat[2].play();
}

function check(){
  if(n0===1 && n1===1 && n2===1 && n3===1){
    window.setTimeout('window.location.replace("../Jenny_cook2/index.html")',10);
  }else{
    playAudio();
    document.getElementById("f").innerHTML="hummmm... i kind of forgot to add something"
    document.getElementById("failure").style.visibility = "visible";
    vmeat[0].style.visibility="hidden";
  }
}

function playAudio(e){
  wrong.play();
}
