import "./styles/main.scss";
import ImageSlider from "./ImageSlider";
import data from "./data.json";
import Button from "./Button";
const container = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider");
const sliderCntls = document.querySelector(".slider__cntrls");


const slider = new ImageSlider(sliderContainer, data, 2000);
slider.render();


const prev = new Button(sliderCntls, "Prev", slider.showPrevious, slider, 'prev__btn');
prev.render();
const next = new Button(sliderCntls, "Next", slider.showNext, slider, 'next__btn');
next.render();



