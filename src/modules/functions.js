import task from './tasks.js';

let todolist = [];
const descriptioninput = document.getElementById('task');
function addtodolist () {
    const index = todolist.length + 1; 
    const completed = false;
    const newtask = new task(completed, descriptioninput.value, index);
    todolist.push(newtask);
    localStorage.setItem('newtask', JSON.stringify(todolist));
    descriptioninput.value = '';
  };
  
  function displaylist() {
    if (localStorage) {
        todolist = JSON.parse(localStorage.newtask);}
          else {
          todolist = [];
        };
    const interactivelist = document.querySelector('.interactive-list');
    interactivelist.textContent = '';
    for (let i = 0 ; i < todolist.length; i += 1) {
        const listitem = document.createElement('li');
        const inputitem = document.createElement('input');
        inputitem.classList.add('checkbox');
        inputitem.setAttribute('id', 'checkbox');
        inputitem.setAttribute('type', 'checkbox');
        inputitem.value = todolist[i].completed;
        const inputtodo = document.createElement('input');
        inputtodo.setAttribute('type', 'text');
        inputtodo.setAttribute('id', 'todotask');
        inputtodo.setAttribute('onclick', 'changetodo(id)');
        inputtodo.classList.add('todotask');
        inputtodo.textContent = todolist[i].description;
        const indexid = document.createElement('span');
        indexid.classList.add('material-symbols-outlined');
        indexid.setAttribute('id', todolist[i].index);
        indexid.classList.add('trash');
        indexid.setAttribute('onclick', 'removetodo(id)');
        indexid.textContent = 'delete';
        listitem.append(inputitem, inputtodo, indexid);
        interactivelist.appendChild(listitem);
    }
    console.log(todolist)
  };

  const reassignedindex = (filteredArray) => {
    filteredArray.forEach((item, i) => {
    item.index = i +1;
    })};

window.changetodo = (id) => {
    const inputtodo = document.getElementById('todotask').value;
    const updateArray = todolist.map((item) => {
        if (item.index - 1 === id) {
          item.description = inputtodo;
        }});
    localStorage.setItem('newtask', JSON.stringify(updateArray));
};

window.removetodo = (id) => {
  const filteredArray = todolist.filter(todo => todo != todolist[id-1]);
  reassignedindex(filteredArray);
  localStorage.setItem('newtask', JSON.stringify(filteredArray));
  console.log(filteredArray);
  displaylist();
}

  export {displaylist, addtodolist};