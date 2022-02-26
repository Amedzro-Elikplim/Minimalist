import { li } from './List.js';

class Utility {
  constructor() {
    this.temp = 0;
  }

  add(data) {
    this.temp = localStorage.getItem('tasks');
    const arr = this.temp ? JSON.parse(this.temp) : [];

    const info = {
      description: data,
      index: arr.length + 1,
      completed: false,
    };

    arr.push(info);
    localStorage.setItem('tasks', JSON.stringify(arr));
    this.showTasks();

    window.location.reload();
  }

  showTasks = () => {
    const storage = localStorage.getItem('tasks');
    const TODOS = JSON.parse(storage);

    const ul = document.querySelector('.list-container');
    TODOS.sort((a, b) => a.index - b.index);

    for (let i = 0; i < TODOS.length; i += 1) {
      const task = TODOS[i];
      const { description } = task;
      li(description);
      ul.append(li(description));
    }
  };

  // delete() {
  // };

  // update() {

  // };
}

export default Utility;