import getLabels from '../helpers/getLabels.js';
import addLabel from '../helpers/addLabel.js';
import deleteTask from '../helpers/deleteTask.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const buttonTrash = document.querySelector('.trash');
const buttonIncubate = document.querySelector('.incubar');
const buttonReference = document.querySelector('.referencia');

const labelTask = async (event) => {
  const labels = await getLabels(tokenSheila);
  const { id } = labels.find((label) => event.target.className === label.name);
  const task = document.querySelector('.act-task').firstChild;
  await addLabel(tokenSheila, task.innerText, task.id, id);
  location.href = '/';
};

const deleteTaskClick = async () => {
  const task = document.querySelector('.act-task').firstChild;
  await deleteTask(task.id, tokenSheila);
  location.href = '/';
};

buttonTrash.addEventListener('click', deleteTaskClick);
buttonIncubate.addEventListener('click', labelTask);
buttonReference.addEventListener('click', labelTask);
