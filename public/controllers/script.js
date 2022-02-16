import createLabel from '../helpers/createLabel.js';
import { tokenSheila, tokenDanillo, tokenAndre, tokenErik } from './token.js';

const taskUl = document.querySelector('.act-task');
const newLi = localStorage.getItem('task');
taskUl.innerHTML = newLi;

const labelNames = [
  { name: 'incubar', color: 30 },
  { name: 'referencia', color: 39 },
  { name: 'delegar', color: 35 },
  { name: 'próxima ação', color: 32 },
  { name: 'agendar', color: 41 },
  { name: 'casa', color: 45 },
  { name: 'trabalho', color: 34 },
  { name: 'rua', color: 33 }
];

labelNames.forEach(({ name, color }) => {
  createLabel(tokenSheila, name, color);
});