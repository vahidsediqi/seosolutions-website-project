//  Side bar number changing on scroll

// window.addEventListener('scroll', function() {
//   document.querySelector('.active-number').innerHTML + 5 ;
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
 
 
$(window).scroll(function(){ 
  if ( $(window).scrollTop() > 800 &&  $(window).scrollTop() < 1100 ) {
    $("#number").text('02');
} else if ( $(window).scrollTop() < 10 ) {
  $("#number").text('01');
} else if ( $(window).scrollTop() > 1500 &&  $(window).scrollTop() < 1900 ) {
  $("#number").text('03');
}  else if ( $(window).scrollTop() > 1900 &&  $(window).scrollTop() < 2800 ) {
  $("#number").text('04');
} else if ( $(window).scrollTop() > 2800 &&  $(window).scrollTop() < 3400 ) {
  $("#number").text('05'); } 
  else if ( $(window).scrollTop() > 3700 &&  $(window).scrollTop() < 4700 ) {
    $("#number").text('06'); } 

})

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


// Read more 


function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `Weiterlesen <i class="fas fa-sort-down"></i>`; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `Lese weniger <i class="fas fa-sort-up"></i>`; 
    moreText.style.display = "inline";
  }
}

document.getElementById('myBtn').addEventListener('click', ReadMore);