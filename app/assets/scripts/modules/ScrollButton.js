
class ScrollButton {
  constructor() {
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
  }

  scrollThrottle() {
    if (window.scrollY + 200 > window.innerHeight ) {
      document.querySelector('.scroll-button').classList.add('button-active')
    } else {
      document.querySelector('.scroll-button').classList.remove('button-active')
    }
  }

}

export default ScrollButton