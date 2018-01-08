// Check off specific todos by clicking

$('li').click(function () {
  $(this).toggleClass('completed');
});

// Click on X to delete todos

$('span').click(function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });

  event.stopPropagation();
});

// Add Todo's
