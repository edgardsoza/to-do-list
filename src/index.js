import './style.css';
import { addtodolist, displaylist, clearlist } from './modules/functions.js';

const submitbtn = document.querySelector('.submit');
const clearbutton = document.querySelector('.clearbutton');

submitbtn.addEventListener('click', () => {
  addtodolist();
  displaylist();
});

window.addEventListener('DOMContentLoaded', () => {
  displaylist();
});

clearbutton.addEventListener('click', () => {
  clearlist();
});
