






window.onload = document.getElementById("wave-holder").style.zIndex = 0;
window.onload = document.getElementById("about").style.display = 'none';








window.addEventListener("click", function(event) {

  document.getElementById("bouncing-boba").style.display = 'block';
  document.getElementById("bouncing-boba").style.visibility = "block";



  // document.getElementById("wave-holder").style.display = "block";
  // document.getElementById("wave-holder").style.zIndex = 4;







});

function showMap() {
   document.getElementById("mapbox").style.display = 'none';
   
   var x = document.getElementsByClassName(".i4ewOd-pzNkMb-haAclf");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
}

function hideMap() {
  document.getElementById("mapbox").style.display = 'block';
}




function goToExplanation() {
  window.location.href = "#explanation";
}

function goToAnatomy() {
  window.location.href = "#anatomy";
}
function goToHistory() {
  window.location.href = "#history";
}
function goToAbout() {
  document.getElementById("about").style.display = 'block';
  window.location.href = "#about";
}
function goToFindings() {
  window.location.href = "#findings";
}

function goToFindings() {
  window.location.href = "#findings";
}
function goToMap() {
  window.location.href = "#map-page";
}
function goToCharts() {
  window.location.href = "#charts";
}
function goToCustom() {
  window.location.href = "#custom";
}
function goToPersonality() {
  window.location.href = "#boba-personality";
}


function backToTop() {
  window.location.href = "#titlepage";
}

function closeAbout() {
  document.getElementById("about").style.display = 'none';
}



function showBobaDescription() {
 document.getElementById("boba-description").style.opacity = 1;
}

function showMTDescription() {
 document.getElementById("mt-description").style.opacity = 1;
}

function showStrawDescription() {
 document.getElementById("straw-description").style.opacity = 1;
}

function hideBobaDescription() {
 document.getElementById("boba-description").style.opacity = 0;
}

function hideMTDescription() {
 document.getElementById("mt-description").style.opacity = 0;
}

function hideStrawDescription() {
 document.getElementById("straw-description").style.opacity = 0;
}



// profile images


function showAlexBobaPicture() {
document.getElementById("alex-profile-img").setAttribute("src","images/alex-profile-img-2.png");
document.getElementById("slurp-audio").play();
}

function hideAlexBobaPicture() {
document.getElementById("alex-profile-img").setAttribute("src","images/alex-profile-img.png");
}

function showAndreaBobaPicture() {
document.getElementById("andrea-profile-img").setAttribute("src","images/andrea-profile-img-2.png");
document.getElementById("slurp-audio").play();
}

function hideAndreaBobaPicture() {
document.getElementById("andrea-profile-img").setAttribute("src","images/andrea-profile-img.png");
}


var myAudio = document.getElementById("background-music");
var isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
    myAudio.volume = 0.2;
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
  document.getElementById("toggle").innerHTML = "turn music [off]";
};
myAudio.onpause = function() {
  isPlaying = false;
  document.getElementById("toggle").innerHTML = "turn music [on]";
};























































