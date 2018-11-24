var counter = 0;

function nextPicture () {

	if (counter === 0){
		document.getElementById('main-image').src = "images/caf-1.png";
	}
	if (counter === 1){
		window.open("../page3/index.html","_self")

	}


	counter = counter + 1;

	// if(counter >= 7){
	// 	counter = 0;
	// }
}

		
