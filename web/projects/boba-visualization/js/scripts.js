






window.onload = document.getElementById("wave-holder").style.zIndex = 0;








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















































