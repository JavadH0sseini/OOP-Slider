import "./styles/main.scss";
import ImageSlider from "./ImageSlider";
import data from "./data.json";
const sliderContainer = document.querySelector(".slider");

const slider = new ImageSlider(sliderContainer, data, 2000);
slider.render();
