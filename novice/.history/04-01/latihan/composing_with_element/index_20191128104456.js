Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ toco.text }}</li>'
})

var app = new Vue