$(function () {
  $("#navHolder").load("navbar.html");
});

var element = document.getElementsByClassName("dropdown-menu");
var arrowdown = document.getElementsByClassName("arrowdown");
function expandFunction(n) {

  element[n].classList.toggle("mystyle");
  arrowdown[n].classList.toggle("open");
  void dropdownMenu.offsetWidth;
}

