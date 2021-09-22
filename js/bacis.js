$(function(){
    let index=1;
    let bannerUl= $("#banner > div:first-child > ul:first-child");
    let timer= carouselTime();
    $("#banner > div:first-child > ul:last-child > li").hover(function(){
        clearInterval(timer);
        index=$(this).index()+1;
        $("#banner > div:first-child > ul:last-child > li").removeClass("active");
        $("#banner > div:first-child > ul:last-child > li:nth-child("+index+")").addClass("active");
        bannerUl.css("transition",".1s");
        bannerUl.css("transform","translateX(-"+(index*100)+"%)");
    },function(){
       timer=carouselTime();
    });

    /* 轮播图定时器 */
    function carouselTime(){
        return setInterval(function(){
            if(index>6){
                index=1;
            }
            bannerUl.css("transform","translateX(-"+(index*100)+"%)");
            bannerUl.css("transition",".1s");
            $("#banner > div:first-child > ul:last-child > li").removeClass("active");
            $("#banner > div:first-child > ul:last-child > li:nth-child("+index+")").addClass("active");
            index++;
        },3000);
    }

    /* 轮播图2 */
    let timer2=carsoulTime2();
    $(".two-content > div > div > ul").hover(function(){
        clearInterval(timer2);
    },function(){
        timer2=carsoulTime2();
    });
    let li_height=$(".two-content > div > div > ul").width();
    function carsoulTime2(){
        return setInterval(function(){
            $(".two-content > div > div > ul").css("left","-=1px");
            if($(".two-content > div > div > ul").css('left')==-(li_height/2)+'px'){
                $(".two-content > div > div > ul").css('left',0);
            }
        },50);
    }

    /* 鼠标进入div拉取信息卡片 */
    $(".history-cart").hover(function(){
        let cart_index=$(this).index();
        $(".history-name"+cart_index).css("height","250px");
    },function(){
        $(".history-cart-info").css("height","0");
    });
});