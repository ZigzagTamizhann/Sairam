let currentSlide = 1;
const cards = document.querySelectorAll('.card');
const indicators = document.querySelectorAll('.indicator');

function showSlide(slideIndex) {
  if (slideIndex < 1) {
    slideIndex = cards.length;
  } else if (slideIndex > cards.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }

  cards[slideIndex - 1].classList.add('active');
  indicators[slideIndex - 1].classList.add('active');

  currentSlide = slideIndex;
}

showSlide(currentSlide);