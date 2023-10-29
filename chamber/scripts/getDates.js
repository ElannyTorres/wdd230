const lastModified = () => {
  let lastModifiedText = document.querySelector('#lastModified');
  lastModifiedText.innerText = ` Last Modification: ${document.lastModified}`
}

lastModified();

/* Hamburger Menu */
const mainNav = document.querySelector('.navigation');
const hamBtn = document.querySelector('#menu');

hamBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamBtn.classList.toggle('show');
})

/* localStorage */
const lastVisit = localStorage.getItem('lastVisit');
const visitMessage = document.querySelector('#visitInfo');
let message = '';

if (!lastVisit) {
  localStorage.setItem('lastVisit', new Date().toISOString());
  message = "Welcome! Let us know if you have any questions.";
} else {
  
  const currentDate = new Date();
  const lastVisitDate = new Date(lastVisit);
  const timeDifference = currentDate - lastVisitDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 1) {
    message = "You last visited 1 day ago.";
  } else if (daysDifference < 1) {
    message = "Back so soon! Awesome!";
  } else {
    message = `You last visited ${daysDifference} days ago.`;
  }

  localStorage.setItem('lastVisit', currentDate.toISOString());
}

if (visitMessage) visitMessage.innerText = message;

//* TIMESTAMP IN FORM
function setTimestamp() {
  const timestampField = document.getElementById("timestamp");
  const currentTimestamp = new Date().toISOString();

  if (timestampField ) {timestampField.value = currentTimestamp;
  console.log(timestampField.value)}
}

//! Call the setTimestamp function when the form is loaded
document.addEventListener("DOMContentLoaded", setTimestamp);

//* API Weather
const lat = -13.16;
const lon = -72.54;
const units= 'imperial';
const apiKey= '610ea6e074b908b16358606b62eb5b25';
const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

const getWeather = async () => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      // Filtra los datos para obtener solo los pronósticos al mediodía de los próximos tres días
      const middayForecasts = data.list.filter(item => {
        return item.dt_txt.includes('12:00:00');
      });
      displayWeather(middayForecasts)
    }
  } catch (error) {
    console.log(error);
  }
}

const displayWeather = (list) => {
  const weatherList = document.querySelector('#weatherList');
  if (weatherList) {
    list.forEach(weather => {
      let li = document.createElement('li');
      let date = document.createElement('strong');
      let temp = document.createElement('p');
      let icon = document.createElement('img');
      date.innerHTML = new Date(weather['dt_txt']).toDateString();
      temp.innerHTML = weather.main.temp + '°F';
      const iconsrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
      icon.setAttribute('src', iconsrc);
      icon.setAttribute('alt', 'weather-icon');
      li.appendChild(date);
      li.appendChild(temp);
      li.appendChild(icon);
      weatherList.appendChild(li)
    });
  }
}

getWeather();


//! Spotlights
const baseURL = "https://elannytorres.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

const getMembers = async () => {
    const response = await fetch(membersURL);
    const data = await response.json();
    filterMembers(data.members);
}

const filterMembers = (data) => {
  let membership = ['Silver', 'Gold'];
  let dataFiltered = data.filter(member => membership.includes(member['membership-level']));
  displaySpotlight(dataFiltered);
}

const displaySpotlight = (list) => {
  const [number1, number2] = getRandomNum();
  let listToDisplay = [list[number1], list[number2]]
  const memberContainer = document.querySelector('#cardContainer-spotlights');
    listToDisplay.forEach((member, index) => {
        const div = document.createElement('div');
        div.setAttribute('class', `memberCard ${member['membership-level'].toLowerCase()}`);
        const icon = document.createElement('img');
        const name = document.createElement('h4');
        const address = document.createElement('h5');
        const phoneNumbers = document.createElement('h5');
        const url = document.createElement('h5');
        const membership = document.createElement('h5');
        const email = document.createElement('h5');


        icon.innerHTML = member.icon;
        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phoneNumbers.innerHTML = member.phoneNumbers;
        url.innerHTML = member.URLs;
        membership.innerHTML = member['membership-level'];
        email.innerHTML = member.email;
        div.appendChild(icon);
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phoneNumbers);
        div.appendChild(url);
        div.appendChild(membership);
        div.appendChild(email);
        memberContainer.appendChild(div);
    });
}

function getRandomNum() {
  const randomNumber1 = Math.floor(Math.random() * 5);
  let randomNumber2 = Math.floor(Math.random() * 5);
  while (randomNumber1 === randomNumber2) {
    randomNumber2 = Math.floor(Math.random() * 5);
  }
  return [randomNumber1, randomNumber2];
}

getMembers()