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