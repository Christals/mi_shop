// 轮播图跟随屏幕的滚动而变换位置
$(window).scroll(function() {
    var num = document.documentElement.scrollTop;
    if(num > 800) {
        $('.img-icon').css({
            position: 'absolute',
            left: '0px',
            top: '520px'
        })
    } 
    else if(num >= 200) {
        $('.img-icon').css({
            position: 'fixed',
            top: '73px',
            left: '63px'
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

	// 选择版本和颜色轮播对应改变颜色
    $('.choose-version').delegate('li', 'click', function() {
        
        {
            var target = $(event.target);
            if(target.attr('class') == 'red') {
                $('.swiper-container').removeClass('xianShi');//移除xianshi类名
				$('#swiper2').addClass('xianShi');
				console.log($('#swiper2').addClass('xianShi'));//打印#swiper是否添加了xianshi类名
                target.parent().css({
                    'border': '1px solid #ff6700'
                });
                target.parent().siblings().css({
                    'border-color': '#e0e0e0'
                });
                yan = target.text().trim();
                console.log(yan);
                $('#yansetu').html(yan);
            } else if(target.attr('class') == 'mujin') {
                $('.swiper-container').removeClass('xianShi');
				$('#swiper3').addClass('xianShi');
                target.parent().css({
                    'border': '1px solid #ff6700'
                });
                target.parent().siblings().css({
                    'border-color': '#e0e0e0'
                });
				yan = target.text().trim();
				console.log(yan);
                $('#yansetu').html(yan);
            } 

        }
    });

    $('.step_list1').delegate('li', 'click', function() {

		var target = $(event.target);
		if(target.attr("class") == 'alione') {
			console.log(1)
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			// $('.ddpig').html('');
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.qian').html($('.zuiPrice').text());
		} else if(target.attr("class") == 'alitwo') {
			console.log(2);
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			// $('.ddpig').html('');
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.qian').html($('.zuiPrice').text());
		}
    });
	
	// 选择保障服务
    $('.duihao').click(function() {
		$('.duihao').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			"color": '#fff'
		});
		$('.duihao').html('√');
		$('.zhengqudui').css({
			visibility: 'visible'
		})
		$('.zhengqudui').html('√');
		$('.duihao1').css({
			'background-color': '#fff',
			"color": '#fff'
		});
		$('.duihao1').html('');
		$('.fuwu2').css({
			'border-color': '#ff6700'
		});
		$('.fuwu3').css({
			'border-color': '#e0e0e0'
		});
		$('.qian').html($('.zuiPrice').text());		
		var sum = parseInt($('.zuiPrice').text());
        sum = parseInt($('.zijiJiage').text()) + sum;
        console.log(sum);
		$('.qian').html(sum + '元');
	});
	
    $('.duihao1').click(function() {
		$('.duihao1').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			color: '#fff'
		});
		$('.duihao1').html('√');
		$('.zhengqudui1').css({
			visibility: 'visible'
		})
		$('.zhengqudui1').html('√');
		$('.duihao').css({
			'background-color': '#fff',
			color: '#fff'
		});
		$('.duihao').html('');
		$('.zhengqudui').css({
			visibility: 'hidden'
		})
		$('.fuwu3').css({
			'border-color': '#ff6700'
		});
		$('.fuwu2').css({
			'border-color': '#e0e0e0'
		});
		$('.qian').html($('.zuiPrice').text());
		var sum = parseInt($('.zuiPrice').text());
        sum = parseInt($('.zijiJiage').text()) + sum;
        console.log(sum);
		$('.qian').html(sum + '元');
    });
	
	// 修改地址
    $('.default-address').click(function(e) {
		var target = e.target;

		console.log(1);
		var input = $("<input type='text'>");
		var td = $(target);
		input.val(td.text());
		td.contents().replaceWith(input);
		input.blur(function() {
			td.text($(this).val());
			$(this).remove();
		});
    });
	
	// 把商品添加到购物车
    $('.btn-wrap').delegate('li', 'click', function(e) {
		console.log(1);
		var target = $(event.target);
		console.log(target);
		console.log(target.prop('tagName') == 'A');		
		if(target.prop('tagName') == 'A') {
			if(JSON.parse(localStorage.getItem('xiaomi'))) {
				var arr = JSON.parse(localStorage.getItem('xiaomi'))
				var num = 1;
				var fool;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				auto:for(var i = 0; i < arr.length; i++) {
					for(var k in arr[i]) {
						if(arr[i].name == name && arr[i].type == type && arr[i].iphoneColor == iphoneColor && arr[i].address == address && arr[i].price == price && arr[i].phoneurl == phoneurl) {
							num = arr[i].tok + 1;
							data = {
								name: name,
								type: type ,
								address: address,
								price: price,
								iphoneColor: iphoneColor,
								tok: num,
								phoneurl: phoneurl
							}
							arr.splice(i, 1, data)
							arr = JSON.stringify(arr);

							localStorage.setItem('xiaomi', arr);
							fool=i;
							break auto;
						}
					}
				}
				if(i != fool) {
					var arr = JSON.parse(localStorage.getItem('xiaomi'))
					data = {
						name: name,
						type: type,
						address: address,
						price: price,
						iphoneColor: iphoneColor,
						tok: num,
						phoneurl: phoneurl
					}
					arr.push(data);
					arr = JSON.stringify(arr);
					localStorage.setItem('xiaomi', arr);

				}
				console.log(arr);
			} else {
				var arr = [];
				var num = 1;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();				
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				data = {
					name: name,
					type: type,
					address: address,
					price: price,
					iphoneColor: iphoneColor,
					tok: num,
					phoneurl: phoneurl
				}
				arr.push(data);
				arr = JSON.stringify(arr);
				console.log(arr);
				localStorage.setItem('xiaomi', arr);
				console.log(localStorage.setItem('xiaomi', arr));
				// if(localStorage.getItem('xiaomi') && JSON.parse(localStorage.getItem('xiaomi'))[0].tok)
				// {
				// 	num=JSON.parse(localStorage.getItem('xiaomi'))[0].tok+1;
				// }
			}
		}
		location.href = 'cart.html';
	});

});