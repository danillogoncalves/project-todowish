import getTasks from '../helpers/getTasks.js';
// import getOneTask from '../helpers/getOneTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '781f034d92276ce1e67bd20bf7222eb8badeea91';
const tokenAndre = '1dc766b8f69263dc80c4c56773deafbb8a534232';
const tokenErik = '7838490470f3e27a7e6037026106d47f12d05b89';

const setId = (event) => {
  localStorage.setItem('task', event.target.parentNode.innerHTML);
}

getTasks(tokenSheila).then((response) => {
  const ulTask = document.querySelector('.ejob');
  response.forEach(({ content, id }) => {
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