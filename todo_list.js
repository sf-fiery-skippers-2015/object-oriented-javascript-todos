var newTodoList = function() {
	this.tasks = []
};

newTodoList.prototype.add = function(objectTask) {
  var id = Task.prototype.counter += 1
  var mytask = new Task(id,objectTask)
  this.tasks.push(mytask)
}

newTodoList.prototype.list = function(){
  for (i=0; i< this.tasks.length; i++) {
    console.log(this.tasks[i])
  }
}

newTodoList.prototype.remove = function(string){
  // make ref to todollist access task array and remove task
  var i = this.tasks.indexOf(string)
  this.tasks.splice(i,1)
}

var Task = function(id, item) {
    this.id = id;
    this.description = item;
    this.completed = false;
    console.log("counter " + this.counter)
}

Task.prototype.complete = function(){
  this.completed = true
}

Task.prototype.counter = 0;






var groceryList = new newTodoList();
// console.log(groceryList)


// Driver code
// var todoList = newTodoList();
// Note we are using a JavaScript constructor now.
groceryList.add('bread');
console.log(groceryList.list())
// console.log(groceryList.tasks)
groceryList.add('cheese');
console.log(groceryList.list())
groceryList.add('milk');
console.log(groceryList.list())

// // tasks is now an array of Task objects
// groceryList.tasks //-> [Task, Task, Task]

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: false}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
// var breadTask = groceryList.tasks[0];
// // console.log(breadTask)
// // console.log(breadTask.id)
// breadTask.id //-> 1 (some unique numerical ID)
// breadTask.description //-> 'bread'
// breadTask.completed //-> false


// // This should complete the task
// breadTask.complete();

// breadTask.completed //-> true

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
// groceryList.remove("cheese");

// groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
