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
        inDuration: 1000,
        outDuration: 1000,
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

open.addEventListener('click',function () {
   page.style.display='block';
})

close.addEventListener('click',function () {
   page.style.display='';
})

open.addEventListener('click',function () {
   open.style.display='';
})

close.addEventListener('click',function () {
   open.style.display='block';

})