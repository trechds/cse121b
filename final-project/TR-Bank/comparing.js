//////////////////////////////////
// Slider animations
const slider = function () {
    const slides = document.querySelectorAll(".slide");
    const btnNext = document.querySelector(".slider__btn--right");
    const btnPrev = document.querySelector(".slider__btn--left");
    let curSlide = 0;
    const maxSlide = slides.length;
  
    const goToSlide = function (sl) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - sl)}%)`)
      );
    };
  
    //Next Slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    
  
    //Previous Slide
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    btnPrev.addEventListener("click", prevSlide);
  
    //////////////////////////////////
    // Keyboard pressing
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    });
  
    //////////////////////////////////
    // Implementing dots
    const dotContainer = document.querySelector(".dots");
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    init();
  
    //event
    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };