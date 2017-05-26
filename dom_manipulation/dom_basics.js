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

// Selecting and modifying list elements
var ul = document.querySelector('ul');
ul.innerHTML += '<li>Roses</li>';

// Selecting and remove the first img tag after 7 seconds
var images = document.getElementsByTagName('img');
setTimeout(function(){
  images[0].remove();
}, 7000);