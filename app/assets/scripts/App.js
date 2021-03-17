import '../styles/styles.css'
import 'lazysizes'
import { heroSwiper, brandSwiper } from './modules/Swiper';
import MobileMenu from './modules/MobileMenu'
// import RevealOnScroll from './modules/RevealOnScroll'
// import StickyHeader from './modules/StickyHeader'
import NavLinkReveal from './modules/NavLinkReveal'
import AnimationPrevent from './modules/AnimationPrevent'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'


// new StickyHeader();
new NavLinkReveal();
new AnimationPrevent();
new MobileMenu();
// new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
// new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)


// let modal
// document.querySelectorAll(".open-modal").forEach(el => {
//   el.addEventListener("click", e => {
//     e.preventDefault()
//     if (typeof modal == "undefined") {
//       import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
//         modal = new x.default()
//         setTimeout(() => modal.openTheModal(), 20)
//       }).catch(() => console.log("There was a problem."))
//     } else {
//       modal.openTheModal()
//     }
//   })
// })

if (module.hot) {
	module.hot.accept()
}