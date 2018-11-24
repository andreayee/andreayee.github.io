
window.onload = 
document.getElementById('step-1-vid').style.display = 'none';
document.getElementById('step-2').style.display = 'none';




window.addEventListener("click", function(event) {

  document.getElementById("step-1-vid").style.display = 'block';
  document.getElementById("step-1-vid").style.visibility = "visible";



});

var vid = document.getElementById("step-1-vid"); 

function playVid() { 
    vid.play(); 
} 


function step2popup() {
	vid.pause(); 
document.getElementById('step-1').style.display = 'none';
document.getElementById('step-1-vid').style.display = 'none';
document.getElementById('step-2').style.display = 'block';
}



function step3popup() {
document.getElementById('step-1').style.display = 'none';
document.getElementById('step-1-vid').style.display = 'none';
document.getElementById('step-2').style.display = 'none';
document.getElementById('step-2-vid').style.display = 'none';
document.getElementById('step-3').style.display = 'block';

}


