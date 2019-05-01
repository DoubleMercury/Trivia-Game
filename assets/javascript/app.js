counter = 20


function countDown() {
    counter --;
    $("#timerBox").text("Time Left:" + counter);
        if (counter == 0) {
            tally();
            clearInterval(startTimer);
        }
    }


const startTimer = setInterval(countDown, 1000);
    

function tally() {
    var trivia1 = document.trivia.question1.value;
    var trivia2 = document.trivia.question2.value;
    var trivia3 = document.trivia.question3.value;
    var trivia4 = document.trivia.question4.value;
    var trivia5 = document.trivia.question5.value;
    
    var correct = 0;

        if (trivia1 == "SwordOfOmens") {
            correct++;
        }
        if (trivia2 == "Hot-Rod") {
            correct++;
        }
        if (trivia3 == "Hawaii") {
            correct++;
        }
        if (trivia4 == "Melmac") {
            correct++;
        }
        if (trivia5 == "Penny") {
            correct++;
        }

document.getElementById("test-done").style.visibility = "visible";
document.getElementById("number-correct").innerHTML = "You got " +correct + " correct!";

clearInterval(countDown);
}
