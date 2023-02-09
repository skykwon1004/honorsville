$(function () {
    // header
    $(window).on('scroll', function () {
        // console.log('스크롤 : ', $(window).scrollTop());   
        if ($(window).scrollTop() > 0) {
            $('.header_wrap').addClass('on');
        } else {
            $('.header_wrap').removeClass('on');
        }
    });


    // main_slide
    $('.main_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .arrows i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    // main_produt_slide
    // $('.address_content').slick({
    //     arrows: false,
    //     slidesToShow: 3,

    // });

    $("#bgndVideo").YTPlayer({
        videoURL: '481rZ1rInNc',
        containment: '.main_youtube_bg',
        // autoPlay: true, 
        mute: true,
        // startAt: 0, 
        // opacity: 1
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.main_youtube_bg .play').on('click', function () {
        $("#bgndVideo").YTPPlay();
    });

    $('.main_youtube_bg .pause').on('click', function () {
        $("#bgndVideo").YTPPause();
    });









    // to top button
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 500) {
            //$('.toTop').fadeIn();
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });




    //mopen
    $('.mopen').on('click', function () {
        $('.header').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header').hasClass('on')) {
            // header에 on이 붙었을때만 이벤트 정지하라
            e.preventDefault();
        };
        // return false;     a 이벤트 막는법 두번째
        console.log(e, e.currentTarget, $(this));
        $('.header .gnb>ul>li .smenu').removeClass('on');
        $(this).next().addClass('on');
        // 내가 클릭한 this 의 next에(자식) on을 붙여라
    });


    // 모바일 메뉴열었을때 뒤에 스크롤 안되게하는
    $('.header').on('scroll wheel touchmove', function (e) {
        if ($('.header').hasClass('on')) {
            // header에 on이 붙었을때만 이벤트 정지하라
            e.preventDefault();
        };
    });









    // AOS.init();

})