const buttonTrash = document.querySelector('.trash');
const buttonIncubate = document.querySelector('.incubar');
const buttonReference = document.querySelector('.referencia');

const labelTask = (event) => {
  console.log(event.target);
};
const deleteTask = (event) => {
  console.log(event.target);
};

buttonTrash.addEventListener('click', deleteTask);
buttonIncubate.addEventListener('click', labelTask);
buttonReference.addEventListener('click', labelTask);