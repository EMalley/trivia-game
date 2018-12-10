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
    var timer = 3;
    var intervalId;
    var userGuess;
    var running = false;
    var i = 0;
    var holder = [];
    
    
    // write a startGame function
    $("#start").on("click", function () {
        $("#start").hide();
        $("#countdown").html("<h2>" + timer + "<h2>");
        runTimer();
        displayQuestion();
        running = true;
        // Make questionsArray appear into HTML document
        for (i = 0; i < questionsArray.length; i++); {
            holder.push(questionsArray[i]);
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

            $("#countdown").html("<h2>Time's up! <br> The corret answer is: " + questionsArray[randomQuestion].answer + "<h2>" + "<hr>");
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
            userChoice.attr("data-guessvalue", i);
            $("#answerBank").append(userChoice);

            // Click function for userChoices. 
            $(".userChoices").click(function () {
                // write correct response
                userGuess = parseInt($(this).attr("data-guessvalue"));
                if (userGuess === questionsArray[randomQuestion].answer) {
                    correctAnswers++;
                    stop(); //stops the timer
                    $("#answerBank").html("<h2> Correct! <h2>");
                }
                else {
                    stop();
                    incorrectAnswers++;
                    $("#answerBank").html("<h2> Wrong!<br> The correct answer is: " + questionsArray[randomQuestion].answer + "<h2>")
                };


            })

        }
    };


    // questionsArray about these things:
    //-----------------------------------
    // timer function not working properly lines 56-74 timer appears late...IDK


    // After userInput: display show a screen that congradulates them, add a timer for 3 seconds then.
    // move on to next question and reset the timer.




    // Make choices for questionsArray appear under the question
    // When the user Clicks an answer display show a screen that congradulates them... then move on to the next question.
    // If the wrong answer is chosen, then tell them they are wrong and show the correct answer.
    // At the end show total number of correct, incorrect and unanswered questionsArray.
    // write a timer that counts down from 10 for each question

});