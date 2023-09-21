const carousels = document.querySelector(".carousels");

function rotateActiveCarousel() {
  const firstCarousel = carousels.children[0];
  const secondCarousel = carousels.children[1];

  firstCarousel.classList.toggle("active");
  secondCarousel.classList.toggle("active");

  carousels.insertBefore(secondCarousel, firstCarousel);
}

carousels.addEventListener("mousewheel", rotateActiveCarousel);
