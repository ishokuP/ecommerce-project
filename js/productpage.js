
// Loads Navbar
$(function () {
  $("#navHolder").load("navbar.html");
});


// For size selector
var buttons = document.querySelectorAll('.sizeButtons button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    buttons.forEach(function(btn) {
      btn.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});





// For preview thingy
let scrollContainer = document.querySelector(".imageGallery");
let backButton = document.getElementById("backButton");
let forwardButton = document.getElementById("forwardButton");



const scrollWidth = scrollContainer.scrollWidth;
const itemWidth = scrollContainer.clientWidth;
const numItems = scrollWidth / itemWidth;
let scrollPosition = 0;

forwardButton.addEventListener("click", () => {
  scrollPosition += itemWidth;
  if (scrollPosition >= scrollWidth) {
    scrollPosition = 0;
  }
  scrollContainer.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
});

backButton.addEventListener("click", () => {
  scrollPosition -= itemWidth;
  if (scrollPosition < 0) {
    scrollPosition = scrollWidth - itemWidth;
  }
  scrollContainer.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
});

function goToSlide(slideIndex) {
  scrollPosition = slideIndex * itemWidth;
  scrollContainer.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
}

// For Quantity

let quantityText = document.getElementById("quantityInput")
let minusQuantity = document.getElementById("minusQuantity")
let addQuantity = document.getElementById("addQuantity")


minusQuantity.addEventListener("click", () => {
  if (quantityText.value <= 1) {
    return
    
  }
  quantityText.value = parseInt(quantityText.value) - 1;

});

addQuantity.addEventListener("click", () => {
  quantityText.value = parseInt(quantityText.value) + 1;
});