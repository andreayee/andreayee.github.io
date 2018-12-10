






window.onload = document.getElementById("wave-holder").style.zIndex = 0;
window.onload = document.getElementById("about").style.display = 'none';








window.addEventListener("click", function(event) {

  document.getElementById("bouncing-boba").style.display = 'none';
  document.getElementById("bouncing-boba").style.visibility = "none";



  document.getElementById("wave-holder").style.display = "block";
  document.getElementById("wave-holder").style.zIndex = 4;







});

function showMap() {
   document.getElementById("mapbox").style.display = 'none';
   
   var x = document.getElementsByClassName(".i4ewOd-pzNkMb-haAclf");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
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





























































