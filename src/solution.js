'use strict';

const sectionIds = [
	'#home',
	'#about',
	'#skills',
	'#work',
	'#testimonial',
	'#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id)); // section 태그 배열
const navItems = sectionIds.map(
	(
		id // anchor 태그 배열
	) => document.querySelector(`[href="${id}"]`)
);

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

let activeNavItem = navItems[0];
// 섹션의 visibility에 대한 boolean을 배열에 mapping (sections, navItems의 index와 일치시키기 위함)
const isVisible = sectionIds.map(() => false); // 모든 섹션의 visibility의 default를 false로 지정
const options = {
	rootMargin: '-20% 0px 0px 0px', // intersect 감지를 빠르게 처리
	threshold: [0, 0.98], // contact 감지
};
const observer = new IntersectionObserver(callback, options);

// IntersectionObserver로 관찰할 요소 설정
sections.forEach((section) => {
	observer.observe(section);
});

function callback(entries) {
	let isLastVisible;
	entries.forEach((entry) => {
		// 섹션의 visibility를 배열에 display
		const index = sectionIds.indexOf(`#${entry.target.id}`);
		isVisible[index] = entry.isIntersecting;

		isLastVisible =
			index === sectionIds.length - 1 && // 마지막 관찰요소이고
			entry.isIntersecting && // 뷰포트에 보여지는데
			entry.intersectionRatio >= 0.95; // 99% 이상 보여지는 경우
		// 마지막 Section이면 LastIndex를, 그렇지 않으면 First Section Index를 반환
		const navIndex = isLastVisible
			? sectionIds.length - 1
			: findFirstIntersecting(isVisible);

		selectNavItems(navIndex);
	});
}
// First Section Index를 return하는 함수
// isVisible 배열의 Item 중, 값이 true이면서 index가 작은 section의 Index
function findFirstIntersecting(intersections) {
	const index = intersections.indexOf(true);
	return index >= 0 ? index : 0;
}

function selectNavItems(navIndex) {
	const navItem = navItems[navIndex];
	activeNavItem.classList.remove('active');
	activeNavItem = navItem;
	activeNavItem.classList.add('active');
}
