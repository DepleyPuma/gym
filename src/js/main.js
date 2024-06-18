const navMobile = document.querySelector('.nav-mobile__list');
const navMobileAllLinks = navMobile.querySelectorAll('a');
const navMobileAllLiItems = document.querySelectorAll('.nav-mobile__list--item');
const navCloseBtn = document.querySelector('.nav-mobile__close-btn');
const navBurgerBtn = document.querySelector('.nav-mobile__menu');

const openNav = () => {
	let delay = 0;

	navMobile.classList.add('active');

	navMobileAllLiItems.forEach(link => {
		link.classList.add('nav-items-animation');
		link.style.animationDelay = `.${delay}s`;
		delay++;
	});
};

const closeNav = () => {
	navMobile.classList.remove('active');

	navMobileAllLiItems.forEach(link => {
		link.classList.remove('nav-items-animation');
	});
};

navMobileAllLinks.forEach(link => link.addEventListener('click', closeNav));
navBurgerBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
