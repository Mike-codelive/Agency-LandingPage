import '../styles/styles.css'
import 'lazysizes'
import './modules/Swiper';
import MobileMenu from './modules/MobileMenu'
import NavLinkReveal from './modules/NavLinkReveal'
import AnimationPrevent from './modules/AnimationPrevent'
import ScrollButton from './modules/ScrollButton'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'


new NavLinkReveal();
new AnimationPrevent();
new MobileMenu();
new ScrollButton();


if (module.hot) {
	module.hot.accept()
}