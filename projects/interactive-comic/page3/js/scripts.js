
window.onload = 
document.getElementById('left-page').style.opacity = .1;
document.getElementById('row-1').style.opacity = .1;
document.getElementById('row-2').style.opacity = .1;	
document.getElementById('row-3').style.opacity = .1;



var counter = 0;

function nextPicture () {

	// console.log(counter);

	if (counter === 0){
		document.getElementById('left-page').style.opacity = 1;
		document.getElementById('row-1').style.opacity = .1;
		document.getElementById('row-2').style.opacity = .1;	
		document.getElementById('row-3').style.opacity = .1;
		document.getElementById('textbox').style.opacity = 0;

	}
	if (counter === 1){
		document.getElementById('row-1').style.opacity =  1;
		document.getElementById('row-2').style.opacity = .1;
		document.getElementById('row-3').style.opacity = .1;
		document.getElementById('textbox').style.opacity = 0;	
	}
	if (counter === 2){
		document.getElementById('row-1').style.opacity =  1;
		document.getElementById('row-2').style.opacity =  1;
		document.getElementById('row-3').style.opacity = .1;
		document.getElementById('textbox').style.opacity = 0;	
	}
	if (counter === 3){
		document.getElementById('row-1').style.opacity = 1;
		document.getElementById('row-2').style.opacity = 1;	
		document.getElementById('row-3').style.opacity = 1;	
		document.getElementById('textbox').style.opacity = 0;
	}	

	if (counter === 4){
		window.open("../page4/index.html","_self")
	}


	counter = counter + 1;

	if(counter >= 5){
		counter = 0;
	}
}
