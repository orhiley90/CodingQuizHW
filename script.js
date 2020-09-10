let questArray = ["When a user views a page containing a JavaScript program, which machine actually executes the script?", "What are variables used for in JavaScript Programs?", "Which of the following is not a valid JavaScript variable name?", "JavaScript is interpreted by _________", "Using _______ statement is how you test for a specific condition."];

let ansAArray = ["The User's machine running a Web browser", "Storing numbers, dates, or other values", "2names", "Client", "Select"];

let ansBArray = ["The Web Server", "Varying Randomly", "_first_and_last_names", "Server", "If"];

let ansCArray = ["A central machine deep within Netscape's corporate offices", "Causing high-school algebra flashbacks", "FirstAndLast", "Object", "Switch"];

let ansDArray = ["None of the above", "None of the above", "None of the above", "None of the above", "For"];

let actAnswer = ["A", "A", "A", "A", "B"];

let counter = 0;



$(document).ready(function () {
    $("#quizAnsRow").hide();

    console.log($("#start-button"));
    $("#start-button").on("click", function () {
        startQuiz();
    })

}
);
function startQuiz() {

        let question = questArray[counter];
        let ansA = ansAArray[counter];
        let ansB = ansBArray[counter];
        let ansC = ansCArray[counter];
        let ansD = ansDArray[counter];
        let actAns = actAnswer[counter];
        let tally = 0;
        
        $("<ul>" + question + "</ul>").appendTo("#emptyQuiz");
        // hide the start button 
        $("#start-button").hide();
        // show the question
        $("#aAnsdiv").text(ansA);
        $("#bAnsdiv").text(ansB);
        $("#cAnsdiv").text(ansC);
        $("#dAnsdiv").text(ansD);

        // show the other buttons
        $("#quizAnsRow").show();
        // start the timer

        //    Button A when clicked will call function to compare answer 
        //    Button B when clicked will call function to compare answer
        //    Button C when clicked will call function to compare answer
        //    Button D when clicked will call function to compare answer

        //    This function should check answer and then subtract time or count up correct answers depending on if it is correct or 
        // if(actAns =  ansA.charAt(0)){
        // tally = (tally + 1);
        // else()
        // subtract 5 seconds from timer
        // }
        //  make the buttons = there corresponding letter and compare that to the actAnswer array
        // }
    }
