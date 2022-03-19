const projectList = document.getElementById('project-list');
const myProjects = [
  { name: 'Form Validator', link: './form-validator.html' },
  { name: 'Movie seat booking', link: './movie-seat-booking.html' },
  { name: 'Search bar', link: './search-bar.html' },
];

window.onload = () => {
  projectList.innerHTML += getProjects(myProjects);
};

function getProjects(projects) {
  return projects
    .map((project) => {
      return `   
        <li class="py-2">
            <a href="${project.link}" target="_blank">${project.name}</a>
        </li>`;
    })
    .join('');
}
