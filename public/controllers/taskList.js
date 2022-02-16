import getTasks from '../helpers/getTasks.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const setId = (event) => {
  localStorage.setItem('task', event.target.parentNode.innerHTML);
}

getTasks(tokenSheila).then((response) => {
  const ulTask = document.querySelector('.tasks');
  response.filter((label) => label.label_ids.length === 0)
  .forEach(({ content, id }) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '/firstAct';
    li.innerHTML = content;
    li.id = id
    link.appendChild(li);
    li.addEventListener('click', setId);
    ulTask.appendChild(link);
  });
}); 