/*makeSandwichWith ____
    Get one slice of bread.
    Add ____.
    Put a slice of bread on top.
    
function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top;
}

makeSandwichWith()*///to call the function

//Version 2 - Functions
var todos=["item 1", "item 2", "item 3"];

function displayTodos () {
    console.log("My todos:", todos);
}
displayTodos(); //calls function created to display todos

function addToDo(todo) {
    todos.push(todo);
    displayTodos();//to see the array updates after the push
}
addToDo("item 5");
addToDo("item 97");//calls function to add todos

function changeToDo(position, newValue) {
    todos[position] = newValue;//isolate item for change and new value update
    displayTodos();
}
changeToDo(4,"new thing");//changed item 97 to new thing

function deleteToDo(position) {
    todos.splice(position, 1);// use splice command to remove item at position
    displayTodos();
}
deleteToDo(2);