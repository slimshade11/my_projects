const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function doubleMoney() {
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });
  updateDOM();
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

function addData(obj) {
  data.push(obj);
  updateDOM();
}

function showMillionaires() {
  data = data.filter((item) => item.money > 999999);

  updateDOM();
}

function calculateWealth() {
  const wealth = data.reduce((acc, item) => (acc += item.money), 0);

  const wealthElement = document.createElement('div');
  wealthElement.innerHTML = `<h3 class='mt-5'>Total Wealth: <strong>${formatter.format(wealth)}</strong></h3>`;
  main.appendChild(wealthElement);
}

function updateDOM(providedData = data) {
  main.innerHTML = '<h2 class="flex justify-content-between mb-4"><strong>Person</strong>Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('flex', 'justify-content-between', 'mb-2');
    element.innerHTML = `<strong>${item.name}</strong>${formatter.format(item.money)}`;
    main.appendChild(element);
  });
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
