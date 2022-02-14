import getTasks from '../helpers/getTasks.js';
// import getOneTask from '../helpers/getOneTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';
const tokenAndre = '1dc766b8f69263dc80c4c56773deafbb8a534232';

const setId = (event) => {
  localStorage.setItem('task', event.target.parentNode.innerHTML);
}

getTasks(tokenDanillo).then((response) => {
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
