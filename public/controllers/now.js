import deleteTask from '../helpers/deleteTask.js';

const buttonConcluded = document.querySelector('.concluded');

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';

const finishTask = async () => {
  const task = document.querySelector('.act-task').firstChild;
  await deleteTask(task.id, tokenDanillo);
  location.href = '/home';
};

buttonConcluded.addEventListener('click', finishTask);
