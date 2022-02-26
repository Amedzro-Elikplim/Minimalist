import { input, icon } from './List.js';

class Utility {
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

makeTextEditable = (div2, li) => {
  div2.contentEditable = true;
  li.style.backgroundColor = 'rgb(243, 243, 243)';
  div2.focus();

  const icon = document.querySelector('.icon');
  icon.className = 'fa fa-heart';
};

  createList = (description, i) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const div2 = document.createElement('div');

    li.draggable = true;
    div2.className = 'editable';
    div.className = 'checkbox-description-container';

    div2.innerHTML = description;
    div.append(input('checkbox'), div2);
    li.append(div, icon('fas fa-ellipsis-v'));

    li.className = 'list';

    li.addEventListener('click', (e) => {
      e.preventDefault();
      this.makeTextEditable(div2, li);
    });

    return li;
  }

  removeChild() {
    this.ul = document.querySelector('.list-container');
    while (this.ul.firstChild) {
      this.ul.removeChild(this.ul.firstChild);
    }
  }

  delete() {
    this.removeChild();
    localStorage.clear();
  }

  // update() {

  // };
}

export default Utility;