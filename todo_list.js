var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(desc) {
  var num = Task.prototype.id += 1;
  var task = new Task(desc, num);
  this.tasks.push(task);
}

TodoList.prototype.list = function() {
  for(var i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  }
}

TodoList.prototype.remove = function(taskObj) {
  for(var i = 0; i < this.tasks.length; i++){
    if (taskObj.description === this.tasks[i].description) {
      this.tasks.splice(i, 1);
    }
  }
}

var Task = function(desc, num) {
  this.id = num;
  this.description = desc;
  this.completed = false;
}

Task.prototype.id = 0;

Task.prototype.complete = function() {
  this.completed = true;
}

// Driver code

var todoList = new TodoList();

todoList.add('bread');
todoList.add('cheese');
todoList.add('milk');
console.log(todoList.tasks);
console.log(todoList.list());

///////////////////////////////////////

var breadTask = todoList.tasks[0];
console.log(breadTask.id);
console.log(breadTask.description);
console.log(breadTask.completed);

///////////////////////////////////////

breadTask.complete();

todoList.list();

///////////////////////////////////////

todoList.remove(breadTask);

todoList.list();



















