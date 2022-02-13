import getTasks from '../helpers/getTasks.js';
import getOneTask from '../helpers/getOneTask.js';
import getProjects from '../helpers/getProjects.js';
import createNewTask from '../helpers/createNewTask.js';
import deleteTasks from '../helpers/deleteTask.js';
import updateTask from '../helpers/updateTask.js';
import getLabels from '../helpers/getLabels.js';
import createLabel from '../helpers/createLabel.js';

const buttonCapt = document.querySelector('.btn-capture'); // botão capturar page1
const buttonCassfy = document.querySelector('.classfy'); // botão capturar page2

const tokenAndre = '1dc766b8f69263dc80c4c56773deafbb8a534232';
const tokenDanillo = 'a5a0ce723d7453794af29a0850bcde7ffbde7aa7';
const tokenErik = '1f6d65f42bdc3c054ef50c71fbd8deeec3095e73';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';

// Script botão inicial
buttonCapt.addEventListener('click', () => {
  // ocultar o page1
  document.querySelector('.inicial-capture').id = 'hide';
  // inserir page 2
  document.querySelector('#capture-thing').classList.remove('hidden');
})

// cria a task
buttonCassfy.addEventListener('click', () => {
  const taskCapture = document.querySelector('.capture-text'); // textarea do capturar task
  const task = taskCapture.value;
  createNewTask(tokenDanillo, task);
});

const labelNames = [
  { name: 'incubar', color: 30 },
  { name: 'referencia', color: 39 },
  { name: 'delegar', color: 35 },
  { name: 'próxima ação', color: 32 },
  { name: 'agendar', color: 41 },
  { name: 'casa', color: 45 },
  { name: 'trabalho', color: 34 },
  { name: 'rua', color: 33 }
];

// criando todas as labels
labelNames.forEach(({ name, color }) => {
  createLabel(tokenDanillo, name, color);
  createLabel(tokenAndre, name, color);
  createLabel(tokenSheila, name, color);
});

const getAllLabels = await getLabels(tokenSheila);
console.log(getAllLabels);

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
