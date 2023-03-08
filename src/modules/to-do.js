function localStorageSet() {
  todolist = JSON.parse(localStorage.newtask);
}

const todolist = [];

export function localStorageSave() {
  localStorage.setItem('newtask', JSON.stringify(todolist));
}
