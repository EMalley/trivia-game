$(document).ready(function () {
    var questionsArray = [
        {
            question: "What is the only snake in the world that builds a nest for its eggs?",
            choices: ["King Cobra", "Gater Snake", "Rattle Snake", "Water Moccasin"],
            answer: "King Cobra",
            photo: "assets/images/dragon.png"

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
    // ------------------------------------------
    // use object based varibles for each question (reference 'question game')
    // variables for Trivia Game
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timer = 10;
    var intervalId;
    var userGuess;
    var running;
    var i = 0;
    var holder = [];


    // write a startGame function
    $("#start").on("click", function () {
        $("#start").hide();
        $("#countdown").html("<h2>" + timer + "<h2>");
        for (i = 0; i < questionsArray.length; i++); {
            holder.push(questionsArray[i]); console.log()
            runTimer();
            displayQuestion();
        }
    });

    // countdown timer
    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timer--;
        unanswered++;
        $("#countdown").html("<h2>" + timer + "<h2>");
        if (timer === 0) {
            stop();
            $("#questionBank").hide();
            $(".userchoices").hide();
            $("#countdown").html("<h2>Time's up! <br> The corret answer is: " + questionsArray[randomQuestion].answer + "<h2>" + "<hr>");
            timer = 3;
            unanswered++;
        }
    }
    function stop() {
        clearInterval(intervalId);
    }

    // writes the question to the DOM
    function displayQuestion() {
        randomQuestion = Math.floor(Math.random() * questionsArray.length);

        $("#questionBank").html(questionsArray[randomQuestion].question); //console.log(questionsArray[i].question);
        for (var i = 0; i < questionsArray[randomQuestion].choices.length; i++) {
            var userChoice = $("<div>");
            userChoice.attr("class", "userChoices");
            userChoice.text(questionsArray[randomQuestion].choices[i]);
            console.log(questionsArray[randomQuestion].choices[i]);
            userChoice.attr("data-value", questionsArray[randomQuestion].choices[i]);
            $("#answerBank").append(userChoice);

            // Click function for userChoices. 
            $(".userChoices").click(function () {
                // write correct response
                userGuess = ($(this).attr("data-value"));
                if (userGuess === questionsArray[randomQuestion].answer) {
                    correctAnswers++;
                    stop(); //stops the timer
                    $("#answerBank").html("<h2> Correct! <h2>");
                    endGame();
                }
                else {
                    stop();
                    incorrectAnswers++;
                    $("#answerBank").html("<h2> Wrong!<br> The correct answer is: " + questionsArray[randomQuestion].answer + "<h2>");
                    endGame();
                };
            })
        }
    };
    // display if all questions are answered then display a score screen, if not then keep asking questions untill there are no more.
    function endGame() {
        setTimeout(function () {
            // $("#questionBank").empty();
            if (correctAnswers + incorrectAnswers + unanswered === questionsArray) {
                $("#quesionBank").empty();
                $("#questionBank").html("<h3>Game Over! Here is how you did: </h3>");
                $("#answerBank").append("<h4>Correct: " + correctAnswers + "</h4>")
                $("#answerBank").append("<h4>Incorrect: " + incorrectAnswers + "</h4>");
                $("#answerBank").append("<h4>Unanswered: " + unanswered + "</h4>");
                correctAnswers = 0;
                incorrectAnswers = 0;
                unanswered = 0;
            }
            else {
                $("#questionBank").empty();
                $("#answerBank").empty();
                stop();
                runTimer();
                displayQuestion();
            }
        });
    }


});