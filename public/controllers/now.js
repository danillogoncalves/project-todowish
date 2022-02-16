import deleteTask from '../helpers/deleteTask.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const buttonConcluded = document.querySelector('.concluded');

const finishTask = async () => {
  const task = document.querySelector('.act-task').firstChild;
  await deleteTask(task.id, tokenSheila); 
  location.href = '/';
};

buttonConcluded.addEventListener('click', finishTask);
