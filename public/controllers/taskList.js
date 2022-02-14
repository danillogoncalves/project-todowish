import getTasks from '../helpers/getTasks.js';
// import getOneTask from '../helpers/getOneTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';
const tokenAndre = 'd8e916333409c64935c6ab17c3d5127f31f8649f';

const setId = (event) => {
  localStorage.setItem('task', event.target.parentNode.innerHTML);
}

getTasks(tokenAndre).then((response) => {
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