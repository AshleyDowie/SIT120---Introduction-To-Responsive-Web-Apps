var lister = new Vue({
    el: '#lister',
    data: {
        list: []
    },
     methods: {
         addItem: function () {
             this.list.push({ text: 'List Item Number ' + Number(this.list.length + 1) });
         },
         removeItem: function () {
             this.list.pop();
         }
    }
})