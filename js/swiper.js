var mySwiper1 = new Swiper ('#swiper1', {
    direction: 'horizontal', // 水平切换选项
    delay: 1000,  //延迟
    loop: true, // 循环模式选项
    initialSlide: 0, //初始化页面索引
    // grabCursor:true, //鼠标变为手，点击图片时变为握手
    // autoplay: true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        bulletElement : 'li',
        clickable :true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
}) 
