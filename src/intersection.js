'use strict';

const items = document.querySelectorAll('.header__menu__item');
items.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		const target = item.getAttribute('href');
		const targetSection = document.querySelector(target);
		targetSection.scrollIntoView({
			behavior: 'smooth',
		});
	});
});

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			items.forEach((item) => {
				const itemValue = item.getAttribute('href').split('#')[1];
				if (entry.isIntersecting) {
					if (itemValue === entry.target.id) {
						item.classList.add('active');
					} else {
						item.classList.remove('active');
					}
				} else {
					return;
				}
			});
		});
	},
	{
		threshold: 0.9,
	}
);

const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
	observer.observe(section);
});
