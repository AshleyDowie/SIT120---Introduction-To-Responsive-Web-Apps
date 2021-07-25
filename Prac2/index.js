var lister = new Vue({
    el: '#lister',
    data: {
        list: []
    },
    methods: {
        addItems: function () {
            for (var i = 0; i < 100; i++) {
                this.list.push({ Name: 'List Item test ' + Number(this.list.length + 1), Image: "../images/testImage.png" });
            }
        },
        play() {
            this.audio.play();
        }
    },
    mounted: function () {
        this.addItems();
    },
      created() {
        this.audio = document.getElementById('audio');
    }
})