import getTasks from '../helpers/getTasks.js';
import getOneTask from '../helpers/getOneTask.js';
import createNewTask from '../helpers/createNewTask.js';

const tokenDanillo = 'a5a0ce723d7453794af29a0850bcde7ffbde7aa7';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';

const buttonCassfy = document.querySelector('.classfy'); // botão capturar page2
// cria a task
buttonCassfy.addEventListener('click', () => {
  const taskCapture = document.querySelector('.capture-text'); // textarea do capturar task
  const task = taskCapture.value;
  createNewTask(tokenSheila, task);
});

window.onload = async () => {
  const tarefas = await getTasks(tokenSheila);
  console.log(tarefas);
  const umaTarefa = await getOneTask(tokenSheila, '5591359265');
  console.log(umaTarefa);
  const ul = document.querySelector('.tasks');
  console.log(ul);
};