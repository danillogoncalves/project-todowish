import getTasks from '../helpers/getTasks.js';
import getOneTask from '../helpers/getOneTask.js';

const tokenDanillo = 'a5a0ce723d7453794af29a0850bcde7ffbde7aa7';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';

const setId = (id) => {
  getOneTask(tokenSheila, id).then((task) => console.log(task));
  return id;
};

getTasks(tokenSheila).then((response) => {
  const ulTask = document.querySelector('.tasks');
  response.forEach(({ content, id }) => {
    const li = document.createElement('li');
    li.innerHTML = content;
    li.addEventListener('click', () => setId(id));
    ulTask.appendChild(li);
  });
}); 
