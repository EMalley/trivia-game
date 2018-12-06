$(document).ready(function () {
    // ------------------------------------------
    // use object based varibles for each question (reference 'question game')
    var questions = [
        {
            question: "What is the only snake in the world that builds a nest for its eggs?",
            choices: ["king Cobra", "Gater Snake", "Rattle Snake", "Water Moccasin"],
            answer: "King Cobra"
            // photo: //insert photo

        },
        {
            question: "What is the only mammal born with horns?",
            choices: ["Rhino", "Rams", "Giraffe", "All of these"],
            answer: "Giraffe"

        },
        {
            question: "What flightless bird is featured on New Zealand's one dollar coin?",
            choices: ["Dodo", "Emu", "Ostrich", "Kiwi"],
            answer: "Kiwi"

        },
        {
            question: "Which of these repiles is known as the worlds largest lizard",
            choices: ["Aligator", "Komoto Dragon", "Crocodile", "Bearded Dragon"],
            answer: "Komoto Dragon"
        },
    ];
    // variables for Trivia Game
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timer = 10;
    var intervalId;
    var userGuess = "";
    var running = false;
    var questionCount = questions.length;
    var index;
    var newArray = [];
    var holder = [];


    // write a startGame function
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        running = true;
        // Make questions appear into HTML document
        for (i = 0; i < questions.length; i++); {
            holder.push(questions[i]);
        }
    });

    // countdown timer
    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timer--;
        $("#countdown").html("<h2>" + timer + "<h2>");
        if (timer === 0) {
            stop();
            $("#countdown").html("<h2>Time's up! <br> The corret answer is: " + questions[index].answer + "<h2>" + "<hr>");
        }
        function stop() {
            clearInterval(intervalId);

        }
    }

    // writes the question to the DOM
    function displayQuestion() {
        index = Math.floor(Math.random() * questions.length);
        $("#questionBank").html(questions[index].question); //console.log(questions[index].question);
        for (var i = 0; i < questions[index].choices.length; i++) {
            var userChoice = $("<div>");
            userChoice.attr("class", "userChoices");
            userChoice.text(questions[index].choices[i]);
            console.log(questions[index].choices[i]);
            userChoice.attr("data-guessvaule", i);
            $("#answerBank").append(userChoice);
        }
    };

    // onclick functions for answers
    // grab userchoices
    $("data-guessvaule").on("click", function () {
        // write correct response
        if (userGuess === questions[index].answer) {
            correctAnswers++;
            stop(); //stops the timer
            $("#answerBank").html("<h2> Correct! <h2>");
        }
        else {
            stop();
            incorrectAnswers++;
            $("#answerBank").html("<h2> Wrong! The correct answer is: " + question[index].answer + "<h2>")
        }


    })





    // Make choices for questions appear under the question
    // When the user Clicks an answer display show a screen that congradulates them... then move on to the next question.
    // If the wrong answer is chosen, then tell them they are wrong and show the correct answer.
    // At the end show total number of correct, incorrect and unanswered questions.
    // write a timer that counts down from 20 for each question

});