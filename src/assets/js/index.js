import { myProjects } from './content/project-list';

window.onload = () => {
  document.getElementById('project-list').innerHTML += getProjects(myProjects);
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
