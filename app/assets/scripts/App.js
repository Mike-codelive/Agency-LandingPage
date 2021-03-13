import '../styles/styles.css'
import 'lazysizes'
import Swiper from './modules/Swiper';
import MobileMenu from './modules/MobileMenu'
// import RevealOnScroll from './modules/RevealOnScroll'
// import StickyHeader from './modules/StickyHeader'
import NavLinkReveal from './modules/NavLinkReveal'
import AnimationPrevent from './modules/AnimationPrevent'


// new StickyHeader();
new NavLinkReveal();
new AnimationPrevent();
// new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
// new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal



let heroSwiper = new Swiper('.swiper-hero', {
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

let brandSwiper = new Swiper('.swiper-brands', {
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
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    924: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }

})


document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}