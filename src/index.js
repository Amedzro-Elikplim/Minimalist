import './style.css';
import { li } from '../modules/List.js';

const storage = localStorage.getItem('list');
const TODOS = JSON.parse(storage);

const showTasks = () => {
  const ul = document.querySelector('.list-container');
  TODOS.sort((a, b) => a.index - b.index);

  for (let i = 0; i < TODOS.length; i += 1) {
    const task = TODOS[i];
    const { description } = task;
    li(description);
    ul.append(li(description));
  }
};

showTasks();