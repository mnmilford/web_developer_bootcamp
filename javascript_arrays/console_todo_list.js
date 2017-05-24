var action;
var todoList = [];

function arrayToList(arr) {
  var str = "***** Todo List *****\n"
  arr.forEach(function(todo, i) {
    str += [i+1] + ". " + arr[i] + "\n";
  });
  return str;
}

function listTodos() {
  console.log(arrayToList(todoList));
  alert(arrayToList(todoList));
}

function addTodo() {
  todoList.push(prompt('What would you like to do?'));
}

function removeTodo() {
  var removeItem = prompt('Which item would you like to remove? Enter a number.\n\n' + arrayToList(todoList));
  todoList.splice(removeItem - 1, 1);
}

while (true) {
  action = prompt('Welcome to the Todo List app. Please enter a command.').toLowerCase();
  if (action === 'quit') {
    break;
  } else if (action === 'list') {
      listTodos();
  } else if (action === 'new') {
      addTodo();
  } else if (action === 'remove') {
      removeTodo();
  } else {
      alert('I don\'t understand that command. Try "new", "remove", "list", or "quit."');
  }
}