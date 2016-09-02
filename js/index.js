$(document).ready(function() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();

  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 900);
  });

  $("#copyright").append("<span>&copy; " + year + " Dylan Camus. All rights reserved</span>");

  $(function() {
    (function() {
      let posY;
      let image = document.getElementById('parallax');;

      function paralax() {
        posY = window.pageYOffset;
        image.style.top = posY * 0.9 + 'px';
      }
      window.addEventListener('scroll', paralax);
    })();
  });
});

$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});