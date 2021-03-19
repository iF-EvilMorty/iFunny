
window.onscroll = function() {myFunction()};
var header = document.getElementById("fixed-header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {myHeader
    header.classList.remove("sticky");
  }
}
