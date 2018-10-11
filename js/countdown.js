var countDown = (function () {
    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);
            this.$span = this.$ele.querySelector('span');
            this.$countdown = this.$ele.querySelector('.countdown');
            console.log(this.$ele);
            
            this.$liAll = this.$countdown.querySelectorAll('li');
            this.$hours = this.$liAll[0];
            this.$mins = this.$liAll[2];
            this.$secs = this.$liAll[4];
            this.event();
        },
        event: function () {
            var _this = this;
            var countdownMinute = 23 * 60 * 60;//10分钟倒计时
            var startTimes = new Date('2018-10-11 15:21');//开始时间 new Date('2016-11-16 15:21');
            var endTimes = new Date(startTimes.setMinutes(startTimes.getMinutes() + countdownMinute));//结束时间
            var curTimes = new Date();//当前时间
            var surplusTimes = endTimes.getTime() / 1000 - curTimes.getTime() / 1000;//结束毫秒-开始毫秒=剩余倒计时间
            // 进入倒计时
            var countdowns = window.setInterval(function () {
                surplusTimes--;
                var minu = Math.floor(surplusTimes / 60);
                _this.$mins.innerHtml = minu; 
                console.log(minu);
                var secd = Math.round(surplusTimes % 60);
                console.log(minu + ':' + secd);
                if (surplusTimes <= 0) {
                    console.log('时间到！');
                    clearInterval(countdowns);
                }
            }, 1000);
        }
    }
}())