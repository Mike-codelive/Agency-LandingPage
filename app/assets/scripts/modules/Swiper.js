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
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  navigation: {
  	prevEl: '.button-brand-prev',
  	nextEl: '.button-brand-next', 
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
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.experiences-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  }
})



let els = document.querySelectorAll('*')


els.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
  })
})