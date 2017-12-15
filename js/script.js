$(document).ready(function() {

    $('.scrollTo').click( function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 500; // Durée de l'animation (en ms)

        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });


    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1200,
        outDuration: 1200,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });



});

var open = document.querySelector('.menu-logo')
var page = document.querySelector('.burger-page')
var close = document.querySelector('.menu-logo-close')
var content = document.querySelector('.category-content')
var copyright = document.querySelector('.copyright-bottom')

open.addEventListener('click',function () {
   open.style.display='';
   document.querySelector('body').style.overflow="hidden";
   copyright.style.display='';

   $(".burger-page").fadeIn(300);
})

close.addEventListener('click',function () {
   open.style.display='';
   document.querySelector('body').style.overflow="scroll";
   copyright.style.display='none';
   $(".burger-page").fadeOut(300);
})
