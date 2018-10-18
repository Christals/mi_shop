var navChild1 = (function () {
    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);
            this.event();
            this.getShopListData();
        },
        event: function () {
            var _this = this;
        },
        // 获取所有商品信息
        getShopListData: function () {
            var _this = this;
            var params = {
                success: function (data) {
                    data = JSON.parse(data);
                    _this.shopList = data.data;
                    _this.insertCarList(data.data);
                }
            }
            sendAjax('json/navchild1.json', params);
        },
        // 把数据渲染到页面中
        insertCarList: function (data) {
            var arr = [];
            var shop;
            // debugger
            for (var i = 0; i < data.length; i++) {
                arr.push(`<li>
                                <span>${data[i].ps}</span>
                                <div>
                                    <img src="${data[i].image}" alt="">
                                    <em></em>
                                </div>
                                <a href="#">${data[i].name}</a>
                                <p>${data[i].price}</p>
                            </li>`);
            }
            this.$ele.innerHTML = arr.join('');
        },
    }
}())