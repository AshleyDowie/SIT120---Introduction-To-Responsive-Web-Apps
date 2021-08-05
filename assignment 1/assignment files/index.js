var lister = new Vue({
    el: '#lister',
    data: {
        list: [
            { name: 'www.mcdonalds.com', step: 0 },
            { name: 'Command and Conquer', step: 0 },
        ],
        currentItem: 0,
        primaryPassword: null
    },

  computed: {
    GeneratePassword: function () {


        var generatedPassword = "";        
        var primPar = this.primaryPassword;
        
        var appName = this.list[this.currentItem].name;
        var step = this.list[this.currentItem].step;
       if(primPar != null && primPar.length>0 && appName != null && appName.length>0 && step != null)
       {
        for (let i = 0; i < 10; i++) {
           var p = Math.max((primPar.charCodeAt(i%primPar.length) +
           appName.charCodeAt(i%appName.length)
						+ step) %127, 47 + i + primPar.length + appName.length);
            
            
            generatedPassword = generatedPassword.concat(String.fromCharCode(p));
        }
        }
else
{
    generatedPassword = "Please enter app name and primary password to generate your password";
}

        return generatedPassword;
          
    },
    },
    methods: {
        SwitchItem(i) {
            this.currentItem = i;
        },
        AddApp() {
            this.list.push({ name: 'New App', step: 0 });
        },
        IncreaseStep() {
            this.list[this.currentItem].step++;
        },
        DecreaseStep() {
            this.list[this.currentItem].step--;
        },
        },

})