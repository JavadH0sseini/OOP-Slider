export default class ImageSlider {
  constructor(container, images, transitionTime) {
    this.container = container;
    this.images = images;
    this.currentIndex = 0;
    this.sildeSize = this.container.offsetWidth;
    this.transitionTime = transitionTime;
    this.sliderInterval;
    this.setAutoPlay();
  }

  render() {
    const slider = document.createElement("div");
    slider.classList.add("slider__container");

    this.images.forEach((image) => {
      const imgEl = document.createElement("img");
      const IMG = (image) => require(`${image.src}`);
      imgEl.src = `${IMG(image)}`;
      slider.appendChild(imgEl);
    });

    this.container.appendChild(slider);
  }

  showPrevious() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.displayImage();
  }

  showNext() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.displayImage();

    this.resetAutoPlay();
  }

  displayImage() {
    const slider = document.querySelector(".slider__container");
    slider.style.transform = `translateX(${
      this.currentIndex * this.sildeSize
    }px)`;
    this.resetAutoPlay();
  }

  setAutoPlay() {
    this.sliderInterval = setInterval(
      this.showNext.bind(this),
      this.transitionTime
    );
  }

  resetAutoPlay() {
    clearInterval(this.sliderInterval);
    this.sliderInterval = setInterval(
      this.showNext.bind(this),
      this.transitionTime
    );
  }
}
