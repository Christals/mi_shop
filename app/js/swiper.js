// banner轮播图部分
var mySwiper1 = new Swiper ('#swiper1', {
    direction: 'horizontal', // 水平切换选项
    delay: 1000,  //延迟
    loop: true, // 循环模式选项
    initialSlide: 0, //初始化页面索引
    // grabCursor:true, //鼠标变为手，点击图片时变为握手
    autoplay: true,
    effect: 'fade',
    pagination: { //分页器
        el: '.swiper-pagination',
        bulletElement : 'li',
        clickable :true,
    },
    navigation: {
        nextEl: '.swiper-button-next',  //左箭头
        prevEl: '.swiper-button-prev',  //右箭头
      },
}) ;

// 详情页轮播图（小米8 SE亮红色轮播）
var mySwiper2 = new Swiper('#swiper2', {
    direction: 'horizontal',
    autoplay: true,//可选选项，自动滑动
    effect: 'fade',
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
		el: '.swiper-scrollbar',
	}, 
});

// 详情页轮播图（小米8 SE暮光金色轮播）
var mySwiper3 = new Swiper('#swiper3', {
    direction: 'horizontal',
    autoplay: true,//可选选项，自动滑动
    effect: 'fade',
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
		el: '.swiper-scrollbar',
	}, 
});

// 首页内容部分的轮播图
var mySwiper4 = new Swiper('#swiper4', {
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var mySwiper5 = new Swiper('#swiper5', {
    direction: 'horizontal',
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var mySwiper6 = new Swiper('#swiper6', {
    direction: 'horizontal',
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var mySwiper7 = new Swiper('#swiper7', {
    direction: 'horizontal',
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
});

// 首页内容轮播图悬停显示按钮
$('.bottom_pic_box').mouseover(function () {
    $(this).find('.swiper-button-prev').css('display', 'block');
    $(this).find('.swiper-button-next').css('display', 'block');
});
$('.bottom_pic_box').mouseout(function () {
    $(this).find('.swiper-button-prev').css('display', 'none');
    $(this).find('.swiper-button-next').css('display', 'none');
});
