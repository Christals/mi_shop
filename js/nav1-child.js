var navChild1 = (function(){
    return {
        init: function(ele){
            if(typeof ele == 'string'){
                ele = document.querySelector(ele);
            }
            this.$ele = ele;
            this.$listChild = document.querySelector('.list-child');
            this.eevent();
        }
    }
}())