const baseURL = "https://elannytorres.github.io/wdd230/chamber";
const linksURL = `${baseURL}data/links.json`;

const getLinks = async () => {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
}