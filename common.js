window.addEventListener('scroll', function (e) {
  var $parallax = document.getElementById('parallax');
  var posY = document.scrollingElement.scrollTop * 0.3;
  $parallax.style.backgroundPosition = '0px '+  posY  +'px';
})