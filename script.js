let questArray = ["When a user views a page containing a JavaScript program, which machine actually executes the script?", "What are variables used for in JavaScript Programs?", "Which of the following is not a valid JavaScript variable name?", "JavaScript is interpreted by _________", "Using _______ statement is how you test for a specific condition."];

let ansAArray = ["The User's machine running a Web browser", "Storing numbers, dates, or other values", "2names", "Client", "Select"];

let ansBArray = ["The Web Server", "Varying Randomly", "_first_and_last_names", "Server", "If"];

let ansCArray = ["A central machine deep within Netscape's corporate offices", "Causing high-school algebra flashbacks", "FirstAndLast", "Object", "Switch"];

let ansDArray = ["None of the above", "None of the above", "None of the above", "None of the above", "For"];

let actAnswer = ["A", "A", "A", "A", "B"];

let counter = 0;

let secondsLeft = 0;

let timer;

let yourScores = $("#yourScores");

$(document).ready(function () {
    $("#initialsGoHere").hide();
    $("#quizAnsRow").hide();
    $("#main").hide();
    $("#yourScoresDiv").hide();
    console.log($("#start-button"));
    $("#start-button").on("click", function () {
        secondsLeft = 100;
        timer = setInterval(setTime, 1000);
        popQuestion();
    });
    $("#submitButton").on("click", function () {
        $("#yourScoresDiv").show();
        renderScores();

    });
}
);
function popQuestion() {
    if (counter == questArray.length) {
        endQuiz();
    }
    else {
        let question = questArray[counter];
        let ansA = ansAArray[counter];
        let ansB = ansBArray[counter];
        let ansC = ansCArray[counter];
        let ansD = ansDArray[counter];
        let actAns = actAnswer[counter];
        let tally = 0;

        $("#title").hide();
        $("#emptyQuiz").text(question);
        // hide the start button and shows the question
        $("#start-button").hide();
        // show the possible answers
        $("#aAnsdiv").text(ansA);
        $("#bAnsdiv").text(ansB);
        $("#cAnsdiv").text(ansC);
        $("#dAnsdiv").text(ansD);

        // show the other buttons
        $("#quizAnsRow").show();
        // start the timer
        $("#main").show();
    }



    //    This function should check answer and then subtract time or count up correct answers depending on if it is correct or 
    // if(actAns =  ansA.charAt(0)){
    // tally = (tally + 1);
    // else()
    // subtract 5 seconds from timer
    // }
    //  make the buttons = there corresponding letter and compare that to the actAnswer array
    // }

    // this function compares the selected answer to the actual answer
}
function validateAnswer(inputAns) {
    if (actAnswer[counter] == inputAns) {
        counter++;
    }
    else {
        counter++;
        // maths that subtracts 15 seconds from timer
        secondsLeft = (secondsLeft - 15);
        $("#main").text(secondsLeft);
        
        if (secondsLeft <= 0) {


            // will end the quiz
            endQuiz();
            clearInterval(timer);
            secondsLeft = 0;
        }
    }
    popQuestion();
}

function setTime() {


    $("#main").text(secondsLeft--);
    if (secondsLeft <= 0) {
        secondsLeft = 0;
        endQuiz();

    }
}

function endQuiz() {
    clearInterval(timer);
    $("#quizAnsRow").hide();
    $("#initialsGoHere").show();

}

// shows scoreboard(is supposed to at least)
function renderScores() {
    
    document.getElementById("yourScores").innerHTML = document.getElementById("initials").value + "-" + (secondsLeft+ 1) ;
    $("#initialsGoHere").hide();


}