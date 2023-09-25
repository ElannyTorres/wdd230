const getYear = () => {
  let yearCopyright = document.querySelector('#copy-year');
  let year = new Date().getFullYear();
  yearCopyright.innerText = `© ${year}`
}

const lastModified = () => {
  let lastModifiedText = document.querySelector('#lastModified');
  lastModifiedText.innerText = ` Last Modification: ${document.lastModified}`
}

getYear();
lastModified();