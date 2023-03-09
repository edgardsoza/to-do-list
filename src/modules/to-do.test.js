/**
 * @jest-environment jsdom
 */

import { todolist,addtodolist, removetodo } from './functions.js';
jest.mock('./to-do');

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

    let todolist1 = [{ completed: false, description: 'Play Soccer', index: 1 }, { completed: false, description: 'Play Soccer', index: 2 }];
    const filteredArray1 = removetodo(1, todolist1);
    expect(filteredArray1.length).toBe(1);
  });
});
