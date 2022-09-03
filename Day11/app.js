const body = document.body;
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll("button");
let activeSlide = 0;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    const slidesNum = slides.length - 1;

    if (buttonId === "left")
      activeSlide === 0 ? (activeSlide = slidesNum) : activeSlide--;
    else activeSlide === slidesNum ? (activeSlide = 0) : activeSlide++;

    setBgBody();
    setActiveSlide();
  });
});

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}
setBgBody();
setActiveSlide();
