'use strict';

navItems.forEach((navItem) => {
	navItem.addEventListener('click', (event) => {
		event.preventDefault();
		const target = navItem.getAttribute('href');
		const targetSection = document.querySelector(target);
		targetSection.scrollIntoView({
			behavior: 'smooth',
		});
	});
});

const sectionIds = [
	'#home',
	'#about',
	'#skills',
	'#work',
	'#testimonials',
	'#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector([`href=${id}`]));

const observer = new IntersectionObserver(
	(entries) => {
		// 화면에 보여지는 요소만 담은 배열
		const filteredArray = function (entries) {
			return entries.filter((entry) => entry.isIntersecting);
		};

		if (filteredArray(entries)[0].isIntersecting) {
		} else {
		}
	},
	{
		threshold: 1,
	}
);

// IntersectionObserver로 관찰할 요소 설정
sections.forEach((section) => {
	observer.observe(section);
});
