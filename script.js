import getTasks from './helpers/getTasks.js';
import getOneTask from './helpers/getOneTask.js';
import getProjects from './helpers/getProjects.js';
import createNewTask from '/helpers/createNewTask.js';
import deleteTasks from './helpers/deleteTask.js';
import updateTask from './helpers/updateTask.js';

// Script botão inicial
document.querySelector('.btn-capture').addEventListener('click', () => {
  document.querySelector('.capture-container').id = 'page1';
})

// window.onload para testar os imports
window.onload = async () => {
  // const deleteTask = await deleteTasks('5587639212', '934509d71c8b03ad32cc2d84eed7585ee2991228');
  // console.log(deleteTask);
  // const tasks = await getTasks('a5a0ce723d7453794af29a0850bcde7ffbde7aa7');
  // console.log(tasks);
  // const oneTask = await getOneTask('934509d71c8b03ad32cc2d84eed7585ee2991228', '5589604060');
  // console.log(oneTask);
  // const newTask = await createNewTask('934509d71c8b03ad32cc2d84eed7585ee2991228', 'Deu?');
  // console.log(newTask);
  // const update = await updateTask('a5a0ce723d7453794af29a0850bcde7ffbde7aa7', 'Mudou 3', 5589603762);
  // console.log(update);
};
