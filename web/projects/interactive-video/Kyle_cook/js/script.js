var vmeat = document.getElementsByClassName("Vmeat");
var vsea = document.getElementsByClassName("Vsea");
var imgs = document.getElementsByClassName("seasoning");
var bar = document.getElementById("sea-container");
var add = document.getElementById("add");
var wrong = new Audio("audio/messup.mp3");
var n0=0,n1=0;

for(var i = 0; i<2; i++){
  imgs[i].addEventListener("click",function(){playVideo(this)});
}
vmeat[0].addEventListener("ended",function(){playit2()});
vmeat[1].addEventListener("ended",function(){appearBar()});
add.addEventListener("click",function(){check()});

for(var i = 0; i<2; i++){
  vsea[i].addEventListener("ended",function(){vanish(this)});
}

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
  }
  vsea[index].style.visibility = "visible";
  vsea[index].play();
  img.style.opacity="0.6";
}

function vanish(e){
  e.style.visibility="hidden";
}

function appearBar(){
  bar.style.visibility="visible";
}

function check(){
  if(n0===1 && n1===1){
    window.setTimeout('window.location.replace("../Kyle_cook2/index.html")',10);
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
