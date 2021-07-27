//  Side bar number changing on scroll

// window.addEventListener('scroll', function() {
//   document.querySelector('.active-number').innerHTML ++ ;
// });

// $(function () {
//   $(window).on('scroll', function () {
//       if ( $(window).scrollTop() > 10 ) {
//         document.querySelector('.active-number').innerHTML ++ ;
//       }

//       else {
//         document.querySelector('.active-number').innerHTML - 1  ;
//       }
//   });
// });
 
 
 // Hero typed
 if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Navbar fucntions

  $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});