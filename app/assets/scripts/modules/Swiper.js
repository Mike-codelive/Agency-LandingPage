import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
  	delay: 3500,
  	disableOnInteraction: false,
  },
  scrollbar: {
  	el: '.swiper-scrollbar',
  	draggable: false,
  },
  effect: 'fade',
  fadeEffect: {
  	crossFade: true
  }
  // preventInteractionOnTransition: false,

  // spaceBetween: 30,
  // centeredSlides: true,

  // pagination: {
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
  // navigation: {
  // 	nextEl: '.swiper-button-next',
  // 	prevEl: '.swiper-button-prev',
  // },

});


export default swiper