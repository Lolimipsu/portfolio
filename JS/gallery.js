var slideIndex = 1;
var slideInterval;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function startSlideshow() {
  slideInterval = setInterval(function() {
    plusDivs(1);
  }, 2000, );
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

window.onload = function() {
  showDivs(slideIndex);
  startSlideshow();
  var slideshowContainer = document.querySelector('.w3-content');
  slideshowContainer.onmouseover = stopSlideshow;
  slideshowContainer.onmouseout = startSlideshow;
};