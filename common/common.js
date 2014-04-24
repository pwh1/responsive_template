// some basic stuff for making the responsiveness a bit nicer

$(document).ready(function() {
// loading smooth scrolling for nice nav
      $('#top ul li a').smoothScroll();
      $('#back').smoothScroll();
      $('h1 a').smoothScroll();


 $("#layer-menu li a").click(function(){ 
  $("#mob").removeClass("active");
  $("#layer-menu").removeClass("active");
    });

// add/remove class for mobile nav btn
    $("#mob").click(function(){ 
      if ( $("#mob").hasClass("active") ) {
  $("#mob").removeClass("active")}
  else {
    $("#mob").addClass("active")
  };
      if ( $("#layer-menu").hasClass("active") ) {
  $("#layer-menu").removeClass("active")}
  else {
    $("#layer-menu").addClass("active")
  };
  return false;
  });
// show/hide nav on window resize 
   $(window).resize(function() {
 if ($(window).width() >= 480) {
    $("#mob").removeClass('active');
    $("#layer-menu").addClass("active")
  }});
   $(window).resize(function() {
 if ($(window).width() < 480) {
    $("#mob").removeClass('active');
    $("#layer-menu").removeClass("active")
  }});

});