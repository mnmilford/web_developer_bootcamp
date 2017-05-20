var action;
var todoList = [];

while (true) {
  action = prompt('Welcome to the Todo List app. Please enter a command.').toLowerCase();
  if (action === 'quit') {
    break;
  } else if (action === 'list') {
      console.log(todoList);
  } else if (action === 'new') {
      todoList.push(prompt('What would you like to do?'));
  } else {
      alert('I don\'t understand that command. Try "new", "list", or "quit."');
  }
}