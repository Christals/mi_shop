$(window).scroll(function() {
    var num = document.documentElement.scrollTop;

    if(num > 800) {
        $('.img-icon').css({
            position: 'absolute',
            left: '0px',
            top: '682px'
        })
    } 
    else if(num >= 200) {
        $('.img-icon').css({
            position: 'fixed',
            top: '73px',
            left: '0px'
        })
    } 
    else if(num < 200) {
        $('.img-icon').css({
            position: 'static'
        })

    }
});

$(function() {
	var xin;
	var price;
    var yan;
    
    $('.choose-version').on('click', 'a', function() {
        {
            var target = $(event.target);
            if(target.attr('class') == 'write') {
                $('.swiper-container').removeClass('xianShi');
                $('#oneI').addClass('xianShi');
                target.parent().css({
                    'border': '1px solid #ff6700'
                });
                target.parent().siblings().css({
                    'border-color': '#e0e0e0'
                });
                yan = target.text().trim();
                console.log(yan)
                $('#yansetu').html(yan);
            } else if(target.attr('class') == 'jin') {
                $('.swiper-container').removeClass('xianShi');
                $('#twoI').addClass('xianShi');
                target.parent().css({
                    'border': '1px solid #ff6700'
                });
                target.parent().siblings().css({
                    'border-color': '#e0e0e0'
                });
                yan = target.text().trim();
                $('#yansetu').html(yan);
            } else if(target.attr('class') == 'pink') {
                $('.swiper-container').removeClass('xianShi');
                $('#threeI').addClass('xianShi');
                target.parent().css({
                    'border': '1px solid #ff6700'
                });
                target.parent().siblings().css({
                    'border-color': '#e0e0e0'
                });
                yan = target.text().trim();
                $('#yansetu').html(yan);
            } else if(target.attr('class') == 'blue') {
                $('.swiper-container').removeClass('xianShi');
                $('#fourI').addClass('xianShi');
                target.parent().css({
                    'border': '1px solid #ff6700'
                });
                target.parent().siblings().css({
                    'border-color': '#e0e0e0'
                });
                yan = target.text().trim();
                $('#yansetu').html(yan);
            }

        }
    })
})