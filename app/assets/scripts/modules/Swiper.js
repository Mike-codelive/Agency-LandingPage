import Swiper, { Navigation, Pagination, Autoplay, EffectFade  } from 'swiper/core';

// Install modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade ]);

// import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export let heroSwiper = new Swiper('.swiper-hero', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
  	delay: 3500,
  	disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
  	crossFade: true
  }
})

export let brandSwiper = new Swiper('.swiper-brands', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  navigation: {
  	prevEl: '.button-brand-prev',
  	nextEl: '.button-brand-next', 
  },
  autoplay: {
  	delay: 1500,
  	disableOnInteraction: false,
  },
  breakpoints: {
  	640: {
  		slidesPerView: 2,
  		spaceBetween: 0,
  	},
  	768: {
  		slidesPerView: 4,
  		spaceBetween: 0,
  	},
  	924: {
  		slidesPerView: 4,
  		spaceBetween: 0,
  	},
  }

})