import getLabels from '../helpers/getLabels.js';
import addLabel from '../helpers/addLabel.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const buttonHome = document.querySelector('.casa');
const buttonWork = document.querySelector('.trabalho');
const buttonStreet= document.querySelector('.rua');

const labelTask = async (event) => {
  const labels = await getLabels(tokenSheila);
  const { id } = labels.find((label) => event.target.className === label.name);
  const task = document.querySelector('.act-task').firstChild;
  await addLabel(tokenSheila, task.innerText, task.id, id);
  location.href = '/';
};

buttonHome.addEventListener('click', labelTask);
buttonWork.addEventListener('click', labelTask);
buttonStreet.addEventListener('click', labelTask);
