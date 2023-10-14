const baseURL = "https://elannytorres.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

const getMembers = async () => {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMember(data.members);
}

getMembers();
const displayMember = (members) => {
    const memberContainer = document.querySelector('#members-container');
    members.forEach((member, index) => {
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

/* btn.addEventListener('click', () => {
    console.log(btn.textContent)
}) */
function toggleClass() {
    const btn = document.querySelector('.myButton');
    console.log(btn.textContent)
    if (btn.textContent === 'List View') {
        btn.textContent = 'Grid View'
    } else {
        btn.textContent = 'List View'
    }
    var membersContainer = document.getElementById('members-container');
    membersContainer.classList.toggle('grid-view');
    membersContainer.classList.toggle('list-view');
}





