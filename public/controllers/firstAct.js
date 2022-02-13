const taskP = document.querySelector('.act-task');
const newLi = localStorage.getItem('task');
taskP.innerHTML = newLi;
