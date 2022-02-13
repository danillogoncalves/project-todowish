import getTasks from '../helpers/getTasks.js';
import getOneTask from '../helpers/getOneTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';

const setId = (id) => {

};

getTasks(tokenSheila).then((response) => {
  const ulTask = document.querySelector('.tasks');
  response.filter((label) => label.label_ids.length === 0)
  .forEach(({ content, id }) => {
    const li = document.createElement('li');
    li.innerHTML = content;
    li.id = id
    li.addEventListener('click', () => setId(id));
    ulTask.appendChild(li);
  });
}); 
