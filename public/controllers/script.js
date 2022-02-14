import createLabel from '../helpers/createLabel.js';

const tokenDanillo = 'c6de81bf5190fe4984d9817473cebac3cbfae44a';
const tokenSheila = '934509d71c8b03ad32cc2d84eed7585ee2991228';
const tokenAndre = 'd8e916333409c64935c6ab17c3d5127f31f8649f';

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
  createLabel(tokenAndre, name, color);
});