$(document).ready(function() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $("#copyright").append("<span>&copy; " + year + " Dylan Camus. All rights reserved</span>");

//   $(function() {
//     (function() {
//       let posY;
//       let image = document.getElementById('parallax');;

//       function parallax() {
//         posY = window.pageYOffset;
//         image.style.top = posY * 0.9 + 'px';
//       }
//       window.addEventListener('scroll', parallax);
//     })();
//   });
});

$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
    }
});
