function localStorageSet () {
    todolist = JSON.parse(localStorage.newtask);
}

function displaylist() {
    if (localStorage) {
      localStorageSet();
    } else {
     // todolist = [];
    }
    const interactivelist = document.querySelector('.interactive-list');
    interactivelist.textContent = '';
    for (let i = 0; i < todolist.length; i += 1) {
      const listitem = document.createElement('li');
      const inputitem = document.createElement('input');
      inputitem.checked = todolist[i].completed;
      inputitem.classList.add('checkbox');
      inputitem.setAttribute('id', todolist[i].index);
      inputitem.setAttribute('type', 'checkbox');
      inputitem.setAttribute('onchange', 'checkboxtodo(id)');
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

  export function localStorageSave() {
    localStorage.setItem('newtask', JSON.stringify(todolist));
  }
