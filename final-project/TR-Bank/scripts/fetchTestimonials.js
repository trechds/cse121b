// fetchTestimonials.js
const loadTestimonials = () => {
  return new Promise((resolve, reject) => {
    fetch('testimonials.json')
      .then(response => response.json())
      .then(data => {
        const slider = document.querySelector('.slider');

        data.forEach((testimonial, index) => {
          const slide = document.createElement('div');
          slide.classList.add('slide', `slide--${index + 1}`);

          const testimonialContent = `
            <div class="testimonial">
              <h5 class="testimonial__header">${testimonial.header}</h5>
              <blockquote class="testimonial__text">${testimonial.text}</blockquote>
              <address class="testimonial__author">
                <img src="images/user-${index + 1}.png" alt="" class="testimonial__photo" />
                <h6 class="testimonial__name">${testimonial.author.name}</h6>
                <p class="testimonial__location">${testimonial.author.location}</p>
              </address>
            </div>
          `;

          slide.innerHTML = testimonialContent;
          slider.appendChild(slide);
        });

        resolve();
      })
      .catch(error => reject(error));
  });
};

export { loadTestimonials };
