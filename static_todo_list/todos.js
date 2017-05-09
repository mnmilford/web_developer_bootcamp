$(document).ready(function() {
  $('input').on('change', function() {
      $(this).parent().toggleClass('completedTask');
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   var inputs = document.getElementsByTagName("input");

//   function modifyText() {
//     for (var i = 0; i < inputs.length; i++) {
//       if (inputs[i])
//     }
//   }

//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("click", function() {
//       console.log(inputs[i]);
//       // this.classList.toggle('completedTask');
//   }

// });