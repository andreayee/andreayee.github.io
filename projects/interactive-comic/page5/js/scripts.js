
window.onload = 
document.getElementById('main-image').style.opacity = .1;




var counter = 0;

function nextPicture () {

	// console.log(counter);

	if (counter === 0){
		document.getElementById('main-image').style.opacity = 1;
		document.getElementById('textbox').style.opacity = 0;

	}
	if (counter === 1){
		document.getElementById('main-image').src = "images/ele-1.png";
		document.getElementById('textbox').style.opacity = 1;
		document.getElementById('innertext').innerHTML = "Ah, the door's finally closing!";	
	}
	if (counter === 2){
		document.getElementById('main-image').src = "images/ele-1.png";
		document.getElementById('textbox').style.opacity = 0;	
	}

	if (counter === 3){
		document.getElementById('main-image').src = "images/ele-2.png";
		document.getElementById('textbox').style.opacity = 0;	

	}


	if (counter === 4){
		document.getElementById('main-image').src = "images/ele-2.png";
		document.getElementById('textbox').style.opacity = 0;
		alert('Oh no! Who is that?');	

	}

	if (counter === 5){
		window.open("../page6/index.html","_self")

	}


	counter = counter + 1;

	// if(counter >= 7){
	// 	counter = 0;
	// }
}

		
