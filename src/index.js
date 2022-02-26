import './style.css';
import Task from '../modules/Task.js';

const input = document.querySelector('.add-list');
const clear = document.querySelector('.clear-all');

const task = new Task();

input.addEventListener('keypress', (e) => {
  const data = input.value;
  if (e.key === 'Enter') {
    task.add(data);
    input.value = '';
  }
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  task.clearAll();
});

task.showTasks();
