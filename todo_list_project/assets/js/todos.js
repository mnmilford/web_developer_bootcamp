// Strikeout todo items when clicked on
$("li").on("click", function(){
  $(this).toggleClass('completed');
});

// Fade & Remove an todo item entirely when "X" is clicked
$("li span").click(function(event){
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  event.stopPropagation();
});