let carousel1Index = 0;
let carousel2Index = 0;
let reviewIndex = 0;

// Function to move the first carousel
function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = 10;
    const itemsVisible = 5;

    // Update index and ensure it wraps around correctly
    carousel1Index = (carousel1Index + direction + Math.ceil(totalItems / itemsVisible)) % Math.ceil(totalItems / itemsVisible); 

    // Translate the carousel based on the index
    const translateX = -carousel1Index * (100 / itemsVisible); // Adjust for 5 items visible
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Auto move the first carousel every 3 seconds
setInterval(() => moveCarousel(1), 3000);


// Function to move the second carousel
function moveCarousel2(direction) {
    const carousel = document.querySelector('.carousel2');
    const totalItems = 10; // Make sure to declare totalItems for the second carousel too
    const itemsVisible = 5;

    // Update index and ensure it wraps around correctly
      carousel2Index = (carousel2Index + direction + Math.ceil(totalItems / itemsVisible)) % Math.ceil(totalItems / itemsVisible); 

    // Translate the second carousel based on the index
    const translateX = -carousel2Index * (100 / itemsVisible);
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Auto move the second carousel every 2.5 seconds
setInterval(() => moveCarousel2(1), 2500);


// Function to show reviews
function showReviews() {
    const slider = document.querySelector('.review-slider');
    const totalReviews = slider.children.length;
    const reviewsPerPage = 3;

    // Update the review index and wrap around correctly
    reviewIndex = (reviewIndex + 1) % Math.ceil(totalReviews / reviewsPerPage);

    // Translate the review slider based on the index
    const transformValue = -reviewIndex * 100;
    slider.style.transform = `translateX(${transformValue}%)`;
}

// Auto move review slider every 2.5 seconds
setInterval(showReviews, 2500);


// Lazy load images when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = () => {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    };

    lazyLoad(); // Load visible images on page load
    window.addEventListener('scroll', lazyLoad); // Load images on scroll
});
