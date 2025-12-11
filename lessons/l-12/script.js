import { SWIPER_CONFIG, GLIGHTBOX_CONFIG } from './configs.js';
import { getRandomNumber } from './get-random-number.js'


const heroCarousel = new Swiper(".hero-gallery", SWIPER_CONFIG);

const lightbox = GLightbox(GLIGHTBOX_CONFIG);



// console.log(getRandomNumber());

// localStorage.setItem('theme', 'dark');

// const myLocalUser = localStorage.getItem('theme');

// console.log(myLocalUser);
