class Utility {
  constructor() {
    this.allTasks = [];
  }

  add(data) {
    localStorage.setItem('list', JSON.stringify(data));
    this.allTasks = JSON.parse(localStorage.getItem('list'));
  }

  // delete() {
  // };

  // update() {

  // };
}

export default Utility;