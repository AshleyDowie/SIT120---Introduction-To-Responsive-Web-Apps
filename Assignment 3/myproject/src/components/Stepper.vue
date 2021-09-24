<template>
   <!-- Displays the currently selected app's step and allows the user to increase of decrease it with buttons on each side-->
   <div style="margin:auto; padding:.5vh;">
      <button v-on:click="DecreaseStep()" class="generalText"><</button>
      <label class="generalText">Step {{Step}}</label>
      <button v-on:click="IncreaseStep()" class="generalText">></button>
   </div>
</template>

<script>
export default {
    name: 'Stepper',
    props: ["Step"],
    methods: {
        IncreaseStep: function() {
            this.$emit('IncreaseStep')
        },
        DecreaseStep: function() {
            this.$emit('DecreaseStep')
        }
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
