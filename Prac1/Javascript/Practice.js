var scores = [];
var average = 0;

function UpdateAverageScore() {
    average = 0;
    scores.push(document.getElementById("score").value)
    for (var i = 0; i < scores.length; i++) {
        average += (scores[i] / 1);
    }
    average = average / scores.length;
    document.getElementById("scoreAverage").innerHTML = average;
}