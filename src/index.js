import './style.css';
import { li } from '../modules/List.js';

const TODOS = [
  {
    description: 'Washing the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 1,
  },
];

const showTasks = () => {
  const ul = document.querySelector('.list-container');

  for (let i = 0; i < TODOS.length; i += 1) {
    const task = TODOS[i];
    const { description } = task;
    li(description);
    ul.append(li(description));
  }
};

showTasks();