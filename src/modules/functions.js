import Task from './tasks.js';

let todolist = [];
const descriptioninput = document.getElementById('task');

function addtodolist() {
  const index = todolist.length + 1;
  const completed = false;
  const newtask = new Task(completed, descriptioninput.value, index);
  todolist.push(newtask);
  localStorage.setItem('newtask', JSON.stringify(todolist));
  descriptioninput.value = '';
}

function displaylist() {
  if (localStorage) {
    todolist = JSON.parse(localStorage.newtask);
  } else {
    todolist = [];
  }
  const interactivelist = document.querySelector('.interactive-list');
  interactivelist.textContent = '';
  for (let i = 0; i < todolist.length; i += 1) {
    const listitem = document.createElement('li');
    const inputitem = document.createElement('input');
    inputitem.value = todolist[i].completed;
    inputitem.classList.add('checkbox');
    inputitem.setAttribute('id', 'checkbox');
    inputitem.setAttribute('type', 'checkbox');
    const inputtodo = document.createElement('input');
    inputtodo.setAttribute('onchange', 'changetodo(id)');
    inputtodo.setAttribute('type', 'text');
    inputtodo.setAttribute('id', todolist[i].index);
    inputtodo.value = todolist[i].description;
    inputtodo.classList.add('todotask');
    const indexid = document.createElement('span');
    indexid.setAttribute('id', todolist[i].index);
    indexid.classList.add('material-symbols-outlined');
    indexid.classList.add('trash');
    indexid.setAttribute('onclick', 'removetodo(id)');
    indexid.textContent = 'delete';
    listitem.append(inputitem, inputtodo, indexid);
    interactivelist.appendChild(listitem);
  }
}

const reassignedindex = (filteredArray) => {
  filteredArray.forEach((item, i) => {
    item.index = i + 1;
  });
};

window.changetodo = (id) => {
  const number = parseInt(id);
  const updatetodo = document.getElementById(`${id}`).value;
  const updatearray = todolist.map((item) => {
    if (item.index === (number)) {
      item.description = updatetodo;
    }
    return item;
  });
  localStorage.setItem('newtask', JSON.stringify(updatearray));
  displaylist();
};

window.removetodo = (id) => {
  const filteredArray = todolist.filter((todo) => todo !== todolist[id - 1]);
  reassignedindex(filteredArray);
  localStorage.setItem('newtask', JSON.stringify(filteredArray));
  displaylist();
};

export { displaylist, addtodolist };