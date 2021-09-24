<template>
   <div style="margin:auto; padding:.5vh">
      <!-- Displays the a generated password for the app or a prompt for the user to fill out all required information
         if they have not yet done so.-->
      <label class="generalText" style="margin-right:1vw">Generated Password</label>
      <label class="generalText">{{ GeneratePassword }}</label>
   </div>
</template>

<script>
export default {
    name: 'PasswordGenerator',
    props: ["AppName", "PrimaryPassword", "Step"],
    computed: {
        /*A deterministic function that generates a password for the app based on the app's name, the users primary
       password and the current step of the app.*/
        GeneratePassword: function() {
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
