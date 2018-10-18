// 实现nav1导航栏的子导航栏下拉显示;
$('.nav1-list').on('mouseenter', 'li', function(){
    $('.list-child').stop().slideDown();
});
$('.list-child').hover(function(){
    $(this).show();
},function(){
    $(this).hide();
});
// 实现鼠标滑入竖导航栏，子导航栏显示;
$('.nav2').on('mouseenter', 'li', function(){			
    $('.nav2-box').toggle();
});
$('.nav2').on('mouseleave', 'li', function(){
    $('.nav2-box').toggle();
});
$('.nav2-box').hover(function(){
    $(this).show();
},function(){
    $(this).hide();
});

// 实现nav1导航栏的子导航栏的数据渲染
navChild1.init('.listChild');
