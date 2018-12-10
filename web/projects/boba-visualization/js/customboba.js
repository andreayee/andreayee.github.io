function resetMT() {


var teaImg = document.getElementsByClassName("tea-img");


  var i;
  for (i = 0; i < teaImg.length; i++) {
    teaImg[i].style.display = "none";
  }

var toppingImg = document.getElementsByClassName("topping-img");


  var i;
  for (i = 0; i < toppingImg.length; i++) {
    toppingImg[i].style.display = "none";
  }


var buttons = document.getElementsByClassName("tea-choice");


  var i;
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "white";
  }

var flavorChoice = document.getElementsByClassName("flavor-choice");


  var i;
  for (i = 0; i < flavorChoice.length; i++) {
    flavorChoice[i].style.backgroundColor = "white";
  }

var toppingChoice = document.getElementsByClassName("topping");


  var i;
  for (i = 0; i < toppingChoice.length; i++) {
    toppingChoice[i].style.backgroundColor = "white";
  }



  // document.getElementById("result-reset").style.display = 'none';
  window.location.href = "#custom-boba";
}

// custom tea choices

function showBlackTea() {
    document.getElementById("black-tea-img").style.display = 'block';
    document.getElementById("black-tea").style.backgroundColor = '#ffe9df';

}

function showGreenTea() {
    document.getElementById("green-tea-img").style.display = 'block';
    document.getElementById("green-tea").style.backgroundColor = '#ffe9df';

}

function showMatchaTea() {
    document.getElementById("matcha-tea-img").style.display = 'block';
    document.getElementById("matcha-tea").style.backgroundColor = '#ffe9df';

}

function showThaiTea() {
    document.getElementById("thai-tea-img").style.display = 'block';
    document.getElementById("thai-tea").style.backgroundColor = '#ffe9df';

}

function showSlush() {
    document.getElementById("slush-img").style.display = 'block';
    document.getElementById("slush").style.backgroundColor = '#ffe9df';

}


// flavors

function showOriginalFlavor() {
    document.getElementById("original-flavor").style.backgroundColor = '#ffe9df';

}

function showTaroFlavor() {
    document.getElementById("taro-flavor-img").style.display = 'block';
    document.getElementById("taro-flavor").style.backgroundColor = '#ffe9df';

}


function showYakultFlavor() {
    // document.getElementById("yakult-flavor-img").style.display = 'block';
    document.getElementById("yakult-flavor").style.backgroundColor = '#ffe9df';

}

function showHoneyFlavor() {
    // document.getElementById("honey-flavor-img").style.display = 'block';
    document.getElementById("honey-flavor").style.backgroundColor = '#ffe9df';

}

function showBrownSugarFlavor() {
    // document.getElementById("brown-sugar-flavor-img").style.display = 'block';
    document.getElementById("brown-sugar-flavor").style.backgroundColor = '#ffe9df';

}

function showToffeeFlavor() {
    // document.getElementById("toffee-flavor-img").style.display = 'block';
    document.getElementById("toffee-flavor").style.backgroundColor = '#ffe9df';

}

function showMangoFlavor() {
    // document.getElementById("mango-flavor-img").style.display = 'block';
    document.getElementById("mango-flavor").style.backgroundColor = '#ffe9df';

}

function showStrawberryFlavor() {
    document.getElementById("strawberry-flavor-img").style.display = 'block';
    document.getElementById("strawberry-flavor").style.backgroundColor = '#ffe9df';

}

function showPassionfruitFlavor() {
    // document.getElementById("passionfruit-flavor-img").style.display = 'block';
    document.getElementById("passionfruit-flavor").style.backgroundColor = '#ffe9df';

}

function showCitrusFlavor() {
    document.getElementById("citrus-flavor-img").style.display = 'block';
    document.getElementById("citrus-flavor").style.backgroundColor = '#ffe9df';

}

function showRoseFlavor() {
    document.getElementById("rose-flavor-img").style.display = 'block';
    document.getElementById("rose-flavor").style.backgroundColor = '#ffe9df';

}

function showWintermelonFlavor() {
    // document.getElementById("wintermelon-flavor-img").style.display = 'block';
    document.getElementById("wintermelon-flavor").style.backgroundColor = '#ffe9df';

}

