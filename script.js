import getTasks from './helpers/getTasks.js';
import getProjects from './helpers/getProjects.js';
import deleteTasks from './helpers/deleteTask.js';

// window.onload para testar os imports
window.onload = async () => {
  const projects = await getProjects('934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(projects);
  const deleteTask = await deleteTasks('5587639212', '934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(deleteTask);
  const tasks = await getTasks('934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(tasks);
};
