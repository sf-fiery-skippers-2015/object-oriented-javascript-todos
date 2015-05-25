function TodoList() {
	this.tasks = [];
};

// functions can be defined this way too!
// var TodoList = function() {
//   this.tasks = [];
// };

TodoList.prototype.add = function(item) {
  this.tasks.push({description: item, completed: false});
};

TodoList.prototype.list = function() {
  return this.tasks;
};

TodoList.prototype.indexOf = function(item) {
  for ( var i in this.tasks){
    if(this.tasks[i].description == item){
      console.log(i);
      return i;
    }
  }
}

// In Javascript, hash keys can be accessed by using dot notation or using brackets and the key.
// TodoList.prototype.indexOf = function(item) {
//   for ( var i in this.tasks){
//     if(this.tasks[i]["description"] == item){
//       console.log(i);
//       return i;
//     }
//   }
// }

TodoList.prototype.get = function(index) {
  console.log(this.tasks[index]);
  return this.tasks[index];
}

TodoList.prototype.complete = function(index) {
  this.tasks[index]["completed"] = true;
  console.log(this.tasks[index]);
  return this.tasks[index];
}

TodoList.prototype.remove = function(index) {
  this.tasks.splice(index, 1);
  console.log(this.tasks);
  return this.tasks;
}

// Driver code

var groceryList = new TodoList();

groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
groceryList.remove(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];¡

