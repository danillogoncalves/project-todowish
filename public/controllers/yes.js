import getLabels from '../helpers/getLabels.js';
import addLabel from '../helpers/addLabel.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const buttonDoItNow = document.querySelector('.fazer_agora');
const buttonToDelegate = document.querySelector('.delegar');
const buttonNextAction = document.querySelector('.próxima_ação');
const buttonToSchedule= document.querySelector('.agendar');

const labelTask = async (event) => {
  const labels = await getLabels(tokenSheila);
  const { id } = labels.find((label) => event.target.className === label.name);
  const task = document.querySelector('.act-task').firstChild;
  await addLabel(tokenSheila, task.innerText, task.id, id);
  if (event.target.className === 'próxima_ação') {
    location.href = '/nextAct';
  } else {
    location.href = '/';
  }
};

const directTo = () => {
  location.href = '/now';
};

buttonDoItNow.addEventListener('click', directTo);
buttonToDelegate.addEventListener('click', labelTask);
buttonNextAction.addEventListener('click', labelTask);
buttonToSchedule.addEventListener('click', labelTask);
