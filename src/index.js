import "./styles/main.scss";
import Slider from "./slider";
const sliderContainer = document.querySelector(".slider__container");
import data from "./data.json";

data.images.forEach((image) => {
  const imgEl = document.createElement("img");
  const IMG = (image) => require(`${image.src}`);
  imgEl.src = `${IMG(image)}`;
  sliderContainer.appendChild(imgEl);
});

new Slider();

