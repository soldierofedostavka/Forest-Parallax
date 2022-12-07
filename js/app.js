window.addEventListener('scroll', e => {
	document.body.style = `--scrollTop: + ${this.scrollY}px`;
})