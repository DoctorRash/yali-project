document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Quick Meet");
});

const testimonialsContainer = document.querySelector(".testimonials");
const leftBtn = document.querySelector(".slider-btn.left");
const rightBtn = document.querySelector(".slider-btn.right");

let currentIndex = 0;

rightBtn.addEventListener("click", () => {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const totalCards = testimonialCards.length;

  // Calculate the width of a single card
  const cardWidth = testimonialCards[0].offsetWidth + 20; // Add margin

  // Move the slider
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    testimonialsContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }
});

leftBtn.addEventListener("click", () => {
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  // Calculate the width of a single card
  const cardWidth = testimonialCards[0].offsetWidth + 20; // Add margin

  // Move the slider back
  if (currentIndex > 0) {
    currentIndex--;
    testimonialsContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }
});
