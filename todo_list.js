var TodoList = function() {
  this.tasks = []
  this.id = 0

};

var Task = function(description, id) {
  this.id = id
  this.description = description
  this.completed = false
}

Task.prototype.complete = function() {
  this.completed = true
}

TodoList.prototype.add = function(item) {
  this.id += 1
  task = new Task(item, this.id)
  this.tasks.push(task)
}

TodoList.prototype.list = function() {
  for (item in this.tasks) {
    console.log(this.tasks[item])
  }
}

TodoList.prototype.findByDescription = function(description) {
  for (var index in this.tasks) {
    if (this.tasks[index].description === description) {
      return index
    }
  }
  return -1
}

TodoList.prototype.remove = function(description) {
  var index = this.findByDescription(description)
  if (index === -1)
    console.log("Cannot remove... this item isn't in the list")
  else
    delete this.tasks[index]
}

// Driver code


var groceryList = new TodoList();
groceryList.add("bread")
groceryList.add("cheese")
groceryList.add("milk")
groceryList.tasks
groceryList.list()
console.log("MILK INDEX")
console.log(groceryList.findByDescription("mlk"))
var breadTask = groceryList.tasks[0]
groceryList.remove("milk")
console.log("AFTER REMOVE")
groceryList.list()
console.log(breadTask.id)
console.log(breadTask.description)
console.log(breadTask.completed)

breadTask.complete()
console.log(breadTask.completed)

groceryList.list()

var newList = new TodoList();
newList.add("honey")
newList.list()


