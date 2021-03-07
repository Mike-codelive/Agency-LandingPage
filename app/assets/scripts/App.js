import '../styles/styles.css'
import 'lazysizes'
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import MobileMenu from './modules/MobileMenu'
// import RevealOnScroll from './modules/RevealOnScroll'
// import StickyHeader from './modules/StickyHeader'
import NavLinkReveal from './modules/NavLinkReveal'

// new StickyHeader();
new NavLinkReveal();
// new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
// new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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