
// Loads Navbar
$(function(){
  $("#navHolder").load("navbar.html");
});



let scrollContainer = document.querySelector(".imageGallery");
let backButton = document.getElementById("backButton");
let forwardButton = document.getElementById("forwardButton");

const scrollWidth = scrollContainer.scrollWidth;
const itemWidth = scrollContainer.clientWidth;
const numItems = scrollWidth / itemWidth;
let scrollPosition = 0;

forwardButton.addEventListener("click", () => {
    scrollPosition += itemWidth;
    if (scrollPosition > scrollWidth - itemWidth) {
        // If reached the last element, scroll back to the beginning
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
        // If scrolled beyond the beginning, scroll to the last element
        scrollPosition = scrollWidth - itemWidth;
    }
    scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
    });
});
