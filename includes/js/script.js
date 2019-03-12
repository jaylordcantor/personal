window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

  	document.getElementById('nav-pic').style.height= "50px";
  	document.getElementById('nav-pic').style.width= "50px";
  	document.getElementById('nav-pic').style.padding= "5px";
  } else {
  	document.getElementById('nav-pic').style.height= "75px";
  	document.getElementById('nav-pic').style.width= "75px";
  }
}