import createNewTask from '../helpers/createNewTask.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';
const tokenErik = '1f6d65f42bdc3c054ef50c71fbd8deeec3095e73';

const button = document.querySelector('.btn-capture');
const input = document.querySelector('#capture')

button.addEventListener('click', async () => await createNewTask(tokenErik, input.value));
