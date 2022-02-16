import getTasks from '../helpers/getTasks.js';
import getLabels from '../helpers/getLabels.js';
import deleteTask from '../helpers/deleteTask.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const deleteTaskClick = async (event) => {
  await deleteTask(event.target.id, tokenSheila);
  location.href = '/';
};

const labelInfo = await getLabels(tokenSheila)
.then((labels) => labels.map((label) => ({ id: label.id, name: label.name }))); 

getTasks(tokenSheila).then((response) => {
  const ulTask = document.querySelector('.eJob');
  const { id } = labelInfo.find((label) => label.name === 'trabalho');
  response.filter((task) => task.label_ids.includes(id))
    .forEach(({ content, id }) => {
    const li = document.createElement('li');
    li.innerHTML = content;
    li.id = id
    li.addEventListener('click', deleteTaskClick);
    ulTask.appendChild(li);
  });
}); 
