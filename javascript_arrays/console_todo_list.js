var action;
var todoList = [];

function arrayToList(arr) {
  var str = ""
  for (var i = 0; i < arr.length; i++) {
    str += [i+1] + ". " + arr[i] + "\n";
  }
  return str;
}

while (true) {
  action = prompt('Welcome to the Todo List app. Please enter a command.').toLowerCase();
  if (action === 'quit') {
    break;
  } else if (action === 'list') {
      console.log("***** Todo List *****");
      todoList.forEach(function(todo, i) {
        console.log(i+1 + ": " + todo);
      });
  } else if (action === 'new') {
      todoList.push(prompt('What would you like to do?'));
  } else if (action === 'remove') {
      var removeItem = prompt('Which item would you like to remove? Enter a number.\n' + arrayToList(todoList));
      todoList.splice(removeItem - 1, 1);
  } else {
      alert('I don\'t understand that command. Try "new", "remove", "list", or "quit."');
  }
}