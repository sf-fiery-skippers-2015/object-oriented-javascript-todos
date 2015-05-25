var TodoList = function() {
	this.task_id = 0,
  this.tasks = []
}

var Task = function(taskDescription, id) {
 this.id = id;
 this.description = taskDescription;
 this.completed = false;
}

TodoList.prototype.add = function(item){
  this.task_id += 1;
  this.tasks.push(new Task(item, this.task_id));
}
TodoList.prototype.list = function(){
  for(i = 0; i < this.tasks.length; i ++){
    console.log(this.tasks[i])
  }
}






// Driver code


var groceryList = new TodoList();

groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');


console.log(groceryList.tasks)

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

var breadTask = groceryList.tasks[0];

Task.prototype.complete = function(){
  this.completed = true;
}

TodoList.prototype.remove = function(description){

  for(i = 0; i < this.tasks.length; i++){
    if(this.tasks[i].description === description){
      this.tasks.splice(i, 1);
      console.log('hello')
    }
    console.log("This item does funky")
  }

}
// Task.prototype.remove = function(){
//   deleteTask(this.id, )
// }

// var deleteTask = function(index, groceryList) {
//   groceryList.tasks.splice(index, 1)
// }

console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false
breadTask.complete();
console.log(breadTask.completed)
groceryList.list();
console.log("Remove")
groceryList.remove("bread");
console.log("Remove Bread")
groceryList.list();

