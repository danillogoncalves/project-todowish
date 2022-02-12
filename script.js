import getTasks from './helpers/getTasks.js';
import getOneTask from './helpers/getOneTask.js';
import getProjects from './helpers/getProjects.js';
import createNewTask from '/helpers/createNewTask.js';
import deleteTasks from './helpers/deleteTask.js';
import updateTask from './helpers/updateTask.js';
import getLabels from './helpers/getLabels.js';
import createLabel from './helpers/createLabel.js';

// Script botão inicial
document.querySelector('.btn-capture').addEventListener('click', () => {
  document.querySelector('.capture-container').id = 'page1';
})

// cria a label incubar
const createLabels = await createLabel('934509d71c8b03ad32cc2d84eed7585ee2991228', 'incubar', 30);
console.log(createLabels);
const createLabels1 = await createLabel('a5a0ce723d7453794af29a0850bcde7ffbde7aa7', 'incubar', 30);
console.log(createLabels1);
const getLabels1 = await getLabels('a5a0ce723d7453794af29a0850bcde7ffbde7aa7');
console.log(getLabels1);

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
