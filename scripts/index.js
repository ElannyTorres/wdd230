/* Hamburger Menu */
const mainNav = document.querySelector('.navigation');
const hamBtn = document.querySelector('#menu');

hamBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamBtn.classList.toggle('show');
})

/* Dark Mode */
const modeBtn = document.querySelector('#mode');

const body = document.querySelector('body');
const header = document.querySelector('header');
const nameTitle = document.querySelector('#name');
const main = document.querySelector('main');
const navigation = document.querySelector('.navigation-large');

modeBtn.addEventListener('click', () => {
    if (modeBtn.textContent.includes("DarkMode")) {
		body.style.background = "#0c1915";
		body.style.color = "whitesmoke";
		nameTitle.style.color = "whitesmoke";
		navigation.style.color = "whitesmoke";
		main.style.background = "#0c1915";
		main.style.color = "whitesmoke";
		modeBtn.textContent = "LightMode";
	} else {
		body.style.background = "#eee";
		nameTitle.style.color = "#0c1915";
		main.style.background = "#eee";
		main.style.color = "#000";
		modeBtn.textContent = "DarkMode";
	}
})