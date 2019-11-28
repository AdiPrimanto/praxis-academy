var app = new Vue({
    el: '#app',
    data: {
        message: ''
    }
    reverseMessaging: function(){
        this.message = this.message.split('').reverse().join('')
    }
})