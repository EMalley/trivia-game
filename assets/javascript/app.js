$(document).ready(function () {
    var questionsArray = [
        {
            question: "What is the only snake in the world that builds a nest for its eggs?",
            choices: ["king Cobra", "Gater Snake", "Rattle Snake", "Water Moccasin"],
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
    var timer = 8;
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
        running = true;

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

            $("#countdown").html("<h2>Time's up! <br> The corret answer is: " + [randomQuestion].answer + "<h2>" + "<hr>");
            timer = 3;
            randomQuestion++;
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
                }
                else{
                    stop();
                    incorrectAnswers++;
                    $("#answerBank").html("<h2> Wrong!<br> The correct answer is: " + questionsArray[randomQuestion].answer + "<h2>")
                };


            })

        }
    };


});