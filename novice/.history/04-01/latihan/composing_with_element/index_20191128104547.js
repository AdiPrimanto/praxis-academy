Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ toco.text }}</li>'
})

var app = new Vue({
    el: 'app',
    data: {
        groceryList: [
            { id:0, text:'Vegetables' }
            { id:1, text:'Vegetables' }
            { id:2, text:'Vegetables' }
        ]
    }
})