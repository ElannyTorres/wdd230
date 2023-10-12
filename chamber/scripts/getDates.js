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

  timestampField.value = currentTimestamp;
  console.log(timestampField.value)
}

//! Call the setTimestamp function when the form is loaded
document.addEventListener("DOMContentLoaded", setTimestamp);