function showLycheeFlavor() {
    // document.getElementById("lychee-flavor-img").style.display = 'block';
    document.getElementById("lychee-flavor").style.backgroundColor = '#ffe9df';

}
function showKiwiFlavor() {
    document.getElementById("kiwi-flavor-img").style.display = 'block';
    document.getElementById("kiwi-flavor").style.backgroundColor = '#ffe9df';

}

function showPeachFlavor() {
    // document.getElementById("peach-flavor-img").style.display = 'block';
    document.getElementById("peach-flavor").style.backgroundColor = '#ffe9df';

}





// custom boba toppings

function noToppings() {
  document.getElementById("no-topping").style.backgroundColor = '#ffe9df';
}

function showBoba() {
    document.getElementById("boba-img").style.display = 'block';
    document.getElementById("boba").style.backgroundColor = '#ffe9df';

}

function showMiniBoba() {
    document.getElementById("mini-boba-img").style.display = 'block';
    document.getElementById("mini-boba").style.backgroundColor = '#ffe9df';
}

function showAgarBoba() {
  document.getElementById("agar-boba-img").style.display = 'block';
    document.getElementById("agar-boba").style.backgroundColor = '#ffe9df';
}

function showPoppingBoba() {
  document.getElementById("popping-boba-img").style.display = 'block';
    document.getElementById("popping-boba").style.backgroundColor = '#ffe9df';
}

function showRedBean() {
   document.getElementById("red-bean-img").style.display = 'block';
    document.getElementById("red-bean").style.backgroundColor = '#ffe9df';
}

function showFreshTaro() {
   document.getElementById("fresh-taro-img").style.display = 'block';
    document.getElementById("fresh-taro").style.backgroundColor = '#ffe9df';
}

function showCoconutJelly() {
   document.getElementById("coconut-lychee-jelly-img").style.display = 'block';
    document.getElementById("coconut-jelly").style.backgroundColor = '#ffe9df';
}

function showRainbowJelly() {
   document.getElementById("rainbow-jelly-img").style.display = 'block';
    document.getElementById("rainbow-jelly").style.backgroundColor = '#ffe9df';
}

function showLycheeJelly() {
   document.getElementById("coconut-lychee-jelly-img").style.display = 'block';
    document.getElementById("lychee-jelly").style.backgroundColor = '#ffe9df';
}

function showPassionfruitJelly() {
   document.getElementById("mango-passionfruit-jelly-img").style.display = 'block';
    document.getElementById("passionfruit-jelly").style.backgroundColor = '#ffe9df';
}

function showMangoJelly() {
   document.getElementById("mango-passionfruit-jelly-img").style.display = 'block';
    document.getElementById("mango-jelly").style.backgroundColor = '#ffe9df';
}

function showCoffeeJelly() {
   document.getElementById("coffee-jelly-img").style.display = 'block';
    document.getElementById("coffee-jelly").style.backgroundColor = '#ffe9df';
}

function showAloeVera() {
   document.getElementById("aloe-vera-img").style.display = 'block';
    document.getElementById("aloe-vera").style.backgroundColor = '#ffe9df';
}

function showGrassJelly() {
   document.getElementById("grass-jelly-img").style.display = 'block';
    document.getElementById("grass-jelly").style.backgroundColor = '#ffe9df';
}

function showMangoPudding() {
   document.getElementById("mango-pudding-img").style.display = 'block';
    document.getElementById("mango-pudding").style.backgroundColor = '#ffe9df';
}


function showEggPudding() {
   document.getElementById("egg-pudding-img").style.display = 'block';
    document.getElementById("egg-pudding").style.backgroundColor = '#ffe9df';
}

function showTofuhua() {
   document.getElementById("tofuhua-img").style.display = 'block';
    document.getElementById("tofuhua").style.backgroundColor = '#ffe9df';
}

function showBasilSeeds() {
   document.getElementById("basil-seeds-img").style.display = 'block';
    document.getElementById("basil-seeds").style.backgroundColor = '#ffe9df';
}

function showIceCream() {
   document.getElementById("ice-cream-base-img").style.display = 'block';
   document.getElementById("ice-cream-top-img").style.display = 'block';
    document.getElementById("ice-cream").style.backgroundColor = '#ffe9df';
}

function showMilkFoam() {
   document.getElementById("milk-foam-img").style.display = 'block';
    document.getElementById("milk-foam").style.backgroundColor = '#ffe9df';
}

function showSaltedCheese() {
   document.getElementById("salted-cheese-img").style.display = 'block';
    document.getElementById("salted-cheese").style.backgroundColor = '#ffe9df';
}
