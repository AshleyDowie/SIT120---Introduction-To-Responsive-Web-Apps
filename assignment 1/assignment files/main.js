//The "lister" vue component that is used to maintain a list of apps and generate passwords for them.
var lister = new Vue({
    el: '#lister',
    data: {
        //The list of apps, each containing a name and a step value.
        list: [
            { name: 'www.mcdonalds.com', step: 0 },
            { name: 'Command and Conquer', step: 0 },
        ],
        //The index of the currently selected app.
        currentItem: 0,
        //The primary password set by the user.
        primaryPassword: null
    },

    computed: {
        /*A deterministic function that generates a password for the app based on the app's name, the users primary
       password and the current step of the app.*/
        GeneratePassword: function () {
            var generatedPassword = "";
            var primPar = this.primaryPassword;

            var appName = this.list[this.currentItem].name;
            var step = this.list[this.currentItem].step;
            /*If the user has set the primary password, assigned a step value for the app and given the app a name
            then generate a password for the app.*/
            if (primPar != null && primPar.length > 0 && appName != null && appName.length > 0 && step != null) {
                /*Make the password 10 characters long, take values from the primary password and app name, get their
                 * ASCII number, combine the numbers and add the step value. Ensure that the values are within a range
                 * that will give us a desirable character and then convert the ASCII numbers back to ASCII characters.*/
                for (let i = 0; i < 10; i++) {
                    var p = Math.max((primPar.charCodeAt(i % primPar.length) +
                        appName.charCodeAt(i % appName.length) +
                        step) % 127, 47 + i + primPar.length + appName.length);
                    generatedPassword = generatedPassword.concat(String.fromCharCode(p));
                }
            }
            /*If the user has not set the primary password or assigned a step value for the app or given the app a name
            then instruct the user to do so.*/
            else {
                generatedPassword = "Please enter app name and primary password to generate your password";
            }
            return generatedPassword;
        },
    },
    methods: {
        //Change the currenttly selected app.
        SwitchItem(i) {
            this.currentItem = i;
        },
        //Add a new app to the list.
        AddApp() {
            this.list.push({ name: 'New App', step: 0 });
        },
        //Increase the step value for the currently selected app.
        IncreaseStep() {
            this.list[this.currentItem].step++;
        },
        //Decrease the step value for the currently selected app.
        DecreaseStep() {
            this.list[this.currentItem].step--;
        },
    },
})