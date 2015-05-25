var TodoList = function() {
	this.task_list = [];
};

TodoList.prototype.counter = function(){
  return (this.task_list.length + 1)
}

TodoList.prototype.new_task = function(taskDescription, taskNum){
  var task = function(description, number){
    this.id = number,
    this.description = description,
    this.completed = false
  }
  return new task(taskDescription, taskNum);
};

TodoList.prototype.add = function(description) {
  var counter = this.counter();
  var temp_task = this.new_task(description, counter);
  this.task_list.push(temp_task);
};

TodoList.prototype.list = function(){
  for(i = 0; i < this.task_list.length; i++){
    console.log(this.task_list[i]);
  }
}




// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log(groceryList.task_list); //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.task_list[0];

console.log("Expecting: 1");
console.log(breadTask.id); //-> 1 (some unique numerical ID)
console.log("Expecting: bread");
console.log(breadTask.description); //-> 'bread'
console.log("Expecting: false");
console.log(breadTask.completed); //-> false


// This should complete the task
breadTask.complete();

// breadTask.completed //-> true

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
// breadTask.remove();

// groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}
