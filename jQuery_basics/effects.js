// Fading Elements
$('button').on("click", function(){
  $('div').fadeToggle("slow", function(){
    slide($(this));
  });
});

// Slide animation into function
function slide(el) {
  $(el).slideToggle();
}
