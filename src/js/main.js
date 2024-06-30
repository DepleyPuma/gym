const navMobile = document.querySelector('.nav-mobile__list');
const navMobileAllLinks = navMobile.querySelectorAll('a');
const navMobileAllLiItems = document.querySelectorAll('.nav-mobile__list--item');
const navCloseBtn = document.querySelector('.nav-mobile__close-btn');
const navBurgerBtn = document.querySelector('.nav-mobile__menu');
const consultationBtn = document.querySelector('#consultations');
const personalTrainingOnlineBtn = document.querySelector('#online');
const personalTrainingBtn = document.querySelector('#personalTraining');
const contactSection = document.querySelector('.contact');
const selectOptionInput = document.querySelector('#selectedOption');
const optionsArr = [...document.querySelectorAll('option')].map(option => option.value);

let option;

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

const setOption = selectedOption => {
	const index = optionsArr.indexOf(selectedOption);
	option = selectedOption;
	selectOptionInput.selectedIndex = index;

	const scrollToContactSection = contactSection.offsetTop;

	selectOptionInput.focus();

	window.scrollTo(0, scrollToContactSection);
};

consultationBtn.addEventListener('click', () => setOption(optionsArr[1]));
personalTrainingOnlineBtn.addEventListener('click', () => setOption(optionsArr[2]));
personalTrainingBtn.addEventListener('click', () => setOption(optionsArr[3]));

selectOptionInput.addEventListener('change', e => {
	option = e.currentTarget.value;
});

navMobileAllLinks.forEach(link => link.addEventListener('click', closeNav));
navBurgerBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
