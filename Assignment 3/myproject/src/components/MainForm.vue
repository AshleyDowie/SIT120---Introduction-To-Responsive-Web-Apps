<template>
   <!-- Displays an interactive "form" that makes use of vue binding, input binding and function calls to submit and recieve data. -->
   <div style="display:flex; flex-direction:column; align-items:center">
      <!-- The main heading for the website. -->
      <h1 style="text-align:center; font-size:3vw; padding:2%">
         Password Place
      </h1>
      <!-- A button used to add a new app to the list. -->
      <div style="margin:auto; padding:.5vh" v-if="IsMember == True">
         <button v-on:click="AddApp()" class="generalText">Add App</button>
         <button v-on:click="RemoveApp()" class="generalText">Remove App</button>
      </div>
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
      <stepper v-if="IsMember == True"
         v-bind:Step="Step"
         v-on:IncreaseStep="IncreaseStep"
         v-on:DecreaseStep="DecreaseStep"
         ></stepper>
      <password-generator
         v-bind:AppName="AppName"
         v-bind:PrimaryPassword="PrimaryPassword"
         v-bind:Step="Step"
         ></password-generator>
   </div>
</template>

<script>
import Stepper from '@/components/Stepper'
import PasswordGenerator from '@/components/PasswordGenerator'
export default {
    name: 'MainForm',
    components: {
        'stepper': Stepper,
        'password-generator': PasswordGenerator
    },
    props: {
        AppName: String,
        PrimaryPassword: String,
        Step: Number,
        IsMember: Boolean
    },

    methods: {
        UpdateName: function(name) {
            this.$emit('AppNameChange', name)
        },
        UpdatePrimaryPassword: function(password) {
            this.$emit('PrimaryPasswordChange', password)
        },
        IncreaseStep: function() {
            this.$emit('IncreaseStep')
        },
        DecreaseStep: function() {
            this.$emit('DecreaseStep')
        },
        //Add a new app to the list.
        AddApp() {
            this.$emit('AddApp')
        },
        //Add a new app to the list.
        RemoveApp() {
            this.$emit('RemoveApp')
        },
    }
}
</script>

<style scoped>
/*Apply 0 margin and 0 padding to all elements by default*/
* {
	margin: 0;
	padding: 0;
}
/*Keeps text font size responsive to changes in resolution*/
.generalText {
	font-size: clamp(15px, 2vw, 32px);
}
</style>
