$('.nav1-list').on('mouseenter', 'li', function(){			
    $('.list-child').slideDown();
})
$('.nav1-list').on('mouseleave', 'li', function(){
    $('.list-child').slideUp();
})
$('.nav2').on('mouseenter', 'li', function(){			
    $('.nav2-box').toggle();
})
$('.nav2').on('mouseleave', 'li', function(){
    $('.nav2-box').toggle();
})
navChild1.init('.listChild');