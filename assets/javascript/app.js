$(document).ready(function () {
    // ------------------------------------------
    // use object based varibles for each question (reference 'question game')
    var questions = [
        {
            question: "What is the only snake in the world that builds a nest for its eggs?",
            choices: ["king Cobra", "Gater Snake", "Rattle Snake", "Water Moccasin"],
            answer: 0
            // photo: //insert photo

        },
        {
            question: "What is the only mammal born with horns?",
            choices: ["Rhino", "Rams", "Giraffe", "All of these"],
            answer: 2

        },
        {
            question: "What flightless bird is featured on New Zealand's one dollar coin?",
            choices: ["Dodo", "Emu", "Ostrich", "Kiwi"],
            answer: 3

        },
        {
            question: "Which of these repiles is known as the worlds largest lizard",
            choices: ["Aligator", "Komoto Dragon", "Crocodile", "Bearded Dragon"],
            answer: 1
        },
    ];
    // variables for Trivia Game
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timer = 20;
    var intervalId;
    var userGuess = "";
    var running = false;
    var questionCount = questions.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];


    // write a startGame function
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        // runTimer();
        // Make questions appear into HTML document
        for (i = 0; i < questions.length; i++); {
            holder.push(questions[i]);
        }
    });

    // countdown timer
    function decrement() {
        $("#countdown").html("<h3>Time Remaining: " + timer + "</h3>");
        timer--;
        // stop when timer hits 0
        if (timer === 0) {
            unanswered++;
            stop();
            $("#answerBank").html("<p>Time's Up! The correct answer is: " + pick.choices[pick.answer] + "</p>");
            // hidePicture
        }
        // timer stop and clear
        function stopTime() {
            running = false;
            clearInterval(intervalId);
        }

    }
    function displayQuestion() {
        index = Math.floor(Math.random() * questions.length);
        // pick = questions[index];
        $("#questionBank").html(questions[index].question); console.log(questions[index].question);
        for (var i = 0; i < questions[index].choices.length; i++) {
            var userChoice = $("<div>");
            userChoice.attr("class", "userChoices");
            userChoice.text(questions[index].choices[i]);
            console.log(questions[index].choices[i]);
            userChoice.attr("data-guessvaule", i);
            $("#answerBank").append(userChoice);
        }
    };





    // Make choices for questions appear under the question
    // When the user Clicks an answer display show a screen that congradulates them... then move on to the next question.
    // If the wrong answer is chosen, then tell them they are wrong and show the correct answer.
    // At the end show total number of correct, incorrect and unanswered questions.
    // write a timer that counts down from 20 for each question



});




































































    // // variables for game
    // var correctAnswers = 0;
    // var wrongAnswers = 0;
    // var unanswered = 0;
    // var timer = 20;
    // var userGuess = "";
    // var gameRunning = false;
    // var questionCount = questions.length;
    // var qBank = [];
    // var answers;
    // var pick;
    // var choices = []
    // // ------------------------------------------

    // // click start button to start game, and when clicked populate a question into #questions.
    // $("#start").on("click", function () {
    //     $("#start").hide();
    //     $("#questions").html(questions);
    //     displayQuestion();
    //     for (var i = 0; i < questions.length; i++) {
    //         qBank.push(questions[i])
    //     }
    // });

    // // randomly pick question from array
    // function displayQuestion() {
    //     // choose random question from array
    //     index = Math.floor(Math.random() * questions.length);
    //     // choose answers from the question chosen
    //     pick = questions[index];
    //    if(pick.shown) {
    //        displayQuestion()
    //    }
    //    else {
    //        $("#questions").html(pick.question);
    //        for(var i  = 0; i < pick.questions.length; i++) {
    //            var userChoice = $("<div>");
    //            userChoice.addclass("answerchoice");
    //            userChoice.html(pick.choices[i]);
    //            userChoice.attr("data-guessvalue", i);
    //            $("#answerBank").append(userChoice);
    //        }
    //    }
    // }

    // // Timer countdown start
    // function decrement(){
    //     if (!running) {
    //         intervalId = setInterval(decrement, 1000);
    //         running = ture
    //     }

    // // timer countdown
    // $("#countdown").html("<p>Time remaining: " + timer +"</p>")
    // timer --;
    // // stop timer when it hits 0
    // if(timer === 0 ) {
    //     unanswered++;
    //     stop();
    //     $("#answerBank").html("<p> Time's Up! The correct answer is: " + choose.questions[choose.answer] + "</p>" );
    // }
    // };

    // // reset timer for next question
    // function timerReset() {
    //     running = false;
    //     clearInterval(intervalId);
    // }




