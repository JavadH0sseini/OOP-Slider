export default class Slider {
  constructor({
    sliderSelector = ".slider",
    sliderContainerSelector = ".slider__container",
    previousSelector = ".previous",
    nextSelector = ".next",
    transitonTime = 300,
  } = {}) {
    this.slider = document.querySelector(sliderSelector);
    this.slidesNum = document.querySelectorAll(
      `${sliderContainerSelector} img`
    ).length;
    this.sliderContainer = document.querySelector(sliderContainerSelector);
    this.previousBtn = document.querySelector(previousSelector);
    this.nextBtn = document.querySelector(nextSelector);
    this.sildeSize = this.slider.offsetWidth;
    this.currentSlide = 0;

    this.setEventListeners();
  }
  moveSlides() {
    this.sliderContainer.style.transform = `translateX(-${
      this.currentSlide * this.sildeSize
    }px)`;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide >= this.slidesNum - 1 ? 0 : this.currentSlide + 1;
    this.moveSlides();
  }

  previousSlide() {
    this.currentSlide =
      this.currentSlide <= 0 ? this.slidesNum - 1 : this.currentSlide - 1;
    this.moveSlides();
  }

  setEventListeners() {
    this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
    this.previousBtn.addEventListener("click", this.previousSlide.bind(this));
  }
}
