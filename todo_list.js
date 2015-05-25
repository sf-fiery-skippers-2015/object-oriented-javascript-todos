var newTodoList = function() {

};

var Task = function(id, desc) {

  this.id = id;
  this.description = desc;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
}

var TodoList = function() {
  this.tasks = [];
}

TodoList.prototype.add = function(name) {
  var id = (this.tasks.length)+1;
  var grocery_item = new Task(id, name);
  return this.tasks.push(grocery_item);
}

TodoList.prototype.list = function(item) {
  return this.tasks;
}

var groceryList = new TodoList();
groceryList.add('bread')
groceryList.add('goat milk')
groceryList.list();
var monkey = groceryList.tasks[0];
monkey.id;
monkey.description;
monkey.complete();
monkey.completed;
groceryList.list();



// Driver code

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

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
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
