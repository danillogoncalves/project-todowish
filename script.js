import getTasks from './helpers/getTasks.js';
import getProjects from './helpers/getProjects.js';
import createNewTask from '/helpers/createNewTask.js';
import deleteTasks from './helpers/deleteTask.js';

// Script botão inicial
document.querySelector('.btn-capture').addEventListener('click', () => {
  document.querySelector('.capture-container').id = 'page1';
})

// window.onload para testar os imports
window.onload = async () => {
  // const projects = await getProjects('934509d71c8b03ad32cc2d84eed7585ee2991228');
  // console.log(projects);
  // const deleteTask = await deleteTasks('5587639212', '934509d71c8b03ad32cc2d84eed7585ee2991228');
  // console.log(deleteTask);
  // const tasks = await getTasks('934509d71c8b03ad32cc2d84eed7585ee2991228');
  // console.log(tasks);
  // const newTask = await createNewTask('a5a0ce723d7453794af29a0850bcde7ffbde7aa7', 'Deu?');
  // console.log(newTask);
};
