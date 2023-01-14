import getTasks from '../helpers/getTasks.js';
import getLabels from '../helpers/getLabels.js';
import deleteTask from '../helpers/deleteTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '781f034d92276ce1e67bd20bf7222eb8badeea91';
const tokenAndre = '1dc766b8f69263dc80c4c56773deafbb8a534232';
const tokenErik = '7838490470f3e27a7e6037026106d47f12d05b89';

const deleteTaskClick = async (event) => {
  await deleteTask(event.target.id, tokenDanillo);
  location.href = '/';
};

const labelInfo = await getLabels(tokenDanillo)
.then((labels) => labels.map((label) => ({ id: label.id, name: label.name }))); 

getTasks(tokenDanillo).then((response) => {
  const ulTask = document.querySelector('.eHome');
  const { id } = labelInfo.find((label) => label.name === 'casa');
  response.filter((task) => task.label_ids.includes(id))
    .forEach(({ content, id }) => {
    const li = document.createElement('li');
    li.innerHTML = content;
    li.id = id
    li.addEventListener('click', deleteTaskClick);
    ulTask.appendChild(li);
  });
}); 
