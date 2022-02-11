import getTasks from './helpers/getTasks.js';
import getProjects from './helpers/getProjects.js';

// window.onload para testar os imports
window.onload = async () => {
  const projects = await getProjects('934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(projects);
  const tasks = await getTasks('934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(tasks);
};
