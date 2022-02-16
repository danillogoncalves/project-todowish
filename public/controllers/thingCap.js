import createNewTask from '../helpers/createNewTask.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const button = document.querySelector('.classfy');
const input = document.querySelector('#capture')

button.addEventListener('click', async () => {
  await createNewTask(tokenSheila, input.value);
  location.href = '/';
});

