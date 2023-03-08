/**
 * @jest-environment jsdom
 */
import { localStorageSave} from './to-do.js';
import { reassignedindex } from './functions.js';

import Task from './tasks.js';
jest.mock('./to-do');

let todolist = [];
let descriptioninput = '';
function addtodolist() {
  const index = todolist.length + 1;
  const completed = false;
  const newtask = new Task(completed, descriptioninput.value, index);
  todolist.push(newtask);
  localStorageSave();
  descriptioninput.value = '';
}

window.removetodo = (id) => {
  const filteredArray = todolist.filter((todo) => todo !== todolist[id - 1]);
  reassignedindex(filteredArray); 
  //displaylist();
  return filteredArray;
};

describe('add and delete in to-do-list', () => {
    test('add something', () => {
    document.body.innerHTML = '<div class="input-items">'
        +'<input type="text" id="task" name="task" placeholder="Add to your list..." required>'
        +'<button type="submit" class="submit"><span class="material-symbols-sharp" id="enter">'
        +'keyboard_return'
        +'</span></button>'
        +'</div>';

    descriptioninput = document.getElementById('task');
    addtodolist();
    expect(todolist.length).toBe(1);
  });

   test('remove something', () => {
    document.body.innerHTML = '<div class="to-do-list">'
        +'<div class="interactive-list">'
        +'<li>' 
        +'<input class="checkbox" id="1" type="checkbox" onchange="checkboxtodo(id)">' 
        +'<input onchange="changetodo(id)" type="text" id="1" class="todotask">'
        +'<span id="1" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'
        +'</li>' 
        +'<li>' 
        +'<input class="ch" id="1" type="checkbox" onchange="checkboxtodo(id)">' 
        +'<input onchange="changetodo(id)" type="text" id="1" class="todotask">'
        +'<span id="1" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'
        +'</li>' 
        +'</div>'
        +'</div>';

    todolist = [{ completed: false, description: 'Play Soccer', index: 1 } , { completed: false, description: 'Play Soccer', index: 2 }];
    const filteredArray1 = window.removetodo(1);
    expect(filteredArray1.length).toBe(1);
  });
});
