const userCardTemplate = document.querySelector('[data-user-template]');
const searchInput = document.querySelector('[data-input]');
const userCardsContainer = document.querySelector('[data-user-cards-container]');
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
let users = [];

getUsers();

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
    user.element.classList.toggle('hide', !isVisible);
  });
});

function getUsers() {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      users = data.map((user) => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector('[data-header]');
        const body = card.querySelector('[data-body]');
        header.textContent = user.name;
        body.textContent = user.email;
        userCardsContainer.append(card);

        return {
          name: user.name,
          email: user.email,
          element: card,
        };
      });
    });
}
