// import Task from '../modules/Task.js';
const Task = require('../modules/Task.js');
const array = [{}];
const testTask = new Task();

test('Test updateIndex', () => {
    expect(testTask.updateIndex(3)).toBe(3);
})
