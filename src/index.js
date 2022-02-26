import './style.css';
import Task from '../modules/Task.js';

const input = document.querySelector('.add-list');
const task = new Task();

input.addEventListener('keypress', (e) => {
  const data = input.value;
  if (e.key === 'Enter') {
    task.add(data);
  }
});

task.showTasks();
