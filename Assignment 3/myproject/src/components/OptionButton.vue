<template>
   <div>
      <!-- A tooltip to explain that each website button is selectable. -->
      <span class="toolTip">Select my name to view me</span>
      <!-- By clicking on the itemText of the button, the user can view this app's password info . -->
      <p class="itemText" v-on:click="SwitchItem">
         {{Name}}
      </p>
   </div>
</template>

<script>
export default {
    name: 'OptionButton',
    props: ["Name"],
    methods: {
        SwitchItem: function() {
            this.$emit('SwitchItem')
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

.itemOption {
	border-radius: 15px;
	background-color: #768e4a;
	min-height: 98%;
	display: inline-block;
	vertical-align: top;
}
    /*Changes the color of the item option that the user's cursor is current on top of. This is to indicate
        that the element is interactable.
*/
    .itemOption:hover {
        background-color: yellowgreen;
    }
    /*A tooltip that instructs the user to select the app's name in order to view its information.
        This tooptip will appear when the user's cursor is ontop of the item option element.
        The tooptip's z-index is set to 1 to ensure it display over top of any other elements.
*/
.itemOption .toolTip {
	visibility: hidden;
	max-width: 1fr;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 5px;
	padding: 5px 0;
	position: fixed;
	z-index: 1;
	overflow-wrap: break-word;
	font-size: 1.5vw;
}

.itemOption:hover .toolTip {
	visibility: visible;
}
    /*Changes the color of every second item option to make each item option's beginning and end easy to identify*/
    .itemOption:nth-child(even) {
        border-radius: 15px;
        background-color: #5ca0ab;
    }
        /*Ensures that every second item option will display the same color as all other item options when
         the cursor is on top of it.*/

        .itemOption:nth-child(even):hover {
            border-radius: 15px;
            background-color: yellowgreen;
        }
/*A group of media queries to increase the amount of item options displayed as the screen
    resolution increases.
*/
@media screen and (max-width: 600px) {
    .itemOption {
        min-width: 33%;
    }
}

@media screen and (min-width: 601px) and (max-width: 1000px) {
    .itemOption {
        min-width: 30%;
    }
}

@media screen and (min-width: 1001px) {
    .itemOption {
        min-width: 18%;
    }
}
/*The selectable text that appears within every item option. This displays the app's name.*/
.itemText {
	text-align: center;
	height: 100%;
	font-size: clamp(16px, 3vw, 32px);
	margin-top: 5vh;
	color: #121d40;
	font-family: sans-serif;
	overflow-wrap: break-word;
	padding: 5px;
}
</style>
