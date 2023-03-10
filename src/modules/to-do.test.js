/**
 * @jest-environment jsdom
 */



import { todolist,addtodolist, removetodo, changetodo, clearlist } from './functions.js';
jest.mock('./to-do');

/*function changetodo (id, changeons) {
    const radix = 10;
    const number = parseInt(id, radix);
    const updatetodo = changeons//document.getElementById(`${id}`).value;
    const updatearray = todolist.map((item) => {
      if (item.index === (number)) {
        item.description = updatetodo;
      }
      return item;
    });
    //localStorage.setItem('newtask', JSON.stringify(updatearray));
    //displaylist();
  };*/

describe('add and delete in to-do-list', () => {
  test('add something', () => {
    document.body.innerHTML = '<div class="input-items">'
        + '<input type="text" id="task" name="task" placeholder="Add to your list..." required>'
        + '<button type="submit" class="submit"><span class="material-symbols-sharp" id="enter">'
        + 'keyboard_return'
        + '</span></button>'
        + '</div>';
    addtodolist();
    expect(todolist.length).toBe(1);
  });

  test('remove something', () => {
    document.body.innerHTML = '<div class="to-do-list">'
        + '<div class="interactive-list">'
        + '<li>'
        + '<input class="checkbox" id="1" type="checkbox" onchange="checkboxtodo(id)">'
        + '<input onchange="changetodo(id)" type="text" id="1" class="todotask">'
        + '<span id="1" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'
        + '</li>'
        + '<li>'
        + '<input class="ch" id="1" type="checkbox" onchange="checkboxtodo(id)">'
        + '<input onchange="changetodo(id)" type="text" id="1" class="todotask">'
        + '<span id="1" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'
        + '</li>'
        + '</div>'
        + '</div>';

    const todolist1 = [{ completed: false, description: 'Play Soccer', index: 1 }, { completed: false, description: 'Play Soccer', index: 2 }];
    const filteredArray1 = removetodo(1, todolist1);
    expect(filteredArray1.length).toBe(1);
  });

  test('change or modified', () => {
    document.body.innerHTML = '<div class="to-do-list">'
    + '<div class="interactive-list">'
    + '<li>'
    + '<input class="checkbox" id="1c" type="checkbox" onchange="checkboxtodo(id)">'
    + '<input onchange="changetodo(id)" type="text" id="1" class="todotask" value = "madame">'
    + '<span id="1s" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'
    + '</li>'
    + '<li>'
    + '<input class="ch" id="2c" type="checkbox" onchange="checkboxtodo(id)">'
    + '<input onchange="changetodo(id)" type="text" id="2" class="todotask">'
    + '<span id="2s" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'
    + '</li>'
    + '</div>'
    + '</div>';
    
    changetodo(1);
    const prend = todolist[0].description;
    expect(prend).toBe('madame');
  });

  test('clear all completed', () => {
    todolist.push({ completed: false, description: 'Play Soccer', index: 2 });
    todolist.push({ completed: true, description: 'Play Soccer2', index: 3 });

    /*retun the new array withou the completed: true*/

    expect(clearlist().length).toBe(2);
  });
});