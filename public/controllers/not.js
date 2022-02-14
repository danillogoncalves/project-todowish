import getLabels from '../helpers/getLabels.js';
import updateTaskLabel from '../helpers/updateTaskLabel.js';
import deleteTask from '../helpers/deleteTask.js';


const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '781f034d92276ce1e67bd20bf7222eb8badeea91';
const tokenErik = '7838490470f3e27a7e6037026106d47f12d05b89';
const tokenAndre = 'd8e916333409c64935c6ab17c3d5127f31f8649f';


const buttonTrash = document.querySelector('.trash');
const buttonIncubate = document.querySelector('.incubar');
const buttonReference = document.querySelector('.referencia');

const labelTask = async (event) => {
  const labels = await getLabels(tokenDanillo);
  const { id } = labels.find((label) => event.target.className === label.name);
  const task = document.querySelector('.act-task').firstChild;
  updateTaskLabel(tokenDanillo, task.innerText, task.id, id);
  location.href = '/home';
};

const deleteTaskClick = async () => {
  const task = document.querySelector('.act-task').firstChild;
  await deleteTask(task.id, tokenDanillo);
  location.href = '/home';
};

buttonTrash.addEventListener('click', deleteTaskClick);
buttonIncubate.addEventListener('click', labelTask);
buttonReference.addEventListener('click', labelTask);
