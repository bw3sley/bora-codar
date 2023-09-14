const topInfo = document.querySelector(".top-info");
const moreButton = document.querySelector(".more-button");
const slider = document.querySelector(".more-details .slider");
const moreDetails = document.querySelector(".more-details");

const favoriteButton = document.querySelector(".favorite-button");

function closeMoreDetails() {
  moreDetails.classList.remove("active");
}

function toggleMoreDetails({ currentTarget }) {
  if (currentTarget === topInfo) {
    closeMoreDetails();
    return;
  }

  moreDetails.classList.toggle("active");
}

function toggleFavorite() {
  const favoriteIcon = favoriteButton.children[0];
  const isFavoriteFilled = favoriteButton.dataset.filled === "true";

  favoriteIcon.src = isFavoriteFilled
    ? "./assets/heart.svg"
    : "./assets/heart-filled.svg";

  favoriteButton.dataset.filled = String(!isFavoriteFilled);
}

moreButton.addEventListener("click", toggleMoreDetails);
topInfo.addEventListener("click", toggleMoreDetails);
slider.addEventListener("mousedown", toggleMoreDetails);
favoriteButton.addEventListener("mousedown", toggleFavorite);
