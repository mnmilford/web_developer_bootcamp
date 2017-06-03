// Strikeout todo items when clicked on
$("ul").on("click", "li", function(){
  $(this).toggleClass('completed');
});

// Fade & Remove an todo item entirely when "X" is clicked
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Add value of input as a new list item when Enter is pressed
$("input").keypress(function(event){
  if (event.which === 13) {
    let todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});