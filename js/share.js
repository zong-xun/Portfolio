$(function () {
        //控制漢堡建
    $('.js-hamburger').on('click', function () {
        let $that = $(this);
        //控制漢堡建
        if ($that.hasClass('navbox_hamburger_action')) {
            $that.removeClass('navbox_hamburger_action');
        } else {
            $that.addClass('navbox_hamburger_action');
        };

    });

    $('.js-hamburger').on('click', function () {
        let $navboxId = $('#navboxId');
        $navboxId.toggleClass('navbox_hidden_hight');

        if($navboxId.hasClass('navbox_hidden_hight')){
            $navboxId.animate({height:"100%"},500);
            document.documentElement.style.overflowY = 'hidden'; 
        }else{
            $navboxId.animate({height:"10%"},500,function(){
                $navboxId.removeAttr("style");
            });
            document.documentElement.style.overflowY = 'scroll'; 
        }
    });

    $('#page-down').click(function () {
        $('html,body').animate({ scrollTop: $('#first-block').offset().top }, 800);
    });


})