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
  coverflowEffect: {
    depth: 0,
    slideShadows: false,
  },
  scrollbar: {
  	el: '.swiper-scrollbar',
  	draggable: false,
  },
  effect: 'fade',
  fadeEffect: {
  	crossFade: true
  }
});


export default swiper