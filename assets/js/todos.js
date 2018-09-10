// check off specific todos by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass("crossed");
});

// click on X to delete todo
$("ul").on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation(); // stop bobbling up
})

$("input[type='text']").on('keypress', function(event) {
    if (event.which == 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // clear the input box
        $(this).val("");
        // create a new li and add to ul
        $('ul').append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+ todoText + "</li>");
    }
})

$("#pencil").on('click', function() {
    $("input[type='text']").slideToggle();
})