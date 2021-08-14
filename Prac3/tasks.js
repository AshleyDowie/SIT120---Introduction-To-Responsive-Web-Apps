function MethodsTest() {
    Task1();
    Task2();
    Task3();
}
function Task1() {
    var task1Output = "Task 1 \n";
    var text = "Burgers, Apples, Hot Dogs, Sundaes";
    task1Output += "the text says " + text + " and has a length of " + text.length + " characters which we find by using text.length\n";
    task1Output += "If we want to move the list in alphabetical order we can do the following\n";
    var splittext = text.split(",");
    task1Output += "Use text.split(\",\") to make a list of each item " + splittext.toString() + " \n";
    for (var i = 0; i < splittext.length; i++) {
        splittext[i] = splittext[i].trim();
    }
    task1Output += "Use splittext.trim() to remove white space from each string, making it " + splittext.toString() + "\n";
    splittext.sort();
    task1Output += "Use splittext.sort() to sort the items in alphabetical order " + splittext.toString() + "\n";
    for (var i = 1; i < splittext.length; i++) {
        splittext[i] = " ".concat(splittext[i]);
    }
    task1Output += "\" \".concat(splittext[i] on every string in the array after the first element to have spaces between the " + splittext.toString() + "\n";
    text = splittext.toString();
    alert(task1Output);
}
function Task2() {
    var task2Output = "Task 2 \n";
    var number = 123.7777;
    task2Output += "our number is " + number + "\n";
    numberArray = number.toString().split(".");
    task2Output += "We can find the total number of digits in the number using number.toString().replace(\".\", \"\").length. There are "
     + number.toString().replace(".", "").length + " digits in this number\n";
    task2Output += "We can truncate the decimal portion using parseInt(number) " + parseInt(number) + "\n";
    task2Output += "We can round to the nearest whole number using Math.round(number) " + Math.round(number) + "\n";
    task2Output += "We can round to the nearest 2 decimal places using number.toFixed(2) " + number.toFixed(2) + "\n";
    alert(task2Output);
}

function Task3() {
    var task3Output = "Task 3 \n";
    var today = new Date();
    task3Output += "You can get todays date and time using new Date().toLocaleString() " + new Date().toLocaleString() + "\n";
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    task3Output += "You can get todays date at mightnight using new Date(today.getFullYear(), today.getMonth(), today.getDate()).toLocaleString() " + today.toLocaleString() + "\n";
    var endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    task3Output += "You can get the date at end of month using new Date(today.getFullYear(), today.getMonth() + 1, 0).toLocaleString() " + endOfMonth.toLocaleString() + "\n";
    var startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    task3Output += "You can get the date at start of month using new Date(today.getFullYear(), today.getMonth(), 1).toLocaleString() " + startOfMonth.toLocaleString() + "\n";
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    task3Output += "We can get the current day of the week by creating an array of strings for each day of the week and using weekDays[today.getDay()] " + weekDays[today.getDay()] + "\n";
    alert(task3Output);
}