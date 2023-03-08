/**
 * @jest-environment jsdom
 */

import Task from './tasks.js';
jest.mock('./to-do');

import { localStorageSave , displaylist} from './to-do.js';
import { reassignedindex } from './functions.js';




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

  /*function removetodo(id) {
    let filteredArray = todolist.filter((todo) => todo !== todolist[id - 1]);
    reassignedindex(filteredArray);
    return filteredArray;
    
    displaylist();
  };*/

describe('add and delete in to-do-list', () => {

    test('add something', () => {
        document.body.innerHTML = 
        '<div class="input-items">'+
        '<input type="text" id="task" name="task" placeholder="Add to your list..." required>'+
        '<button type="submit" class="submit"><span class="material-symbols-sharp" id="enter">'+
        'keyboard_return'+
        '</span></button>'+
        '</div>';
        
        descriptioninput = document.getElementById('task');
        addtodolist();
        expect(todolist.length).toBe(1);
    });

   /* test('remove something', () => {
        document.body.innerHTML = 
        '<div class="to-do-list">'+
        '<ul class="interactive-list">'+

        '</ul>'+
        '<button class="clearbutton" type="submit">Clear all completed</button>'+
        '</div>';
        todolist = [];
      todolist.push(new Task(false, 'work', 1));
      todolist.push(new Task(false, 'work', 2));
      todolist.push(new Task(false, 'work', 3));
      let tab = removetodo(1);
      
      expect(tab.length).toBe(2);
    })*/
});

