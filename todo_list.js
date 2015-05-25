// Note we are using a JavaScript constructor now.

var Task = function(id, description, completed, todoList) {
  this.id = id;
  this.description = description;
  this.completed = completed;
}

var TodoList = function() {
  this.tasks = [];
}

TodoList.prototype.add = function(item) {
  var task = new Task(this.tasks.length + 1, item, false);
  this.tasks.push(task);
}

// TodoList.prototype.tasks = function() {
//   return this.tasks;
// }

TodoList.prototype.list = function() {
  for (index in this.tasks) {
    console.log(this.tasks[index]);
  }
}

TodoList.prototype.remove = function(task) {
  this.tasks.splice(task, 1);
}

Task.prototype.complete = function() {
  this.completed = true;
}

Task.prototype.remove = function(todoList) {
  todoList.tasks.splice(this, 1);
}


var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log(groceryList.tasks); //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
// breadTask.remove(groceryList);
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
