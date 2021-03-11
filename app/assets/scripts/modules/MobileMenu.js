class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".navbar__menu-icon");
    this.menuContent = document.querySelector(".navbar__links");
    this.bodyElement = document.querySelector('body');
    // this.siteHeader = document.querySelector(".site-header")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("navbar__links--is-visible")
    this.menuIcon.classList.toggle("navbar__menu-icon--close-x")
    this.bodyElement.classList.toggle('noscroll');
    // this.siteHeader.classList.toggle("site-header--is-expanded")
  }

}

export default MobileMenu


/*check if menu is open and scroll back to current y screen position*/

    // if (!this.menuContent.classList.contains("navbar__links--is-visible")) {
    //   const offsetY = window.pageYOffset;
    //   document.body.style.top = `${-offsetY}px`;
    //   document.body.classList.add('noscroll');

    // } else {
    //   const offsetY = Math.abs(parseInt(document.body.style.top || 0, 10));
    //   document.body.classList.remove('noscroll');
    //   document.body.style.removeProperty('top');
    //   window.scrollTo(0, offsetY || 0);
    // }

// get the current page position window.pageYOffset
  // window.scrollTo( 0, window.pageYOffset )
    // window.addEventListener('touchmove', function (event) {
    //   event.preventDefault()
    // }, {passive: false})