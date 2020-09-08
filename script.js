$(document).ready(function () {
    let questArray = ["When a user views a page containing a JavaScript program, which machine actually executes the script?", "What are variables used for in JavaScript Programs?", "Which of the following is not a valid JavaScript variable name?", "JavaScript is interpreted by _________", "Using _______ statement is how you test for a specific condition."];

    let ansAArray = ["The User's machine running a Web browser", "Storing numbers, dates, or other values", "2names", "Client", "Select"];

    let ansBArray = ["The Web Server", "Varying Randomly", "_first_and_last_names", "Server", "If"];

    let ansCArray = ["A central machine deep within Netscape's corporate offices", "Causing high-school algebra flashbacks", "FirstAndLast", "Object", "Switch"];

    let ansDArray = ["None of the above", "None of the above", "None of the above", "None of the above", "For"];

    let actAnswer = ["A", "A", "A", "A", "B"];

    console.log($("#start-button"));
    $("#start-button").on("click", function () {
        for (i = 0; i < questArray.length; i++) {
            console.log(questArray);
            let question = questArray[i];
            let ansA = ansAArray(ansAArray[i]);
            let ansB = ansBArray(ansBArray[i]);
            let ansC = ansCArray(ansCArray[i]);
            let ansD = ansDArray(ansDArray[i]);
            let actAns = actAnswer(actAnswer[i]);
        }
    })
}
);