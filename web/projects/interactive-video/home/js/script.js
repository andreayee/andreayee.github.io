window.onload = 
// document.getElementById('container').style.opacity = 0;
document.getElementById('container').style.display = 'none';



window.addEventListener("click", function(event) {

	document.getElementById("container").style.display = 'block';

	document.getElementById("page-1").style.opacity = 0;
	document.getElementById('page-1').style.display = 'none';

});

