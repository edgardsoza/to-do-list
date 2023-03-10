import Task from './tasks.js';
import { localStorageSave, localStorageSet, displaylist } from './to-do.js';

const todolist = [];

function addtodolist() {
  const index = todolist.length + 1;
  const completed = false;
  const newtask = new Task(completed, document.getElementById('task').value, index);
  todolist.push(newtask);
  localStorageSave();
  document.getElementById('task').value = '';
}

function checkboxtodo(id, todolist) {
  const boxvalue = todolist[id].completed;
  const radix = 10;
  const number = parseInt(id, radix);
  const updatearray = todolist.map((item) => {
    if (item.index === (number)) {
      item.completed = boxvalue;
    }
    return item;
  });
  localStorage.setItem('newtask', JSON.stringify(updatearray));
  displaylist();
  return updatearray;
};

const reassignedindex = (filteredArray) => {
  filteredArray.forEach((item, i) => {
    item.index = i + 1;
  });
};

window.changetodo = (id) => {
  const radix = 10;
  const number = parseInt(id, radix);
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

function removetodo(id, todolist) {
  const filteredArray = todolist.filter((todo) => todo !== todolist[id - 1]);
  reassignedindex(filteredArray);
  localStorageSet();
  return filteredArray;
}

function clearlist() {
  const filteredArray = todolist.filter((todo) => todo.completed === false);
  reassignedindex(filteredArray);
  localStorage.setItem('newtask', JSON.stringify(filteredArray));
  window.location.reload();
}

export {
  displaylist, addtodolist, clearlist, checkboxtodo, reassignedindex, todolist, removetodo,
};