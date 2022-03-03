const Task = require('./modules/Task.js');
const { saveToLocalStorage } = require('./modules/Storage.js');

describe('updateIndex', () => {
  const array = [
    {
      description: 'Go to work',
      index: 1,
      completed: false,
    },
    {
      description: 'Go to School',
      index: 2,
      completed: false,
    },
    {
      description: 'Go to home',
      index: 3,
      completed: false,
    },
  ];

  const testTask = new Task();

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

    expect(testTask.updateIndex(0, array)).toContainEqual(result1);
    expect(testTask.updateIndex(1, array)).toContainEqual(result2);
  });
});

describe('add', () => {
  const mockLocalStorage = (() => {
    let store = {};

    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })();

  const array = [
    {
      description: 'Go to work',
      index: 1,
      completed: false,
    },
    {
      description: 'Go to School',
      index: 2,
      completed: false,
    },
    {
      description: 'Go to home',
      index: 3,
      completed: false,
    },
  ];

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
    });
  });

  test('save to localStorage', () => {
    saveToLocalStorage('tasks', array);
    expect(JSON.parse(window.localStorage.getItem('tasks'))).toEqual(array);
  });
});