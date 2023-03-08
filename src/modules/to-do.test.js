/**
 * @jest-environment jsdom
 */
import Task from './tasks.js';
//import { descriptioninput,addtodolist, todolist } from './functions';
let todolist = [];

function addtodolist(descriptioninput) {
    const index = todolist.length + 1;
    const completed = false;
    const newtask = new Task(completed, descriptioninput.value, index);
    todolist.push(newtask);
    //localStorage.setItem('newtask', JSON.stringify(todolist));
    descriptioninput.value = '';
  }

describe('add and delete in to-do-list', () => {
    
    test('add something', () => {
        document.body.innerHTML = 
        '<div class="input-items">'+
        '<input type="text" id="task" name="task" placeholder="Add to your list..." required>'+
        '<button type="submit" class="submit"><span class="material-symbols-sharp" id="enter">'+
        'keyboard_return'+
        '</span></button>'+
        '</div>';
        
        const descriptioninput1 = document.getElementById('task');
        addtodolist(descriptioninput1);
        expect(todolist.length).toBe(1);
    })
});

