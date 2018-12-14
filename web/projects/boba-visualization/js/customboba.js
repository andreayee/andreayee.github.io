var slushVisibility = false;
var ButtonOn = false;

var slushButtons = [ButtonOn, slushVisibility];

function finishMT () {
  document.getElementById("slurp-audio").play();
   window.location.href = "#boba-personality";
   
} 


function resetMT() {



  slushVisibility = false;
  ButtonOn = false;


  var teaImg = document.getElementsByClassName("tea-img");
  for (var i = 0; i < teaImg.length; i++) {
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

  window.location.href = "#custom-boba";
}

// custom tea choices

function showBlackTea() {

  if (ButtonOn === false){
    document.getElementById("black-tea-img").style.display = 'block';
    document.getElementById("black-tea").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("black-tea-img").style.display = 'none';
    document.getElementById("black-tea").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showGreenTea() {


  if (ButtonOn === false){
    document.getElementById("green-tea-img").style.display = 'block';
    document.getElementById("green-tea").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("green-tea-img").style.display = 'none';
    document.getElementById("green-tea").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showMatchaTea() {

  if (ButtonOn === false){
    document.getElementById("matcha-tea-img").style.display = 'block';
    document.getElementById("matcha-tea").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("matcha-tea-img").style.display = 'none';
    document.getElementById("matcha-tea").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showThaiTea() {
 if (ButtonOn === false){
  document.getElementById("thai-tea-img").style.display = 'block';
  document.getElementById("thai-tea").style.backgroundColor = '#ffe9df';
  ButtonOn = true;
}else{
  document.getElementById("thai-tea-img").style.display = 'none';
  document.getElementById("thai-tea").style.backgroundColor = '#ffffff';
  ButtonOn = false;
}
}

function showSlush() {

  if (ButtonOn === false){
    document.getElementById("slush-img").style.display = 'block';
    document.getElementById("slush").style.backgroundColor = '#ffe9df';
    slushVisibility = true;
    ButtonOn = true;
  }else{
    document.getElementById("slush-img").style.display = 'none';
    document.getElementById("slush").style.backgroundColor = '#ffffff';
    slushVisibility = false;
    ButtonOn = false;
  }
}


// flavors

function showOriginalFlavor() {
  if (ButtonOn === false){
    // document.getElementById("original-flavor-img").style.display = 'block';
    document.getElementById("original-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("original-flavor-img").style.display = 'none';
    document.getElementById("original-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }

}

function showTaroFlavor() {
  if (ButtonOn === false){
    if (slushVisibility === true ){
      document.getElementById("taro-flavor-img").style.display = 'block';
      document.getElementById("taro-slush-top-img").style.display = 'block';
      document.getElementById("taro-slush-base-img").style.display = 'block';
    }
    else  {
      document.getElementById("taro-flavor-img").style.display = 'block';
    }

    document.getElementById("taro-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("taro-flavor-img").style.display = 'none';
    document.getElementById("taro-slush-top-img").style.display = 'none';
    document.getElementById("taro-slush-base-img").style.display = 'none';
    document.getElementById("taro-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}


function showYakultFlavor() {


  if (ButtonOn === false){
    // document.getElementById("yakult-flavor-img").style.display = 'block';
    document.getElementById("yakult-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("yakult-flavor-img").style.display = 'none';
    document.getElementById("yakult-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }

}

function showHoneyFlavor() {
  if (ButtonOn === false){
    // document.getElementById("honey-flavor-img").style.display = 'block';
    document.getElementById("honey-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("honey-flavor-img").style.display = 'none';
    document.getElementById("honey-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showBrownSugarFlavor() {
  if (ButtonOn === false){
    // document.getElementById("brown-sugar-flavor-img").style.display = 'block';
    document.getElementById("brown-sugar-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("brown-sugar-flavor-img").style.display = 'none';
    document.getElementById("brown-sugar-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showToffeeFlavor() {
  if (ButtonOn === false){
      // document.getElementById("toffee-flavor-img").style.display = 'block';
      document.getElementById("toffee-flavor").style.backgroundColor = '#ffe9df';
      ButtonOn = true;
    }else{
      // document.getElementById("toffee-flavor-img").style.display = 'none';
      document.getElementById("toffee-flavor").style.backgroundColor = '#ffffff';
      ButtonOn = false;
    }
  }

  function showMangoFlavor() {
    if (ButtonOn === false){
      if (slushVisibility === true ){
        document.getElementById("mango-flavor-img").style.display = 'block';
        document.getElementById("mango-slush-top-img").style.display = 'block';
        document.getElementById("mango-slush-base-img").style.display = 'block';
      }
      else  {
        document.getElementById("mango-flavor-img").style.display = 'block';
      }

      document.getElementById("mango-flavor").style.backgroundColor = '#ffe9df';
      ButtonOn = true;
    }else{
      document.getElementById("mango-flavor-img").style.display = 'none';
      document.getElementById("mango-slush-top-img").style.display = 'none';
      document.getElementById("mango-slush-base-img").style.display = 'none';
      document.getElementById("mango-flavor").style.backgroundColor = '#ffffff';
      ButtonOn = false;
    }
  }

  function showStrawberryFlavor() {
    if (ButtonOn === false){
      if (slushVisibility === true ){
        document.getElementById("strawberry-flavor-img").style.display = 'block';
        document.getElementById("strawberry-slush-top-img").style.display = 'block';
        document.getElementById("strawberry-slush-base-img").style.display = 'block';
      }
      else  {
        document.getElementById("strawberry-flavor-img").style.display = 'block';
      }

      document.getElementById("strawberry-flavor").style.backgroundColor = '#ffe9df';
      ButtonOn = true;
    }else{
      document.getElementById("strawberry-flavor-img").style.display = 'none';
      document.getElementById("strawberry-slush-top-img").style.display = 'none';
      document.getElementById("strawberry-slush-base-img").style.display = 'none';
      document.getElementById("strawberry-flavor").style.backgroundColor = '#ffffff';
      ButtonOn = false;
    }
  }

  function showPassionfruitFlavor() {
    if (ButtonOn === false){
      if (slushVisibility === true ){
        document.getElementById("passionfruit-flavor-img").style.display = 'block';
        document.getElementById("passionfruit-slush-top-img").style.display = 'block';
        document.getElementById("passionfruit-slush-base-img").style.display = 'block';
      }
      else  {
        document.getElementById("passionfruit-flavor-img").style.display = 'block';
      }

      document.getElementById("passionfruit-flavor").style.backgroundColor = '#ffe9df';
      ButtonOn = true;
    }else{
      document.getElementById("passionfruit-flavor-img").style.display = 'none';
      document.getElementById("passionfruit-slush-top-img").style.display = 'none';
      document.getElementById("passionfruit-slush-base-img").style.display = 'none';
      document.getElementById("passionfruit-flavor").style.backgroundColor = '#ffffff';
      ButtonOn = false;
    }
  }


  function showCitrusFlavor() {
    if (ButtonOn === false){
    // document.getElementById("citrus-flavor-img").style.display = 'block';
    document.getElementById("citrus-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("citrus-flavor-img").style.display = 'none';
    document.getElementById("citrus-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showRoseFlavor() {
  if (ButtonOn === false){
    if (slushVisibility === true ){
      document.getElementById("rose-flavor-img").style.display = 'block';
      document.getElementById("rose-slush-top-img").style.display = 'block';
      document.getElementById("rose-slush-base-img").style.display = 'block';
    }
    else  {
      document.getElementById("rose-flavor-img").style.display = 'block';
    }

    document.getElementById("rose-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("rose-flavor-img").style.display = 'none';
    document.getElementById("rose-slush-top-img").style.display = 'none';
    document.getElementById("rose-slush-base-img").style.display = 'none';
    document.getElementById("rose-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showWintermelonFlavor() {
  if (ButtonOn === false){
    // document.getElementById("wintermelon-flavor-img").style.display = 'block';
    document.getElementById("wintermelon-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("wintermelon-flavor-img").style.display = 'none';
    document.getElementById("wintermelon-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showLycheeFlavor() {
  if (ButtonOn === false){
    // document.getElementById("lychee-flavor-img").style.display = 'block';
    document.getElementById("lychee-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("lychee-flavor-img").style.display = 'none';
    document.getElementById("lychee-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}
function showKiwiFlavor() {
  if (ButtonOn === false){
    if (slushVisibility === true ){
      document.getElementById("kiwi-flavor-img").style.display = 'block';
      document.getElementById("kiwi-slush-top-img").style.display = 'block';
      document.getElementById("kiwi-slush-base-img").style.display = 'block';
    }
    else  {
      document.getElementById("kiwi-flavor-img").style.display = 'block';
    }

    document.getElementById("kiwi-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("kiwi-flavor-img").style.display = 'none';
    document.getElementById("kiwi-slush-top-img").style.display = 'none';
    document.getElementById("kiwi-slush-base-img").style.display = 'none';
    document.getElementById("kiwi-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}


function showPeachFlavor() {
  if (ButtonOn === false){
    // document.getElementById("peach-flavor-img").style.display = 'block';
    document.getElementById("peach-flavor").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    // document.getElementById("peach-flavor-img").style.display = 'none';
    document.getElementById("peach-flavor").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}





// custom boba toppings

function noToppings() {

  if (ButtonOn === false){
    document.getElementById("no-topping").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("no-topping").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }


}

function showBoba() {

   if (ButtonOn === false){
    document.getElementById("boba-img").style.display = 'block';
    document.getElementById("boba").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("boba-img").style.display = 'none';
    document.getElementById("boba").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showMiniBoba() {
  if (ButtonOn === false){
    document.getElementById("mini-boba-img").style.display = 'block';
    document.getElementById("mini-boba").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("mini-boba-img").style.display = 'none';
    document.getElementById("mini-boba").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showAgarBoba() {
  if (ButtonOn === false){
    document.getElementById("agar-boba-img").style.display = 'block';
    document.getElementById("agar-boba").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("agar-boba-img").style.display = 'none';
    document.getElementById("agar-boba").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showPoppingBoba() {
  if (ButtonOn === false){
    document.getElementById("popping-boba-img").style.display = 'block';
    document.getElementById("popping-boba").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("popping-boba-img").style.display = 'none';
    document.getElementById("popping-boba").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showRedBean() {
 if (ButtonOn === false){
    document.getElementById("red-bean-img").style.display = 'block';
    document.getElementById("red-bean").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("red-bean-img").style.display = 'none';
    document.getElementById("red-bean").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showFreshTaro() {
 if (ButtonOn === false){
    document.getElementById("fresh-taro-img").style.display = 'block';
    document.getElementById("fresh-taro").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("fresh-taro-img").style.display = 'none';
    document.getElementById("fresh-taro").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }}


function showCoconutJelly() {
 if (ButtonOn === false){
    document.getElementById("coconut-lychee-jelly-img").style.display = 'block';
    document.getElementById("coconut-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("coconut-lychee-jelly-img").style.display = 'none';
    document.getElementById("coconut-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showRainbowJelly() {
if (ButtonOn === false){
    document.getElementById("rainbow-jelly-img").style.display = 'block';
    document.getElementById("rainbow-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("rainbow-jelly-img").style.display = 'none';
    document.getElementById("rainbow-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showLycheeJelly() {
if (ButtonOn === false){
    document.getElementById("coconut-lychee-jelly-img").style.display = 'block';
    document.getElementById("lychee-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("coconut-lychee-jelly-img").style.display = 'none';
    document.getElementById("lychee-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showPassionfruitJelly() {
 if (ButtonOn === false){
    document.getElementById("mango-passionfruit-jelly-img").style.display = 'block';
    document.getElementById("passionfruit-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("mango-passionfruit-jelly-img").style.display = 'none';
    document.getElementById("passionfruit-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showMangoJelly() {
 if (ButtonOn === false){
    document.getElementById("mango-passionfruit-jelly-img").style.display = 'block';
    document.getElementById("mango-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("mango-passionfruit-jelly-img").style.display = 'none';
    document.getElementById("mango-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showCoffeeJelly() {
if (ButtonOn === false){
    document.getElementById("coffee-jelly-img").style.display = 'block';
    document.getElementById("coffee-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("coffee-jelly-img").style.display = 'none';
    document.getElementById("coffee-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showAloeVera() {
 if (ButtonOn === false){
    document.getElementById("aloe-vera-img").style.display = 'block';
    document.getElementById("aloe-vera").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("aloe-vera-img").style.display = 'none';
    document.getElementById("aloe-vera").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showGrassJelly() {
 if (ButtonOn === false){
    document.getElementById("grass-jelly-img").style.display = 'block';
    document.getElementById("grass-jelly").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("grass-jelly-img").style.display = 'none';
    document.getElementById("grass-jelly").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showMangoPudding() {
 if (ButtonOn === false){
    document.getElementById("mango-pudding-img").style.display = 'block';
    document.getElementById("mango-pudding").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("mango-pudding-img").style.display = 'none';
    document.getElementById("mango-pudding").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}


function showEggPudding() {
 if (ButtonOn === false){
    document.getElementById("egg-pudding-img").style.display = 'block';
    document.getElementById("egg-pudding").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("egg-pudding-img").style.display = 'none';
    document.getElementById("egg-pudding").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showTofuhua() {
  if (ButtonOn === false){
    document.getElementById("tofuhua-img").style.display = 'block';
    document.getElementById("tofuhua").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("tofuhua-img").style.display = 'none';
    document.getElementById("tofuhua").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showBasilSeeds() {
  if (ButtonOn === false){
    document.getElementById("basil-seeds-img").style.display = 'block';
    document.getElementById("basil-seeds").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("basil-seeds-img").style.display = 'none';
    document.getElementById("basil-seeds").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showIceCream() {
   if (ButtonOn === false){
    document.getElementById("ice-cream-base-img").style.display = 'block';
 document.getElementById("ice-cream-top-img").style.display = 'block';
 document.getElementById("ice-cream").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("ice-cream-base-img").style.display = 'none';
 document.getElementById("ice-cream-top-img").style.display = 'none';
 document.getElementById("ice-cream").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }

}

function showMilkFoam() {
  if (ButtonOn === false){
    document.getElementById("milk-foam-img").style.display = 'block';
    document.getElementById("milk-foam").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("milk-foam-img").style.display = 'none';
    document.getElementById("milk-foam").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}

function showSaltedCheese() {
  if (ButtonOn === false){
    document.getElementById("salted-cheese-img").style.display = 'block';
    document.getElementById("salted-cheese").style.backgroundColor = '#ffe9df';
    ButtonOn = true;
  }else{
    document.getElementById("salted-cheese-img").style.display = 'none';
    document.getElementById("salted-cheese").style.backgroundColor = '#ffffff';
    ButtonOn = false;
  }
}
