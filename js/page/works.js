$(()=>{
    
    //圖片data
    let $ImgDataObj =[
        {
            "img":"../image/graphic.svg",
            "title":"Photography",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Graphic design",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Environmental Visual Design",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Typography",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Corporate Identity System",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Interface Design",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Packaging Design",
            "smallSmark":"READ MORE"
        },
        {
            "img":"../image/graphic.svg",
            "title":"Other Design",
            "smallSmark":"READ MORE"
        },
    ];
    let $Imgbox = $('.js-imgbox');
    let $imgboxStr = '';
    //動態塞入DATA
    $.map($ImgDataObj,function(item,index){
        $imgboxStr += `
            <div class="content_imgbox">
            <img src="${item.img}" alt="">
            <div class="content_imgtxt">
                <div class="d-flex align-items-center content_imgtxt_box">
                    <div class="content_imgtxt_icon"></div>
                    <span class="content_imgtxt_title">${item.title}</span>
                </div>
                <div class="content_imgtxt_title_small_box">
                    <span class="content_imgtxt_title_small">${item.smallSmark}</span>
                    <div class="content_imgtxt_title_small_icon"></div>
                </div>
            </div>
        </div>
        `
    })
    $Imgbox.append(
        $($imgboxStr)
    );
})