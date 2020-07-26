var app = new Vue({
    el: '#app-5', // id of element
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
});