var choose = (function(){
    return {
        init: function(ele){
            this.$ele = document.querySelector(ele);
            this.$chooseVersion = this.$ele.querySelector('.choose-version');
            this.$versionLi = this.$chooseVersion.children;
            this.$chooseColor = this.$ele.querySelector('.choose-2');
            this.$chooseColorLi = this.$chooseColor.children;            
            // console.log(this.$ele,this.$chooseVersion,this.$versionLi,this.$chooseColor,this.$chooseColorLi);
           
           this.$swiper2 = this.$ele.querySelector('#swiper2');
           this.$swiper3 = this.$ele.querySelector('#swiper3');
           console.log( this.$swiper2,this.$swiper3);           

            this.event();
        },
        event: function(){
            var _this = this;
            // for(var i=0;i<=this.$versionLi.length;i++){
            //     this.$versionLi[i].index = i;
            //     console.log(this.$versionLi[i].index);
            //     this.$versionLi[i].onclick = function(i){
            //         console.log(1);
            //             // _this.$versionLi[i].className = 'none';
            //             _this.$versionLi[i].display = 'none';
            //     }
            // }

            for(var j=0;j<=this.$chooseColorLi.length;j++){
                this.$chooseColorLi[j].index = j;
                this.$chooseColorLi[j].onclick = function(){
                    console.log(2);
                }
            }
        }
    }
}())