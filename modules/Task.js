import { input, icon } from './List.js';

class Task {
  constructor() {
    this.temp = 0;
    this.ul = 0;
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

  makeTextEditable = (div2, li, i, ul) => {
    if (ul.hasChildNodes()) {
      const li = ul.children[i];
      const div2 = li.children[0].children[1];
      const icon = li.children[1];

      div2.contentEditable = true;
      div2.focus();

      li.style.backgroundColor = 'rgb(243, 243, 243)';
      icon.className = 'fa fa-heart';
    }
  };

  createList = (description, i) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const ul = document.querySelector('.list-container');

    li.draggable = true;
    div2.className = 'editable';
    div.className = 'checkbox-description-container';

    div2.innerHTML = description;
    div.append(input('checkbox'), div2);
    li.append(div, icon('fas fa-ellipsis-v'));

    li.className = 'list';

    li.addEventListener('click', (e) => {
      e.preventDefault();
      this.makeTextEditable(div2, li, i, ul);
    });

    return li;
  };

  showTasks = () => {
    const storage = localStorage.getItem('tasks');
    const TODOS = JSON.parse(storage);

    const ul = document.querySelector('.list-container');
    TODOS.sort((a, b) => a.index - b.index);

    for (let i = 0; i < TODOS.length; i += 1) {
      const task = TODOS[i];
      const { description } = task;

      const li = this.createList(description, i);
      ul.appendChild(li);
    }
  };

  removeChild() {
    this.ul = document.querySelector('.list-container');
    while (this.ul.firstChild) {
      this.ul.removeChild(this.ul.firstChild);
    }
  }

  clearAll() {
    this.removeChild();
    localStorage.clear();
  }

  // update() {

  // };
}

export default Task;