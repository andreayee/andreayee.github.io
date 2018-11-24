


var counter = 0;

function nextPicture () {

	// console.log(counter);

	if (counter === 0){
		document.getElementById('main-image').style.opacity = 1;
		document.getElementById('textbox').style.opacity = 0;

	}
	if (counter === 1){
		document.getElementById('main-image').src = "images/clos-2.png";
		document.getElementById('textbox').style.opacity = 0;
		
	}
	if (counter === 2){
		
		document.getElementById('textbox').style.opacity = 1;
		document.getElementById('innertext').innerHTML = "Can't they wait? The elevator's already full.";
		document.getElementById('main-image').src = "images/clos-2.png";	
	}
	if (counter === 3){
		document.getElementById('textbox').style.opacity = 0;
		document.getElementById('main-image').src = "images/clos-3.png";
			
	}

	if (counter === 4){
		document.getElementById('main-image').src = "images/clos-4.png";
		document.getElementById('textbox').style.opacity = 0;	

	}


	if (counter === 5){
		document.getElementById('main-image').src = "images/clos-4.png";
		document.getElementById('textbox').style.opacity = 1;
		document.getElementById('innertext').innerHTML = "Well... they pressed the final floor. All of them are selected now.";	

	}

	if (counter === 6){
		window.open("../page7/index.html","_self")

	}


	counter = counter + 1;

	// if(counter >= 7){
	// 	counter = 0;
	// }
}

		
