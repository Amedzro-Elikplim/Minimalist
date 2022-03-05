const Task = require('./modules/Task.js');
const { saveToLocalStorage, getFromLocalStorage } = require('./modules/Storage.js');

const task = new Task();
const array = [
  {
    description: 'Go to work',
    index: 1,
    completed: false,
  },
  {
    description: 'Go to School',
    index: 2,
    completed: true,
  },
  {
    description: 'Go to home',
    index: 3,
    completed: false,
  },
];

beforeEach(() => {
  saveToLocalStorage('tasks', array);
});

describe('updateIndex', () => {
  test('Test updateIndex', () => {
    const result1 = {
      description: 'Go to home',
      index: 2,
      completed: false,
    };

    const result2 = {
      description: 'Go to home',
      index: 1,
      completed: false,
    };

    expect(task.updateIndex(0, array)).toContainEqual(result1);
    expect(task.updateIndex(1, array)).toContainEqual(result2);
  });
});

describe('add list to task in localStorage', () => {
  test('save to localStorage', () => {
    saveToLocalStorage('tasks', array);
    expect(JSON.parse(window.localStorage.getItem('tasks'))).toEqual(array);
  });
});

describe('delete task', () => {
  const ul = document.createElement('ul');
  ul.className = 'list-container';
  ul.innerHTML = `
    <li> Go to work </li>
    <li> Buy groceries </li>
  `;

  test('remove all task from list', () => {
    document.body.appendChild(ul);
    expect(task.removeChild()).toBe(undefined);
  });

  const result = {
    description: 'Go to work',
    index: 1,
    completed: false,
  };

  test('remove completed task from list', () => {
    const testTask = new Task();
    expect(testTask.removeCompleted()).toContainEqual(result);
  });
});

describe('update', () => {
  test('update task description of second list', () => {
    const updated = task.update('Take a break', 1);
    const tasks = getFromLocalStorage('tasks');

    expect(tasks[1]).toEqual(updated);
  });

  test('update task description of first list', () => {
    const updated = task.update('Walk the dog', 0);
    const tasks = getFromLocalStorage('tasks');

    expect(tasks[0]).toEqual(updated);
  });
});

describe('update completed status', () => {
  test('check completed status of first list to true', () => {
    const status = task.checked(true, 1);
    const tasks = getFromLocalStorage('tasks');

    expect(status).toEqual(tasks[1].completed);
  });

  test('check completed status of second list to false', () => {
    const status = task.checked(false, 1);
    const tasks = getFromLocalStorage('tasks');

    expect(status).toEqual(tasks[1].completed);
  });
});