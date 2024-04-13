// sliderAnimations.js

const slider = function () {
    const slides = document.querySelectorAll(".slide");
    const btnNext = document.querySelector(".slider__btn--right");
    const btnPrev = document.querySelector(".slider__btn--left");
    const dotContainer = document.querySelector(".dots");
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    const goToSlide = function (sl) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - sl)}%)`)
      );
    };
  
    const nextSlide = function () {
      curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      const dots = document.querySelectorAll(".dots__dot");
      dots.forEach((dot) => dot.classList.remove("dots__dot--active"));
      dots[slide].classList.add("dots__dot--active");
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
  
    init();
  
    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);
  
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    });
  
    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  
  export default slider;
  