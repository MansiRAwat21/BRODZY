// -----------navbar----------------
window.addEventListener('load',function()
{
    window.addEventListener('scroll',function(){
        const header=document.getElementById('header')
        if(window.scrollY > 5)header.classList.add('bg-light')
        else header.classList.remove('bg-light')
    })
  
})

// --------------Scroll------------------
$(document).ready(function(){

    $('.scroll-top').hide();
    
    /*--------------- Scroll-Top ---------------*/
    $(window).on('scroll',function(){
      
      $('#menu-btn').removeClass('fa-times');
      $('.navbar').removeClass('active');
    
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      });
    
    });
    
    });


    // ---------Card Scollling------------
    