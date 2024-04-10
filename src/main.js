window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	if (this.scrollY > header.offsetHeight) {
		header.classList.add('header--dark');
	} else {
		header.classList.remove('header--dark');
	}
});

window.addEventListener('scroll', function () {
	const home = document.querySelector('#home');
	const items = document.querySelector('.home__items');
	let opacity = 1 - window.scrollY / home.getBoundingClientRect().height;
	items.style.opacity = opacity;
});
