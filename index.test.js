// import Task from '../modules/Task.js';
const Task = require('./modules/Task.js');

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

test('Delete function', ()=> {
  const testTaskResult = [
    {
      description: 'Go to work',
      index: 1,
      completed: false,
    },
  ];
  
  expect(testTask.delete('Go to work'), array).not.toContainEqual(testTaskResult);
})
