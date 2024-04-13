// script.js
"use strict";

import { loadTestimonials } from './fetchTestimonials.js'; // Importando a função loadTestimonials
import slider from './sliderAnimations.js'; // Importando a função slider

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////
// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  //Method for all browser support
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  //Modern way to scroll
  // section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////
// Page navigation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //Mathcing stratagy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

///////////////////////////////////
// Operation contents
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  //Removing the active class
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  //Adding the active class
  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing an "Argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////
//Sticky navigation
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

///////////////////////////////////
// Lazy image loading
const featureImage = document.querySelectorAll(".features__img");

const imageLoader = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imageLoader, {
  root: null,
  threshold: 0.5,
  rootMargin: "30px",
});

featureImage.forEach((img) => imageObserver.observe(img));

//////////////////////////////////
// Load testimonials and slider animations
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll(".slide");
  const btnNext = document.querySelector(".slider__btn--right");
  const btnPrev = document.querySelector(".slider__btn--left");
  const dotContainer = document.querySelector(".dots");

  loadTestimonials(); // Carrega os testemunhos

  // Check if all required elements are found
  if (slides.length > 0 && btnNext && btnPrev && dotContainer) {
    // All elements are found, proceed with slider initialization
    slider();
  } else {
    console.error("Slider initialization failed ####: One or more elements not found.");
  }
});