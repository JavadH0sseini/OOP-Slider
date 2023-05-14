import "./styles/main.scss";
import ImageSlider from "./ImageSlider";
import data from "./data.json";
import Button from "./Button";
const container = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider");
const sliderCntls = document.querySelector(".slider__cntrls");


const slider = new ImageSlider(sliderContainer, data, 5000);
slider.render();


const prev = new Button(sliderCntls, "قبلی", slider.showPrevious, slider, 'prev__btn');
prev.render();
const next = new Button(sliderCntls, "بعدی", slider.showNext, slider, 'next__btn');
next.render();



