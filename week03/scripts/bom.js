const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const span = document.querySelector('span');


button.addEventListener('click', () => {
  const inputValue = input.value.trim(); //* Remove whitespace around

  if (inputValue) {
    span.textContent = '';
    displayList(inputValue);

    chapterArray.push(inputValue);
    setChapterList();
  } else {
    span.textContent = 'There isn\'t information to add';
    input.focus();
  }

  input.value = ''; //* Clear input field after adding
});


function displayList(text) {
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');

  li.textContent = text;
  deleteBtn.textContent = '❌';

  //! Add event to delete button
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
  });

  //* Add elements to the DOM
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.focus();
};

let chapterArray = getChapterList() || [];
chapterArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
};

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter() {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}