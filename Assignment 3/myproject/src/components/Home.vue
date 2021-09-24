<template>
   <!-- The wrapper div contains the css grid layout information. -->
   <div id="wrapper">
      <!-- The navigation bar for the website. This is a grid layout area. -->
      <section class="navbar">
         <ul class="navigation">
            <li class="navigationLink" v-on:click="$router.push({ name: 'Home' })"><a class="active"> Home</a></li>
            <!-- Member has the active class as it is the active page. -->
            <li class="navigationLink" v-on:click="$router.push({ name: 'Members' })"><a >Member</a></li>
            <li class="navigationLink" v-on:click="$router.push({ name: 'Guest' })"><a > Guest</a></li>
            <li class="navigationLink" v-on:click="$router.push({ name: 'Contact' })"><a > Contact</a></li>
            <li class="navigationLink">
               <!-- A search bar that appears within the navigation bar. -->
               <input class="searchBar" type="text" placeholder="Search..">
            </li>
         </ul>
      </section>
      <section class="mainContent">
         <div style="display:flex; flex-direction:column; align-items:center">
            <h1 style="text-align:center; font-size:3vw; padding-top:2%">
               Password Place
            </h1>
         </div>
         <div style="margin:auto; padding:.5vh">
            <p style="font-size:1.5vw; text-align:center; padding:2%; margin-right:1vw">
               Password Place is a product which allows users to generate passwords for various applications and websites. Password place requires the user to only remember a single password, their ‘primary password”. Password Place uses a deterministic function to create unique password for each application based on the name of the applications name and the user’s primary password. Password Place does not store any user passwords, they are always generated on the fly with the deterministic function.
               <br>
               <br>
               Password place offers two options for use. The user can choose to use Password Place without creating an account. Or the user can choose to create an account. If the user chooses to use Password Place without creating an account, they will be able to get a unique password for any application simply by typing in a password and a websites name. As the function for determining the password is deterministic, the password will be the same for the user each time.
               <br>
               <br>
               Users that choose to create an account will have access to more advanced features. A user that signs in will be able to create new application entries and save these to a list. This means the user does not have to try and remember which applications they are using Password Place generated passwords for. Users will also be able to “step forward” and “step back” passwords. This allows passwords to be generated using a third parameter, which is a simple integer value known as “step”. Step forward allows a user to generate a new password for an application in the situation that the application has password expiration after a set time.  Step back allows a user to go through the history of their passwords and recall previous passwords.
               <br>
               <br>
               For a logged in user the only information that is stored is their sign in password, their list of applications and the current step for the application. Users are recommended to not use a primary password that is the same as their sign in password. By not storing the user’s primary password, even if someone gains access to the users account, they will not be able to determine any of the user’s passwords.
            </p>
         </div>
      </section>
      <section class="footer">
         <p class="generalText" style="text-align:center;">Trade Mark Limited</p>
      </section>
   </div>
</template>

<script>
import OptionButton from '@/components/OptionButton'
import MainForm from '@/components/MainForm'

export default {
    name: 'Members',
    components: {
        'option-button': OptionButton,
        'main-form': MainForm,
    },

    data() {
        return {
            list: [{
                    name: 'www.mcdonalds.com',
                    step: 0
                },
                {
                    name: 'Command and Conquer',
                    step: 0
                },
            ],
            //The index of the currently selected app.
            currentItem: 0,
            //The list of apps, each containing a name and a step value.
            primaryPassword: null
        }
    },

    methods: {
        //Change the currently selected app.
        SwitchItem(i) {
            this.currentItem = i;
            console.log(i);
        },
        //Add a new app to the list.
        AddApp() {
            this.list.push({
                name: 'New App',
                step: 0
            });
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
}
</script>

<style scoped>
/*Apply 0 margin and 0 padding to all elements by default*/
* {
    margin: 0;
    padding: 0;
}
/*A wrapper that contains all of the grid template area information*/
#wrapper {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(100px, 10%) auto;
    grid-template-rows: auto minmax(75px, 15%) 5%;
    grid-template-areas: "navBar mainContent" "navBar itemScroll" "navBar footer";
    overflow: hidden;
}
/*The grid area that contains the navigation bar*/
.navBar {
    grid-area: navBar;
    background-color: #f1f1f2;
}
/*A class to use on the list of navitation elements. Stop elements showing any prefix*/
.navigation {
    list-style-type: none;
    padding: 5%;
    height: 100%;
    overflow: hidden;
}
/*The common styling of each navigation bar hyperlink*/
.navigationLink a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    font-size: clamp(15px, 2vw, 32px);
}
    /*The styling used for the navigation hyperlink of the current page*/
    .navigationLink a.active {
        background-color: #6890c8;
        color: white;
    }
    /*The styling used for the navigation hyperlinks that are not for the current page*/
    .navigationLink a:hover:not(.active) {
        background-color: #768e4a;
        color: white;
    }
/*The styling used to make the search bar size found on the navigation section responsive to 
    resolution changes*/
.searchBar {
    font-size: clamp(15px, 2vw, 32px);
    max-width: 100%;
}
/*Media query break point used to make the navigation bar horizontal rather than vertical
    and to appear at the top of the screen rather than at the left of the screen. Occurs when
    screen size is 600 pixels or less*/
@media screen and (max-width: 600px) {
    #wrapper {
        grid-template-columns: auto;
        grid-template-rows: minmax(75px, 10%) minmax(100px, auto) minmax(50px, 15%) 5%;
        grid-template-areas: "navBar" "mainContent" " itemScroll" "footer";
    }

    .navigationLink {
        float: left;
    }
}
/*Media query break point used to make the navigation bar vertical rather than horizontal
    and to appear at the left of the screen rather than the top of the screen. Occurs when
    screen size is 601 pixels or more*/
@media screen and (min-width: 601px) {
    #wrapper {
        grid-template-columns: minmax(100px, 10%) auto;
        grid-template-rows: auto minmax(75px, 15%) 5%;
        grid-template-areas: "navBar mainContent" "navBar itemScroll" "navBar footer";
    }
}
/*Main content grid area of the app*/
.mainContent {
    grid-area: mainContent;
    background: linear-gradient(#71bab9, #ffffff);
    background-size: cover;
    position: relative;
}
/*Keeps text font size responsive to changes in resolution*/
.generalText {
    font-size: clamp(15px, 2vw, 32px);
}
/*Footer content grid area of the app*/
.footer {
    grid-area: footer;
    background-color: #f1f1f2;
}
</style>
