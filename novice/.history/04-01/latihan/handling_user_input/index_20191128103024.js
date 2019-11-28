var app = new Vue({
    el: '#app',
    data: {
        
    }
    reverseMessaging: function(){
        this.message = this.message.split('').reverse().join('')
    }
})