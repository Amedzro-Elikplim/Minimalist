import { input, icon } from './List.js';

class Task {
  constructor() {
    this.temp = 0;
    this.ul = 0;
    this.tasks = [];
    this.array = [];
    this.num = 0;
  }

  showTasks = () => {
    const storage = localStorage.getItem('tasks');
    const TODOS = storage ? JSON.parse(storage) : [];

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

  refresh() {
    this.removeChild();
    this.showTasks();
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
    this.refresh();
  }

  update(description, i) {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasks[i].description = description;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.refresh();
  }

  updateIndex = (index) => {
    const num = index + 1;
    for (let i = num; i < this.array.length; i += 1) {
      this.array[i].index -= 1;
    }
  }

  delete(description) {
    this.array = JSON.parse(localStorage.getItem('tasks'));
    const index = this.array.findIndex((item) => item.description === description);

    this.updateIndex(index);

    this.array.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.array));
    this.refresh();
  }

  makeTextEditable = (i, ul) => {
    if (ul.hasChildNodes()) {
      const li = ul.children[i];
      const div2 = li.children[0].children[1];
      const icon = li.children[1];

      div2.contentEditable = true;
      div2.focus();

      li.style.backgroundColor = 'rgb(245, 248, 201)';
      icon.className = 'far fa-trash-alt';

      div2.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const description = div2.innerHTML;
          this.update(description, i);
        }
      });

      icon.addEventListener('click', (e) => {
        e.preventDefault();
        const description = div2.innerHTML;
        this.delete(description);
      });
    }
  };

  checked = (option, i) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[i].completed = option;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

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

    li.addEventListener('dragend', (e) => {
      e.preventDefault();
      this.makeTextEditable(i, ul);
    });

    const checkbox = li.children[0].children[0];
    checkbox.addEventListener('change', () => {
      const description = li.children[0].children[1];
      if (checkbox.checked) {
        description.style.textDecoration = 'line-through';
        this.checked(true, i);
      } else {
        description.style.textDecoration = 'none';
        this.checked(false, i);
      }
    });

    return li;
  };

  clearAll() {
    this.removeChild();
    localStorage.clear();
  }
}

export default Task;