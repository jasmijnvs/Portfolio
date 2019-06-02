// STARTPAGINA - MIJN NAAM //
let mijnH1 = document.querySelector("h1 span");

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
            mijnH1.classList.add("onzichtbaar");
      } else {
            mijnH1.classList.remove("onzichtbaar");
      }
});

// NAVIGATIE //
let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})
