// JavaScript to toggle the visibility of the mobile menu

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

// const prev = document.querySelector('.carousel-control.prev');
// const next = document.querySelector('.carousel-control.next');
// const carouselInner = document.querySelector('.carousel-inner');
// const items = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;

// prev.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = items.length - 1;
//     }
//     updateCarousel();
// });

// next.addEventListener('click', () => {
//     if (currentIndex < items.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateCarousel();
// });

// function updateCarousel() {
//     const width = carouselInner.clientWidth;
//     carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
// }

const prev = document.querySelector('.carousel-control.prev');
const next = document.querySelector('.carousel-control.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

prev.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    updateCarousel();
});

next.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const width = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

