
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  

  $(document).ready(function(){

    $(".banner-carousel").owlCarousel({
      loop:true,
          margin:10,
          nav:true,
          dots:true,
          autoplay:true,
          autoplayTimeout:4000,
          smartSpeed:750,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
    });
  
  
    // OWL Carousel Brand Logo
      $('.banner-carousel').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:true,
          autoplayTimeout:2500,
          smartSpeed:500,
          responsive:{
              0:{
                  items:2
              },
              560:{
                  items:3
              },
              992:{
                  items:4
              },
              1200:{
                  items:5
              }
          }
      })
  });