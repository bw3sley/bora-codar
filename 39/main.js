const form = document.forms[0];
const comment = form.querySelector(".comment");
const review = form.querySelector(".review");
const backButton = document.body.querySelector(".backButton");
const stars = form.querySelectorAll(".stars span");

stars.forEach((star, index) => {
  star.addEventListener("click", () => selectRating(index));
});

function clearSelectedStars() {
  stars.forEach((star) => star.classList.remove("selected"));
}

function selectRating(index) {
  clearSelectedStars();

  for (let i = index; i >= 0; i--) {
    stars[i].classList.add("selected");
  }
}

function toggleReviewSteps(event) {
  event.preventDefault();

  comment.classList.toggle("hide");
  review.classList.toggle("hide");
  backButton.classList.toggle("hide");
}
