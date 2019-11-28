var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue js!'
    }
    reverseMessaging: function(){
        this.message = this.message.split('').reverse().join('')
    }
})