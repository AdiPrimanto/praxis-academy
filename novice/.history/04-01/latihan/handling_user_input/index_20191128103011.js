var app = new Vue({
    el: ''
    reverseMessaging: function(){
        this.message = this.message.split('').reverse().join('')
    }
})