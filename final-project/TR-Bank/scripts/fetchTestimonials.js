// fetchTestimonials.js
const loadTestimonials = async () => {
  try {
    const response = await fetch('testimonials.json');
    const data = await response.json();
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
            <h6 class="testimonial__name">${testimonial.name}</h6>
            <p class="testimonial__location">${testimonial.location}</p>
          </address>
        </div>
      `;
      
      slide.innerHTML = testimonialContent;
      slider.appendChild(slide);
    });
  } catch (error) {
    console.error('Error loading testimonials:', error);
  }
};

export { loadTestimonials };
