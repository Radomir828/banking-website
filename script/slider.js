// implementing slider
import { slides, dotsContainer, btnRight, btnLeft } from './elements.js';

let currSlide = 0;
const slidesNumber = slides.length;

// Functions
const activateDots = activeSlide => {
  const dots = document.querySelectorAll('.dots__dot');
  dots.forEach(dot => dot.classList.remove('dots__dot--active'));

  const activeDot = document.querySelector(
    `.dots__dot[data-slide="${activeSlide}"]`,
  );

  activeDot.classList.add('dots__dot--active');
};

const goToSlide = slide => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

export const nextSlide = () => {
  if (currSlide === slidesNumber - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDots(currSlide);
};

export const prevSlide = () => {
  if (currSlide === 0) {
    currSlide = slidesNumber - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDots(currSlide);
};

export const createDots = () => {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`,
    );
  });
};

// showing slides at the beggining
export const initSliders = () => {
  goToSlide(0);
  createDots();
  activateDots(0);
};

// Event listeners
btnRight.addEventListener('click', nextSlide); // clicking right arrow
btnLeft.addEventListener('click', prevSlide); // clicking left arrow

// clicking dots
dotsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const slide = Number(e.target.dataset.slide);
    goToSlide(slide);
    activateDots(slide);
  }
});

// using left and right arrow on the keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
