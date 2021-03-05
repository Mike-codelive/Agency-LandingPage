class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".navbar__menu-icon")
    this.menuContent = document.querySelector(".navbar__links")
    // this.siteHeader = document.querySelector(".site-header")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("navbar__links--is-visible")
    this.menuIcon.classList.toggle("navbar__menu-icon--close-x")
    // this.siteHeader.classList.toggle("site-header--is-expanded")
  }
}

export default MobileMenu