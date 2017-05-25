// Selecting and modifying the H1
var h1 = document.getElementsByTagName('h1')[0];
setInterval(function(){
  h1.classList.toggle('highlight');
}, 500);

// Selecting and modifying the <p> tag
var pTag = document.getElementsByTagName('p')[0];
setTimeout(function(){
  pTag.classList.add('double-font');
}, 4000);