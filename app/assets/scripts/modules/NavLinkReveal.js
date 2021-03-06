class NavLinkReveal {
	constructor() {
		this.navLink = document.getElementById('dropcontent');
		this.content = document.querySelector('.navbar__content');
		this.events()
		// console.log(this.content);
	}

	events() {
		this.navLink.addEventListener("click", () => this.toggleContent());
	}

	toggleContent() {
		this.content.classList.toggle("navbar__content--expanded");
		this.navLink.classList.toggle("navbar__dropcontent--active");
	}
}

export default NavLinkReveal;