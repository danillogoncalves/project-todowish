import getLabels from '../helpers/getLabels.js';
import addLabel from '../helpers/addLabel.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '781f034d92276ce1e67bd20bf7222eb8badeea91';
const tokenErik = '7838490470f3e27a7e6037026106d47f12d05b89';
const tokenAndre = 'd8e916333409c64935c6ab17c3d5127f31f8649f';

const buttonDoItNow = document.querySelector('.fazer_agora');
const buttonToDelegate = document.querySelector('.delegar');
const buttonNextAction = document.querySelector('.próxima_ação');
const buttonToSchedule= document.querySelector('.agendar');

const labelTask = async (event) => {
  const labels = await getLabels(tokenDanillo);
  const { id } = labels.find((label) => event.target.className === label.name);
  const task = document.querySelector('.act-task').firstChild;
  await addLabel(tokenDanillo, task.innerText, task.id, id);
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
