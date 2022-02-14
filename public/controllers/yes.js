import getLabels from '../helpers/getLabels.js';
import updateTaskLabel from '../helpers/updateTaskLabel.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';

const buttonDoItNow = document.querySelector('.fazer_agora');
const buttonToDelegate = document.querySelector('.delegar');
const buttonNextAction = document.querySelector('.próxima_ação');
const buttonToSchedule= document.querySelector('.agendar');

const labelTask = async (event) => {
  const labels = await getLabels(tokenDanillo);
  const { id } = labels.find((label) => event.target.className === label.name);
  const task = document.querySelector('.act-task').firstChild;
  updateTaskLabel(tokenDanillo, task.innerText, task.id, id);
  location.href = '/home';
};

const directTo = () => {
  location.href = '/now';
};

buttonDoItNow.addEventListener('click', directTo);
buttonToDelegate.addEventListener('click', labelTask);
buttonNextAction.addEventListener('click', labelTask);
buttonToSchedule.addEventListener('click', labelTask);
