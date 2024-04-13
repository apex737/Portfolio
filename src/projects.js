'use strict';

// MyWork Filter
const categories = document.querySelector('.categories');
categories.addEventListener('click', (event) => {
	const category = event.target.dataset.category;
	if (category == null) {
		return;
	}
	animation();
	filterCategories(category);
});

function animation() {
	const projectsContainer = document.querySelector('.projects');
	projectsContainer.classList.add('anime-out');
	setTimeout(() => {
		projectsContainer.classList.remove('anime-out');
	}, 200);
}
function filterCategories(category) {
	const projects = document.querySelectorAll('.project');
	projects.forEach((project) => {
		let projectCategory = project.dataset.category;
		if (projectCategory === category || category === 'all') {
			project.style.display = 'block';
		} else {
			project.style.display = 'none';
		}
	});
}
