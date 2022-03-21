const projectList = document.getElementById('project-list');
const myProjects = [
  { name: 'Form Validator', link: './form-validator.html' },
  { name: 'Movie seat booking', link: './movie-seat-booking.html' },
  { name: 'Search bar', link: './search-bar.html' },
  { name: 'Custom Video Player', link: './custom-video-player.html' },
  { name: 'Exchange Rate Calculator', link: './exchange-rate-calculator.html' },
];

window.onload = () => {
  projectList.innerHTML += getProjects(myProjects);
};

function getProjects(projects) {
  return projects
    .map((project, index) => {
      return `   
        <li class="py-2">
            <a href="${project.link}" target="_blank"><span class="index inline-block">${index + 1}.</span>
            ${project.name}
            </a>
        </li>`;
    })
    .join('');
}
