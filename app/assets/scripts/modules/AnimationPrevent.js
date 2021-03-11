class AnimationPrevent {
	constructor() {
		this.events()
	}

	events() {
		window.addEventListener('resize', () => this.toggleClass());
	}

	removeClass() {
		setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
		}, 400);
	}

	toggleClass() {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(this.removeClass());
		this.removeClass();
	}

}

export default AnimationPrevent;