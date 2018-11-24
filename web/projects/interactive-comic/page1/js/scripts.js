
window.onload = 
document.getElementById('main-image').style.opacity = 0;






var counter = 0;

function nextPicture () {


	if (counter === 0){
		document.getElementById('main-image').style.opacity = 1;
		document.getElementById('textbox').style.opacity = 0;


	}
	if (counter === 1){
		document.getElementById('main-image').src = "images/set-1.png";
	}
	if (counter === 2){
		document.getElementById('main-image').src = "images/set-2.png";
	}

	if (counter === 3){
		document.getElementById('main-image').src = "images/set-3.png";
	
	}

	if (counter === 4){
		document.getElementById('main-image').src = "images/set-4.png";

	}

	if (counter === 5){
		window.open("../page2/index.html","_self")

	}


	counter = counter + 1;

	// if(counter >= 7){
	// 	counter = 0;
	// }
}

		
