const menu = document.querySelector('.nav-container__content-ul')
const avatar = document.querySelector('.nav-container__content-avatar')
const icon = document.querySelector('.nav-container__menu-icon');

icon.addEventListener('click', () =>{
    menu.classList.toggle('nav-menu_visible');
    avatar.classList.toggle('nav-menu_visible');
})

function main() {

    (function () {

        
$(window).load(function() {
    var $container = $('.section-container');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});
    }());


}
main();
