Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

var app = new Vue({
    el: '#app-7', // id of element
    data: {
        groceryList: [
            {
                id:0, text: 'Vegetables'
            },
            {
                id:1, text: 'Cola'
            },
            {
                id:2, text: 'voner'
            }
        ]
    }
});