import './style.css';
import { addtodolist, displaylist } from './modules/functions.js';

const submitbtn = document.querySelector('.submit');

submitbtn.addEventListener('click', () => {
  addtodolist();
  displaylist();
});

window.addEventListener('DOMContentLoaded', () => {
  displaylist();
});
