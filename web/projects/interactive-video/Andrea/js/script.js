var show1 = document.getElementById('i1');
var show2 = document.getElementById('i2');
var show3 = document.getElementById('i3');
var show4 = document.getElementById('i4');
var show = [show1, show2, show3, show4];

for(var i = 0;i<4;i++){
  show[i].addEventListener("click",function(){showText(this)});
  // show[i].addEventListener("click",playAudio(this));
}

function showText(e){
  e.style.opacity = "1";
  var n = e.id;
  if(n==="i1"){
    t = "t1";
  }else if(n==="i2"){
    t = "t2";
  }else if(n==="i3"){
    t = "t3";
  }else if(n==="i4"){
    t = "t4";
  }
  var text = document.getElementById(t);
  text.style.opacity="1";
}
