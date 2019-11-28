var app = new Vue({
    el: '#app'
    reverseMessaging: function(){
        this.message = this.message.split('').reverse().join('')
    }
})