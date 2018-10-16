// 根据勾选的商品的数量计算总价
function fn() {
	
    var $Gou = document.querySelectorAll('.Gou');
	var priceAll = 0;
	console.log($Gou);
	for(var k = 0; k < $Gou.length; k++) {
		console.log($Gou[k].className == 'iconfont icon-check Gou active');
		if($Gou[k].className == 'iconfont icon-check Gou active') {
			var tt = $($Gou[k]);
			var jiage = tt.parent().parent().find('.shang_price').text();
			var shuLiang = tt.parent().parent().find('.goods-num').text();
			var jiaQian = Number(jiage) * Number(shuLiang);
			var num5 = jiaQian;
			console.log(num5);
			priceAll += num5;
		}
	}
	console.log(priceAll);
    $('#J_cartTotalPrice').html(priceAll); //总价
    // console.log($('#J_cartTotalPrice').html(priceAll));
}
function fn1()
{ //勾选几个商品的总价
	var $Gou = document.querySelectorAll('.Gou');
            console.log($Gou);
			var num3 = 0;
			for(var i = 0; i < $Gou.length; i++) {
				console.log($Gou[i]);
				console.log($Gou[i].className == 'iconfont icon-check Gou active');
				if($Gou[i].className == 'iconfont icon-check Gou active') {
					num3 += 1;
					console.log(num3);

				}
				// console.log($Gou[i].className)
			
			}
			console.log(num3);
			$('#J_selTotalNum').html(num3);
}
$(function() {
	// 把localStorage中的商品数据渲染到页面中
	if(localStorage.getItem('xiaomi')) {
		var i = localStorage.getItem('xiaomi');
		arr = JSON.parse(i);
		var num = arr.length;
		var num1 = 0; //判断选择几个

		for(var i = 0; i < arr.length; i++) {

			obj = arr[i];
			// console.log(obj)
            var shangPing = ` 
                                <div class="item-box">
                                    <div class="item-table">
                                        <div class="item-row">
                                        <div class="shang_check col col-check shangPing ">
                                            <i class="iconfont icon-check Gou move">√</i>
                                        </div>
                                        <div class="col col-img">
                                            <img src="images/detail/xiaomi.jpg" alt="">
                                        </div>
                                        <h3 class="col col-name">
                                            <a href="javascript:void(0)">${obj.name + ' ' + obj.type +'  ' + obj.iphoneColor}</a>
                                        </h3>
                                        <div class="col col-price shang_price">${obj.price}</div>
                                        <div class="col col-num">
                                            <div class="change-num">
                                                <a href="javascript:void(0)" class="minus">-</a>
												<a href="javascript:void(0)" class="goods-num" >${obj.tok}</a>
                                                <a href="javascript:void(0)" class="puls">+</a>
                                            </div>
                                        </div>
                                        <div class="col col-total">${obj.tok * obj.price}元</div>
                                        <div class="col col-action">x</div>
                                    </div>
                                </div>
                            </div>`;
			shangPing = $(shangPing);
			$('.list-body').append(shangPing);
		}
		//点击减去商品
		$('.minus').on('click', function() {
			var target = $(event.target)
			var num = Number(target.next().text());		 			
			num--;
			if(num <= 0) {
				num = 0;
			}
			target.next().html(num);
			target.parent().parent().next().html(target.next().text() * target.parent().parent().prev().text() + '元')
			fn();
		})
		// 点击加商品
		$('.puls').on('click', function() {
			var target = $(event.target)
			var num = Number(target.prev().text());
			num++;
			target.prev().html(num);
			target.parent().parent().next().html(target.prev().text() * target.parent().parent().prev().text() + '元')
			fn()
		})
		// 全选商品
		$('.quanxuan').click(function() {

			$('.quanxuan i').toggleClass('move');
			$('.quanxuan i').toggleClass('active');
			if($('.quanxuan i').attr('class') == 'zongGou iconfont icon-check active') {
				$('.shang_check i').attr('class', '');
				$('.shang_check i').addClass('iconfont icon-check Gou active');
				num1 = arr.length;
				console.log(num1);
				$('#J_selTotalNum').html(num1);
				fn();

			}  else if($('.quanxuan i').attr('class') == 'zongGou iconfont icon-check move') {
				$('.shang_check i').attr('class', '');
				$('.shang_check i').addClass('iconfont icon-check Gou move');
				num1 = arr.length;
				$('#J_selTotalNum').html(num1);
				fn();
			}
			fn1();
		})
		// 商品勾选
		$('.Gou').on('click', function() {
			var target = $(event.target);
			target.toggleClass('move');
			target.toggleClass('active');
			var $Gou = document.querySelectorAll('.Gou ');

			var num3 = 0;
			for(var i = 0; i < $Gou.length; i++) {
				console.log($Gou[i]);
				console.log($Gou[i].className == 'iconfont icon-check Gou active');
				if($Gou[i].className == 'iconfont icon-check Gou active') {
					num3 += 1;
					console.log(num3);
				}
				console.log($Gou[i].className)
			}
			fn();
			$('#J_selTotalNum').html(num3);

		})
		$('.item-row').on('click', 'div', function() {
			var target = $(event.target);
			if(target.attr('class') == 'col col-action') {
				target.parent().parent().parent().remove();
				num--;
				$('#J_cartTotalNum').html(num);
				fn();
				fn1();
			}
		})

		$('#J_cartTotalNum').html(num);
		$('#J_selTotalNum').html(num1);

	} else {
		var emptyCart = `<div class="cart-empty">
		<h2>您的购物车还是空的！</h2>
		<p class="login-desc">登录后将显示您之前加入的商品</p>
		<a href="login.html" class="btn login-btn">立即登录</a>
		<a href="index.html" class="btn index-btn">马上去购物</a>
	</div>`
	emptyCart = $(emptyCart);
	// $('.cart-goods').append(emptyCart);
		$('.page-main').html(emptyCart);
		$('.page-main').css({
			'font-size': '40px',
			color: '#000',
			'text-align': 'center',
			'line-height': '100px'
		})

	}
	$('.login').click(function(){
		location.href='login.html'
	})
	$('.register').click(function(){
		location.href='register.html'
	})
})