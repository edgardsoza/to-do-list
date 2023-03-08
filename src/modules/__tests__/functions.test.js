/**
 * @jest-environment jsdom
 */

let todolist = [{completed: false,description: 'Play Soccer', index: 1}, {completed: false,description: 'Play Soccer', index: 2}];

window.removetodo = (id) => {
    const filteredArray = todolist.filter((todo) => todo !== todolist[id - 1]);
    reassignedindex(filteredArray); 
    displaylist();
    return filteredArray
  };

  describe('add and delete in to-do-list', () => {
    
	    document.body.innerHTML = 
        '<div class="to-do-list">'+
        '<div class="interactive-list">' + 
        '<li>' +
        '<input class="checkbox" id="1" type="checkbox" onchange="checkboxtodo(id)">' +
        '<input onchange="changetodo(id)" type="text" id="1" class="todotask">'+
        '<span id="1" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'+
        '</li>' +
        '<li>' +
        '<input class="ch" id="1" type="checkbox" onchange="checkboxtodo(id)">' +
        '<input onchange="changetodo(id)" type="text" id="1" class="todotask">'+
        '<span id="1" class="material-symbols-outlined trash" onclick="removetodo(id)">delete</span>'+
        '</li>' +
        '</div>' + 
        '</div>'

    test('delete something', () => {
        filteredArray=window.removetodo(1);
        expect(filteredArray.length).toBe(1);
    })
    test('delete something 2', () => {
        filteredArray=window.removetodo(2);
        expect(filteredArray.length).toBe(1);
    })
});