// sliderAnimations.js
const slider = function () {
    const slides = document.querySelectorAll('.slide')
    const btnNext = document.querySelector('.slider__btn--right');
    const btnPrev = document.querySelector('.slider__btn--left');
    const dotContainer = document.querySelector('.dots');
    let curSlide = 0;
    const maxSlide = slides.length;

    const goToSlide = function (sl) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - sl)}%)`)
    );
    };

    //Next Slide
    const nextSlide = function () {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
    };

    //Previous Slide
    const prevSlide = function () {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
    };

    const createDots = function () {
        // Create a new div element for the dot container
        const dotContainer = document.createElement("div");
        dotContainer.classList.add("dots");
        
        // Append the dot container to the slider parent element
        const sliderParent = document.querySelector('.slider');
        sliderParent.appendChild(dotContainer);
    
        // Now you can insert dots into the dynamically created dot container
        slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
        );
        });
    };

    const activateDot = function (slide) {
        // Parse the slide value as an integer
        slide = parseInt(slide);
        
        const dots = document.querySelectorAll(".dots__dot");
        
        // Check if slide is a valid index
        if (!isNaN(slide) && slide >= 0 && slide < dots.length) {
            dots.forEach((dot) => dot.classList.remove("dots__dot--active"));
            dots[slide].classList.add("dots__dot--active");
        } else {
            console.error("Invalid slide index:", slide);
        }
    };

    const init = function () {
        // Check if slides and dotContainer exist
        if (slides.length > 0 && dotContainer) {
            goToSlide(0);
            createDots();
            activateDot(0);
    
            // Add event listeners
            btnNext.addEventListener("click", nextSlide);
            btnPrev.addEventListener("click", prevSlide);
    
            // Keyboard pressing
            document.addEventListener("keydown", function (e) {
                if (e.key === "ArrowRight") nextSlide();
                if (e.key === "ArrowLeft") prevSlide();
            });

            // Event
            dotContainer.addEventListener("click", function (e) {
                if (e.target.classList.contains("dots__dot")) {
                    const slide = e.target.dataset.slide;
                    goToSlide(slide);
                    activateDot(slide);
                }
            });
        } else {
            console.error("Slider initialization failed: slides or dotContainer not found.");
        }
    };

    init();
};

export default slider;
