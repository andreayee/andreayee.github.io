

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
         if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
      } else { //object goes out of view (scrolling up)
       
        if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});





window.onload = 
document.getElementById("wave-holder").style.zIndex = 0;





window.addEventListener("click", function(event) {

  document.getElementById("bouncing-boba").style.display = 'none';
  document.getElementById("bouncing-boba").style.visibility = "none";



  document.getElementById("wave-holder").style.visibility = "block";
  document.getElementById("wave-holder").style.zIndex = 4;



});

function showMap() {
   document.getElementById("mapbox").style.display = 'none';
}

// custom boba stuff
function showBoba() {
    document.getElementById("boba-img").style.display = 'block';
    document.getElementById("boba").style.backgroundColor = 'pink';

}

function showMiniBoba() {
    document.getElementById("mini-boba-img").style.display = 'block';
    document.getElementById("mini-boba").style.backgroundColor = 'pink';

}





































