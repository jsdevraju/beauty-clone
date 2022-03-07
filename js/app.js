// menu
const nav_menu = document.querySelector(".nav_menu");
const leftMenu = document.querySelector(".leftMenu");
const close_menu = document.querySelector(".close_menu");

nav_menu.addEventListener("click", () => {
  leftMenu.classList.add("active");
});
close_menu.addEventListener("click", () => {
  leftMenu.classList.remove("active");
});

//testimonial
$(document).ready(function () {
  $(".your-class").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


// change active menu
const menuLi = document.querySelectorAll(".nav_links");

function setMenuActive() {
  menuLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

// scroll spy

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
let current = "";
sections.forEach((section) => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (pageYOffset >= sectionTop - sectionHeight / 3) {
  current = section.getAttribute("id");
}
});

menuLi.forEach((li) => {
li.classList.remove("active");
if (li.classList.contains(current)) {
  li.classList.add("active");
}
});

});