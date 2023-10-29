const banner = document.querySelector('#bannerContainer');
const closeBtn = document.querySelector('#closeBtn');
const today = new Date().getDay();

if (today > 3) {
    banner.style.display = 'none'
}

closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
})