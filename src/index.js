import './style.css';
import {addtodolist, displaylist} from './modules/functions.js';

const submitbtn = document.querySelector('.submit');
const trashbtn = document.querySelector('.trash');

submitbtn.addEventListener('click', () => {
  addtodolist();
  displaylist();
});

window.addEventListener('DOMContentLoaded', () => {
    displaylist();
  });
