'use strict';

const slider = function () {
  // ELEMENTS
  const slides = document.querySelectorAll('.slider__slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.slider__dots');

  // STATE
  let currentSlide = 0;
  const maxSlide = slides.length;

  // COLOR LOGIC
  const setCustomProperty = (customProperty, value) => {
    document.documentElement.style.setProperty(customProperty, value);
  };

  const customProperties = ['--color-1', '--color-2', '--color-text'];

  const colors = [
    ['#a5d8ff', '#1c7ed6', '#1864ab'],
    ['#ffd8a8', '#e8590c', '#d9480f'],
    ['#ffc9c9', '#e03131', '#c92a2a'],
  ];

  const setColor = function (currentSlide) {
    colors.forEach((colors, i) => {
      if (currentSlide !== i) return;

      colors.forEach((color, i) => {
        setCustomProperty(customProperties[i], color);
      });
    });
  };

  // FUNCTIONS
  const createDots = function () {
    dotContainer.innerHTML = '';
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="slider__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.slider__dot')
      .forEach(dot => dot.classList.remove('slider__dot--active'));

    document
      .querySelector(`.slider__dot[data-slide="${slide}"]`)
      .classList.add('slider__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${90 * (i - slide)}rem)`;
    });
  };

  // Next and Prev
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
    setColor(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
    setColor(currentSlide);
  };

  // Initial Values
  const init = function () {
    createDots();
    activateDot(currentSlide);
    goToSlide(currentSlide);
    setColor(currentSlide);
  };

  init();

  // EVENT HANDLERS
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('slider__dot')) return;

    currentSlide = +e.target.dataset.slide;

    goToSlide(currentSlide);
    activateDot(currentSlide);
    setColor(currentSlide);
  });
};

slider();
