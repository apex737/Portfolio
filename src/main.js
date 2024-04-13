'use strict';

const header = document.querySelector('.header');
const tab = document.querySelector('.header__dropdown');

document.addEventListener('scroll', () => {
	if (window.scrollY > header.offsetHeight) {
		header.classList.add('header--dark');
	} else {
		header.classList.remove('header--dark');
	}
});

document.addEventListener('scroll', () => {
	const home = document.querySelector('#home');
	const items = document.querySelector('.home__items');
	let opacity = 1 - window.scrollY / home.getBoundingClientRect().height;
	items.style.opacity = Math.max(opacity, 0);
});

document.addEventListener('scroll', () => {
	const about = document.querySelector('#about');
	const arrow = document.querySelector('.arrow');
	if (window.scrollY > about.getBoundingClientRect().top) {
		arrow.classList.add('show');
	} else {
		arrow.classList.remove('show');
	}
});

tab.addEventListener('click', () => {
	const nav = document.querySelector('.header__nav');
	nav.classList.toggle('clicked');
});

window.addEventListener('scroll', () => {
	const navClicked = document.querySelector('.header__nav.clicked');
	if (navClicked) {
		navClicked.classList.remove('clicked');
	}
});
