<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>

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
/*The item scroll grid area of the app. This area displays the app's that the user has saved on
    the membership page. The display is a horizontal pane that allows the user to scroll through
    the list without scrolling the rest of the web page.
*/
.itemScroll {
    border-radius: 15px;
    grid-area: itemScroll;
    align-items: center;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    background-size: cover;
    background-color: rgba(0,0,0,0.5);
}
/*Item options, each representing an app that has been saved by the user on the membership page. These appear to 
    the right of one another as the list expands
*/
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

