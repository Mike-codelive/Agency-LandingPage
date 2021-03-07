class NavLinkReveal {
	constructor() {
		this.navLink = document.querySelector('.navbar__links');
		this.contents = document.querySelectorAll('.navbar__content');
		this.dropContent = document.querySelectorAll('.navbar__dropcontent');
		this.events();
	}

	events() {
		this.navLink.addEventListener("click", e => this.toggleContent(e));
	}

	toggleClasses(e) {
		e.target.nextElementSibling.classList.toggle('navbar__content--expanded');
		e.target.classList.toggle("navbar__dropcontent--active");
	}

	toggleContent(e) {
		if (e.target.classList.contains('navbar__dropcontent--active')) {
			this.toggleClasses(e);
		}	else if (e.target.classList.contains('navbar__dropcontent')) {
			this.contents.forEach(item => item.classList.remove('navbar__content--expanded'));
			this.dropContent.forEach(item => item.classList.remove('navbar__dropcontent--active'));

			this.toggleClasses(e);
		}
	}

}

export default NavLinkReveal;