$(function () {

    //my canon
    $(".util_myca").hover(function () {
        $(".my").stop().slideDown()
    }, function () {
        $(".my").stop().slideUp()
    }) //util_myca").hover


    //제품
    $(".gnb_p ").hover(function () {
        $(".d_wrap").stop().animate({
            height: "350px",
            padding: "15px 15px 30px"
        }, 500)
    }, function () {
        $(".d_wrap").stop().animate({
            height: "0",
            padding: "0"
        }, 500)
    }) //gnb_p ").hover

    // //제품
    // $(".gnb_p ").hover(function(){
    //     $(".d_wrap").stop().addClass("on")
    // }, function(){
    //     $(".d_wrap").stop().removeClass("on")
    // })//gnb_p ").hove



    //메인비주얼 슬라이드
    $(".move").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false,
    }) //move").slick

    //메인비주얼 스탑
    $(".main_visual .stop").click(function () {
        if ($(this).hasClass("on") == true) {
            $(this).removeClass("on")
            $(".move").slick("slickPlay")
        } else {
            $(this).addClass("on")
            $(".move").slick("slickPause")
            
        }
    }) //main_visual .stop").click

//photo 슬라이드
$(".photo").slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    arrows:false,
})//photo").slick


//포토 스탑
$(".p_stop").click(function(){
    if ($(this).hasClass("on") == true) {
        $(this).removeClass("on")
        $(".photo").slick("slickPlay")
    } else {
        $(this).addClass("on")
        $(".photo").slick("slickPause")
        
    }
})//p_stop").click




//banner 슬라이드
$(".banner").slick({
    autoplay:true,
    autoplaySpeed:1700,
    dots:true,
    arrows:false,
})//banenr").slick


//banner 슬라이드 스탑
$(".banner_wrap .b_stop").click(function(){
    if ($(this).hasClass("on") == true) {
        $(this).removeClass("on")
        $(".banner").slick("slickPlay")
    } else {
        $(this).addClass("on")
        $(".banner").slick("slickPause")
        
    }
})//banner_wrap .stop").click

//viewer 슬라이드
$(".viewer").slick({
    autoplay:true,
    autoplaySpeed: 1600,
    dots:true,
    arrows:false,
})

//viewer 슬라이드 스탑
$(".view_wrap .v_stop").click(function(){
    if ($(this).hasClass("on") == true) {
        $(this).removeClass("on")
        $(".viewer").slick("slickPlay")
    } else {
        $(this).addClass("on")
        $(".viewer").slick("slickPause")
        
    }
})//view_wrap .v_stop").click

//e_store 슬라이드
$(".store").slick({
    autoplay:false,
    slidesToShow:2,
    slidesToScroll:2,
    dots:true,
    arrows:false,
})//store").slick

//e_store 슬라이드 플레이
$(".e_store .e_play").click(function(){
    if ($(this).hasClass("on") == true) {
        $(this).removeClass("on")
        $(".store").slick("slickPause")
    } else {
        $(this).addClass("on")
        $(".store").slick("slickPlay")
        
    }
})//e_store .e_play").click


//공지사항 슬라이드
$(".notice").slick({
    autoplay:true,
vertical:true,
    dots:false,
    arrows:true,
})//notice").slick

//공지사항 슬라이드 스탑
$(".n_play").click(function(){
    if ($(this).hasClass("on") == true) {
        $(this).removeClass("on")
        $(".notice").slick("slickPlay")
    } else {
        $(this).addClass("on")
        $(".notice").slick("slickPause")
        
    }
})//e_store .e_play").click






















}) //jquery