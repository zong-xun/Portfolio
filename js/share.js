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



    //控制menu
    $('.js-hamburger').on('click', function () {
        let $navboxId = $('#navboxId');
        let after = $(window).scrollTop();
        $navboxId.toggleClass('navbox_hidden_hight');

        if($navboxId.hasClass('navbox_hidden_hight')){
            if(after == 0){
                $('.navbox-hide-height').animate({height:"100%"},500);
            }
            $navboxId.animate({height:"100%"},500);
            $('.navbox_menu').animate({opacity:1},300,()=>{
                $('.navbox_menu').removeClass('d-none');
            });
            

            //控制mobile 滾動關必
            $('#navboxId').on('touchmove', function(event) {
                event.preventDefault();
            });
            document.documentElement.style.overflowY = 'hidden'; 
        }else{

            if(after == 0){
                $('.navbox-hide-height').animate({height:"65px"},500);
            }
            $navboxId.animate({height:"15%"},500,function(){
                $('.navbox_menu').addClass('d-none');
                $navboxId.removeAttr("style");
                
            });
            $('.navbox_menu').animate({opacity:0},400);
            //控制mobile 滾動開啟
            $('#navboxId').on('touchmove', function(event) {
            });
            document.documentElement.style.overflowY = 'scroll';
        }
    });

    $('#page-down').click(function () {
        $('html,body').animate({ scrollTop: $('#first-block').offset().top }, 800);
    });

    let befort = 0;
    $(window).on('scroll',()=>{
        let after = $(window).scrollTop();
        let differh = after - befort;
        if(differh == 0){
            return false;
        }
        let scolltype = differh > 0 ?'down' :'up';
        befort = after;
        if(scolltype == 'down'){
            // $('.js-navbox').animate({opacity:"1"},"400");
            $('.js-navbox').addClass("navbox_position_opacity0");
            $('.js-navbox').removeClass("navbox_position_opacity1");
            $('.navbox').addClass('navbox_position');
        }else{
            // $('.js-navbox').animate({opacity:"0"},"400");
            $('.navbox').removeClass('navbox_position');
            
            $('.js-navbox').removeClass('navbox_position_opacity0');
            $('.js-navbox').addClass("navbox_position_opacity1");
        }
    })

})