import deleteTask from '../helpers/deleteTask.js';

const buttonConcluded = document.querySelector('.concluded');

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '781f034d92276ce1e67bd20bf7222eb8badeea91';
const tokenErik = '7838490470f3e27a7e6037026106d47f12d05b89';

const finishTask = async () => {
  const task = document.querySelector('.act-task').firstChild;
  await deleteTask(task.id, tokenDanillo); 
  location.href = '/home';
};

buttonConcluded.addEventListener('click', finishTask);
