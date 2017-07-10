//Version 3 - Objects

// var myName = {
//     name: "Candice",
//     sayName: function() {
//         console.log(this.name);
//     }
// };
// myName.sayName();

var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function() {
    console.log("My Todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position]=newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
todoList.displayTodos();
todoList.deleteTodo(1);


//todoList.addTodo("plunk"); to call the addTodo and add plunk to todos
//todoList.changeTodo(0, "new-plunk"); call to change item in 1st position to new-plunk