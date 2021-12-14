// Hamburger Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

// Collapsible elements

const accordionButtons = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");
const arrow = document.getElementsByClassName("arrow");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {
    accordionButton.classList.toggle("show");
  });
});
