$(document).scroll(function() {
  var y = $(this).scrollTop(),
    news = $(".news");

  if (y > 400) {
    news.fadeIn();
  } else {
    news.fadeOut();
  }
});
