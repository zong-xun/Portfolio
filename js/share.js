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

    const handler = (e)=>{
        e.preventDefault();
    }
// 防止下拉 
touchmove= () => { document.getElementsByClassName('js-navbox_hidden').addEventListener('touchmove', handler, false)  }
// 移除监听，恢复下拉 
untouchmove = () => { document.getElementsByClassName('js-navbox_hidden').removeEventListener('touchmove', handler, false)  }


    //控制menu
    $('.js-hamburger').on('click', function () {
        let $navboxId = $('#navboxId');
        $navboxId.toggleClass('navbox_hidden_hight');

        if($navboxId.hasClass('navbox_hidden_hight')){
            $navboxId.animate({height:"100%"},500);
            $('.navbox_menu').animate({opacity:1},400);
            $('.navbox_menu').removeClass('d-none');

            // $(".js-navbox_hidden").on(' touchstart',function(){    
            //     $(".js-navbox_hidden").on('touchmove',function(event) {    
            //         event.preventDefault();     
            //     }, false);
            // });
            // document.body.addEventListener('touchmove', function(event) {
            //     event.preventDefault();
            // }, true); 
            $('.content_box').on('touchmove', function(event) {
                $('aa').text('222');
                event.preventDefault();
            });
            document.documentElement.style.overflowY = 'hidden'; 
        }else{
            $navboxId.animate({height:"10%"},500,function(){
                $('.navbox_menu').addClass('d-none');
                $navboxId.removeAttr("style");
            });
            $('.navbox_menu').animate({opacity:0},400);

            // $(".js-navbox_hidden").on(' touchend',function(){    
            //     $(".js-navbox_hidden").unbind('touchmove');
            // });
            $('.content_box').on('touchmove', function(event) {
                $('aa').text('111');
            });
            document.documentElement.style.overflowY = 'scroll';
        }
    });

    $('#page-down').click(function () {
        $('html,body').animate({ scrollTop: $('#first-block').offset().top }, 800);
    });


})