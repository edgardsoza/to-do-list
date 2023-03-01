import './style.css';

const todolist = [
  {
    completed: false,
    description: 'going to the gym',
    index: 0,
  },

  {
    completed: false,
    description: 'take a shower',
    index: 1,
  },
 
  {
    completed: false,
    description: 'have breakfast',
    index: 2,
  },
];

function iteration() {
  const interactivelist = document.querySelector('.interactive-list');
  for (let i = 0; i < todolist.length; i += 1) {
    const listitem = `
    <li class="listitem">
    <input type="checkbox" class="checkbox" id="checkbox" name="listtodo">
    <label id="description" for="todos">${todolist[i].description}</label>
    <span class="material-symbols-outlined" id="more">more_vert</span></li>
    `;
    interactivelist.innerHTML += listitem;
  }
}

document.addEventListener('load', iteration());