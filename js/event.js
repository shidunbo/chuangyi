$(function(){
    /* 无限轮播图 */
    let timer2=carsoulTime2();
    $(".event-content-two > div > div > ul").hover(function(){
        clearInterval(timer2);
    },function(){
        timer2=carsoulTime2();
    });
    let li_height=$(".event-content-two > div > div > ul").width();
    function carsoulTime2(){
        return setInterval(function(){
            $(".event-content-two > div > div > ul").css("left","-=1px");
            if($(".event-content-two > div > div > ul").css('left')==-(li_height/2)+'px'){
                $(".event-content-two > div > div > ul").css('left',0);
            }
        },50);
    }
});