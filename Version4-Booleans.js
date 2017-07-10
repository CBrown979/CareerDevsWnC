//Version 4 - Booleans

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos:", this.todos);
  },
  addTodo: function(todoText) {//this todoText is the name of the property on this object
    this.todos.push({
      todoText: todoText, //this refers to the todoText that is a parameter and can change based on what you pass in when you use the function
      completed: false
    }); //we want our todos to show alittle more data, and want a text description - but also want another property (2 total) to see if the todo has been completed or not
    this.displayTodos();
  },
  changeTodo: function(position, todoText) { //todoText was added to make it clearer that we are changing just the todoText property and not the entire object
    //this.todos[position]=newValue; (this was less clear than above, hence revised to above)
    this.todos[position].todoText=todoText; //used .notation to grab just the todoText property, and once we had that we set it to the new value that is passed in when you run the function
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
      var todo = this.todos[position];//grabbing and saving the specific todo we're interested in
      todo.completed = !todo.completed;//grabbing todo.completed (which is a boolean true/false value), and we want to change the value of it to the opposite of what it is - 1)get todo.completed, put on right side and add the bang operator (!) before it to flip it to opposite of what it currently is     
      this.displayTodos();
  }
};

//todoList.addTodo("first try");
//todoList.changeTodo(0, "second try");
//todoList.addTodo("boolean testing");
//todoList.toggleCompleted(0);