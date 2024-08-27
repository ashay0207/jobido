$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) { 
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    $('.hamburger').click(function() {
        $('.side-menu').toggleClass('active');
        $('header').toggleClass('active');
    });


});
$(document).ready(function() {
    $('.card').first().addClass('show');

    $('.button').click(function(e) {
        e.preventDefault();

        var action = $(this).hasClass('cancel') ? 'left' : 'right';
        var $currentCard = $('.card.show').first();
        
        $currentCard.addClass('tilt-' + action);
        
        setTimeout(function() {
            $currentCard.removeClass('show').addClass('hidden');       
            var $nextCard = $('.card').not('.hidden').first();
            if ($nextCard.length) {
                $nextCard.addClass('show');
            }
        }, 500); 
    });
});

