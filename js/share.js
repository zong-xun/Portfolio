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
                // $('.navbox-hide-height').animate({height:"100%"},200);
            };
            
            $navboxId.animate({height:"100%"},500);
            $('.navbox_menu').animate({opacity:1},300,()=>{
                $('.navbox_menu').removeClass('d-none');
            });
            

            //控制mobile 滾動關閉
            $('#navboxId').on('touchmove', function(event) {
                event.preventDefault();
            });

            //取當前頁面滾動的距離
            var tops = $(document).scrollTop();
            //當頁面滾動時，把當前距離賦值給頁面，這樣保持頁面滾動條不動
            $(document).bind("scroll",function (){

                $(document).scrollTop(tops);
                
            });
            // document.documentElement.style.overflowY = 'hidden'; 
        }else{

            if(after == 0){
                // $('.navbox-hide-height').animate({height:"65px"},200);
            }
            
            $navboxId.animate({height:"15%"},500,function(){
                $('.navbox_menu').addClass('d-none');
                $navboxId.removeAttr("style");
                
            });
            $('.navbox_menu').animate({opacity:0},400);
            //控制mobile 滾動開啟
            $('#navboxId').on('touchmove', function(event) {
            });

            //關閉模態框時釋放document.scroll事件
            $(document).unbind("scroll");
            // document.documentElement.style.overflowY = 'scroll';
        }
    });

    $('#page-down').click(function () {
        $('html,body').animate({ scrollTop: $('#first-block').offset().top }, 800);
    });

    let befort = 0;
    $(window).on('scroll',()=>{
        let after = $(window).scrollTop();
        let differh = after - befort;
        var height = window.screen.availHeight;
        var h = document.documentElement.scrollTop;
        if(differh == 0){
            return false;
        }
        let scolltype = differh > 0 ?'down' :'up';
        befort = after;
        if(scolltype == 'down'){
            // $('.js-navbox').animate({opacity:"1"},"400");
            if(befort >= 200){
                $('.js-navbox').addClass("navbox_position_opacity0");
                $('.js-navbox').removeClass("navbox_position_opacity1");
                $('.navbox').addClass('navbox_position');
                $('.page_top').removeClass('d-none');
            }
            if(befort == 0){
                $('.navbox').removeClass('navbox_position');
            }
        }else{
            // $('.js-navbox').animate({opacity:"0"},"400");
            $('.navbox').removeClass('navbox_position');
            $('.js-navbox').removeClass('navbox_position_opacity0');
            $('.js-navbox').addClass("navbox_position_opacity1");
            if(after == 0){
                $('.page_top').addClass('d-none');
            }
        }
    });


    //置頂
    $('.page_top').click(function(){ 
		$('html,body').animate({scrollTop:0}, "slow");
	});

})