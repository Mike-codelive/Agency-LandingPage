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

export let clientsSwiper = new Swiper('.secondary-swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  navigation: {
  	prevEl: '.button-clients-prev',
  	nextEl: '.button-clients-next', 
  },
  autoplay: {
  	delay: 2000,
  	disableOnInteraction: false,
  },
  breakpoints: {
  	640: {
  		slidesPerView: 2,
  		spaceBetween: 50,
  	},
  	768: {
  		slidesPerView: 4,
  		spaceBetween: 50,
  	},
  	924: {
  		slidesPerView: 5,
  		spaceBetween: 50,
  	},
  }

})

export let awardsSwiper = new Swiper('.secondary-swiper-container-awards', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: '.button-awards-prev',
    nextEl: '.button-awards-next', 
  },
  autoplay: {
   delay: 2000,
   disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    924: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }

})

export let experiencesSwiper = new Swiper('.swiper-experiences', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.experiences-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  }
})