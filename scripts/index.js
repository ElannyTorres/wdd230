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
const links = document.querySelectorAll('a');
console.log(links);

modeBtn.addEventListener('click', () => {
    if (modeBtn.textContent.includes("DarkMode")) {
		body.style.background = "#2A3B47";
		body.style.color = "whitesmoke";
		nameTitle.style.color = "whitesmoke";
		navigation.style.color = "whitesmoke";
		main.style.background = "#2A3B47";
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

/* FORM */

//* MATCH PASSWORD 
const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const errorMessage = document.querySelector('#error-message');
pass2.addEventListener('focusout', () => {
	if (pass1.value === pass2.value) {
		console.log('They are the same')
	} else {
		errorMessage.textContent = 'The passwords DON\'T MATCH'
	}

})

//* RANGE DISPLAY
const rate = document.querySelector('#rate');
const rangevalue = document.querySelector('#rangevalue');

rate.addEventListener('change', () => {
	rangevalue.textContent = rate.value;
})