Vue.component("OptionButton", {
    props: ["Name"],
    template: `

                    <div>
                        <!-- A tooltip to explain that each website button is selectable. -->
                        <span class="toolTip">Select my name to view me</span>
                        <!-- By clicking on the itemText of the button, the user can view this app's password info . -->
                        <p class="itemText" v-on:click="SwitchItem">
                            {{Name}}
                        </p>
                    </div>
`,
    methods:
    {
        SwitchItem: function () {
            this.$emit('SwitchItem')
        }
    }

})

Vue.component("PasswordGenerator", {
    props: ["AppName","PrimaryPassword","Step"],
    template: `
                    <div style="margin:auto; padding:.5vh">
                    <!-- Displays the a generated password for the app or a prompt for the user to fill out all required information
                        if they have not yet done so.-->
                        <label class="generalText" style="margin-right:1vw">Generated Password</label>
                        <label class="generalText">{{ GeneratePassword }}</label>
                    </div>
`,
    computed: {
        /*A deterministic function that generates a password for the app based on the app's name, the users primary
       password and the current step of the app.*/
        GeneratePassword: function () {
            var generatedPassword = "";
            var primPar = this.PrimaryPassword;

            var appName = this.AppName;
            var step = this.Step;
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

})


Vue.component("Stepper", {
    props: ["Step"],
    template: `

                    <!-- Displays the currently selected app's step and allows the user to increase of decrease it with buttons on each side-->
                    <div style="margin:auto; padding:.5vh;">
                        <button v-on:click="DecreaseStep()" class="generalText"><</button>
                        <label class="generalText">Step {{Step}}</label>
                        <button v-on:click="IncreaseStep()" class="generalText">></button>
                    </div>
`,
    methods:
    {
        IncreaseStep: function () {
            this.$emit('IncreaseStep')
        },
        DecreaseStep: function () {
            this.$emit('DecreaseStep')
        }
    }
})


Vue.component("mainform", {
    props: ["AppName", "PrimaryPassword"],
    template: `
                    <div>
                        <!-- Displays and allows the user to edit the currently selected app's name. -->
                        <div style="margin:auto; padding:.5vh;">
                            <label class="generalText">App Name</label>
                            <input class="generalText" style="margin-left:2vw; text-align:center" v-model="AppName" placeholder="App" v-on:change="UpdateName(AppName)">
                        </div>

                    <!-- Displays and allows the user to edit their primary password -->
                    <div style="margin:auto; padding:.5vh">
                        <label class="generalText">Primary Password</label>
                        <input class="generalText" style="margin-left:2vw; text-align:center" v-model="PrimaryPassword" placeholder="Password" v-on:change="UpdatePrimaryPassword(PrimaryPassword)">
                    </div>
                </div>
`,
    methods:
    {

        UpdateName: function (name) {
            this.$emit('AppNameChange', name)
        },
        UpdatePrimaryPassword: function (password) {
            this.$emit('PrimaryPasswordChange', password)
        },
    }
})

//The "lister" vue component that is used to maintain a list of apps and generate passwords for them.
var lister = new Vue({
    el: '#memberPage',


    data: {
        //The list of apps, each containing a name and a step value.
        list: [
            { name: 'www.mcdonalds.com', step: 0 },
            { name: 'Command and Conquer', step: 0 },
        ],
        //The index of the currently selected app.
        currentItem: 0,
        //The list of apps, each containing a name and a step value.
        primaryPassword:null

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
        //Change the currently selected app.
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
        //Decrease the step value for the currently selected app.
        AppNameChange(name) {
            this.list[this.currentItem].name = name;
        },
        //Decrease the step value for the currently selected app.
        PrimaryPasswordChange(password) {
            this.primaryPassword = password;
        },
    },

    template:
        `
  <div id="memberPage">
        <!-- The wrapper div contains the css grid layout information. -->
        <div id="wrapper">
            <!-- The navigation bar for the website. This is a grid layout area. -->
            <section class="navbar">
                <ul class="navigation">
                    <li class="navigationLink"><a href="home.html">Home</a></li>
                    <!-- Member has the active class as it is the active page. -->
                    <li class="navigationLink"><a class="active" href="index.html">Member</a></li>
                    <li class="navigationLink"><a href="guest.html">Guest</a></li>
                    <li class="navigationLink"><a href="contact.html">Contact</a></li>
                    <li class="navigationLink">
                        <!-- A search bar that appears within the navigation bar. -->
                        <input class="searchBar" type="text" placeholder="Search..">
                    </li>
                </ul>
            </section>
            <!-- The main content section for the website. This is a grid layout area. -->
            <section class="mainContent">
                <!-- Displays an interactive "form" that makes use of vue binding, input binding and function calls to submit and recieve data. -->
                <div style="display:flex; flex-direction:column; align-items:center">
                    <!-- The main heading for the website. -->
                    <h1 style="text-align:center; font-size:3vw; padding:2%">
                        Password Place
                    </h1>
                    <!-- A button used to add a new app to the list. -->
                    <div style="margin:auto; padding:.5vh">
                        <button v-on:click="AddApp()" class="generalText">Add App</button>
                    </div>
                    <mainform 
                        v-bind:AppName="list[currentItem].name"
                        v-bind:PrimaryPassword="primaryPassword"
                        v-on:AppNameChange="AppNameChange"
                        v-on:PrimaryPasswordChange="PrimaryPasswordChange"
                     ></mainform>
                    <Stepper
                        v-bind:Step="list[currentItem].step"
                        v-on:IncreaseStep="IncreaseStep"
                        v-on:DecreaseStep="DecreaseStep"
                ></Stepper>
                <PasswordGenerator
                        v-bind:AppName="list[currentItem].name"
                        v-bind:PrimaryPassword="primaryPassword"
                        v-bind:Step="list[currentItem].step"
                ></PasswordGenerator>


            </section>
            <!-- The itemSroll section for the website. This is a grid layout area. -->
            <section class="itemScroll">
                <!-- Uses the Vue directive "for" to display every app that the user has saved. -->

                <OptionButton class="itemOption" v-for="(listItem,i) in list"
                              v-bind:Name="listItem.name"
                               v-on:SwitchItem="SwitchItem(i)">
                                
            </OptionButton>
            </section>
            <!-- The footer section for the website. This is a grid layout area. -->
            <section class="footer">
                <p class="generalText" style="text-align:center;">Trade Mark Limited</p>
            </section>
        </div>
    </div>

`

})