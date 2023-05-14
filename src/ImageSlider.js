import Button from "./Button";

export default class ImageSlider {
  constructor(container, images, transitionTime) {
    this.container = container;
    this.images = images;
    this.currentIndex = 0;
    this.sildeSize = this.container.offsetWidth;
    this.setAutoPlay(transitionTime)
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

    const sliderCntls = document.createElement("div");
    sliderCntls.classList.add("slider__cntrls");

    const prev = new Button(sliderCntls, "Prev", this.showPrevious, this, 'prev__btn');
    prev.render();

    const next = new Button(sliderCntls, "Next", this.showNext, this, 'next__btn');
    next.render();

    this.container.appendChild(slider);
    this.container.appendChild(sliderCntls);
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
  }

  displayImage() {
    const slider = document.querySelector(".slider__container");
    slider.style.transform = `translateX(-${
      this.currentIndex * this.sildeSize
    }px)`;
  }

  setAutoPlay(transitionTime){
    setInterval(this.showNext.bind(this), transitionTime);
  }
}
