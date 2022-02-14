import createNewTask from '../helpers/createNewTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';
const tokenErik = '7838490470f3e27a7e6037026106d47f12d05b89';
const tokenAndre = 'd8e916333409c64935c6ab17c3d5127f31f8649f';

const button = document.querySelector('.classfy');
const input = document.querySelector('#capture')

button.addEventListener('click', async () => await createNewTask(tokenErik, input.value));

