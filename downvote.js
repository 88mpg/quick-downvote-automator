setInterval(function() {
  $('[data-event-action="downvote"]').not('.archived, .downmod').each(function() {
      $(this).click();
  }).promise().done(function() {
    $("html, body").scrollTop($(document).height());
  });
},50);
