const baseURL = "https://elannytorres.github.io/wdd230/";
const linksURL = "https://elannytorres.github.io/wdd230/data/links.json";

const getLinks = async () => {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
};

const displayLinks = (weeks) => {
    const linkList = document.querySelector('#links-list');

    weeks.forEach(week => {
        let li = document.createElement('li');
        li.innerHTML = `${week.week}: `;
        week.links.forEach((link, index)=> {
            let a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.textContent = link.title;

            index > 0 ? li.append(' | ') : '';
            li.appendChild(a);
        })
        linkList.appendChild(li);
    });
};

getLinks();