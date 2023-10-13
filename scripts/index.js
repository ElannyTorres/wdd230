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
if(pass2) {
	pass2.addEventListener('focusout', () => {
		if (pass1.value === pass2.value) {
			console.log('They are the same')
		} else {
			errorMessage.textContent = 'The passwords DON\'T MATCH'
		}
		
	})
}
	
//* RANGE DISPLAY
const rate = document.querySelector('#rate');
const rangevalue = document.querySelector('#rangevalue');

if (rate) {
	rate.addEventListener('change', () => {
		rangevalue.textContent = rate.value;
	})
}

/* localStorage */
if (localStorage.getItem("visitCount") === null) {
  localStorage.setItem("visitCount", 1);
}

const visitCount = parseInt(localStorage.getItem("visitCount"));

localStorage.setItem("visitCount", visitCount + 1);

document.getElementById("visitCount").textContent = visitCount;

/* WEATHER API */
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = -12.05;
const lon = -77.05;
const units = 'imperial'
const apiKey = '610ea6e074b908b16358606b62eb5b25';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;


const apiFetch = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather-icon');
    captionDesc.textContent = `${desc}`
}

apiFetch()