var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue js!'
    },
         methods:{
            reverseMessaging: function(){
                this.message = this.message.split('').reverse().join('')
     }
    
    }
})