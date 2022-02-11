import getTasks from './helpers/getTasks.js';
import getProjects from './helpers/getProjects.js';
import createNewTask from '/helpers/createNewTask.js';

// window.onload para testar os imports
window.onload = async () => {
  const projects = await getProjects('934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(projects);
  const tasks = await getTasks('934509d71c8b03ad32cc2d84eed7585ee2991228');
  console.log(tasks);
  await createNewTask('a5a0ce723d7453794af29a0850bcde7ffbde7aa7', 'Teste 1', await getProjects('a5a0ce723d7453794af29a0850bcde7ffbde7aa7'))
};
