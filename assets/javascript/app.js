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
        {
            question: "Which of these animals has the longest lifespan?",
            choices: ["Elephant","Blue Whale","Giant Tortiose","Locust"],
            answer: "Giant Tortiose"
        },
        {
            question: "What is the only mammal capable of true flight?",
            choices: ["Bat","Peregrine Falcon","Horned Sungem","Spine-tailed Swift"],
            answer: "Peregrine Falcon"
        },
        {
            question: "A newborn Kangaroo is about the size of...",
            choices: ["Watermelon","Lima Bean","Plum","Grapefruit"],
            answer: "Lima Bean"
        },
        {
            question: "What is the gestation period of a blue whale?",
            choices: ["4-6 months","10-12 months","16-18 months","2 years"],
            answer: "10-12 months"
        },
        {
            question: "What is the smallest mammal in the world?",
            choices: ["Western Harvest Mouse","Numbat","Pygmy Marmoset","Bumblebee Bat"],
            answer: "Bumblebee Bat"
        },
        {
            question: "What is the worlds most poisonous spider?",
            choices: ["Brown Recluse","Brazilian Wandering Spider","Sydney Funnel Spider","Black Widow"],
            answer: "Brazilian Wandering Spider"
        },
        {
            question: "How many times can a hummingbird flap its wings per second?",
            choices: ["30","160","70","80"],
            answer: "80"
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
    var questionNum = 0;


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
        $("#countdown").html("<h2>" + timer + "<h2>");
        if (timer === 0) {
            stop();
            $("#countdown").html("<h2>Time's up! <br> The correct answer is: " + questionsArray[questionNum].answer + "<h2>" + "<hr>");
            $("#questionBank").empty();
            $(".userchoices").empty();
            unanswered++;
            endGame();
        }
    }
    function stop() {
        clearInterval(intervalId);
    }

    // writes the question to the DOM
    function displayQuestion() {
        // questionNum = Math.floor(Math.random() * questionsArray.length);

        $("#questionBank").html(questionsArray[questionNum].question); //console.log(questionsArray[i].question);
        for (var i = 0; i < questionsArray[questionNum].choices.length; i++) {
            var userChoice = $("<div>");
            userChoice.attr("class", "userChoices");
            userChoice.text(questionsArray[questionNum].choices[i]);
            console.log(questionsArray[questionNum].choices[i]);
            userChoice.attr("data-value", questionsArray[questionNum].choices[i]);
            $("#answerBank").append(userChoice);
        }

        // Click function for userChoices. 
        $(".userChoices").click(function () {
            // write correct response
            userGuess = ($(this).attr("data-value"));
            if (userGuess === questionsArray[questionNum].answer) {
                correctAnswers++;
                stop(); //stops the timer
                $("#answerBank").html("<h2> Correct! <h2>");
                endGame();
            }
            else {
                stop();
                incorrectAnswers++;
                $("#answerBank").html("<h2> Wrong!<br> The correct answer is: " + questionsArray[questionNum].answer + "<h2>");
                // displayQuestion();
                endGame();
            };
        })
    };
    // display if all questions are answered then display a score screen, if not then keep asking questions untill there are no more. 
    function endGame() {
        setTimeout(function () {
            // $("#questionBank").empty();
            console.log(correctAnswers, incorrectAnswers, unanswered)
            if (correctAnswers + incorrectAnswers + unanswered === questionsArray.length) {
                $("#questionBank").empty();
                $("#questionBank").html("<h3>Game Over! Here is how you did: </h3>");
                $("#answerBank").append("<h4>Correct: " + correctAnswers + "</h4>")
                $("#answerBank").append("<h4>Incorrect: " + incorrectAnswers + "</h4>");
                $("#answerBank").append("<h4>Unanswered: " + unanswered + "</h4>");
                questionNum = 0;
                correctAnswers = 0;
                incorrectAnswers = 0;
                unanswered = 0;
            }
            else {
                $("#questionBank").empty();
                $("#answerBank").empty();
                stop();
                timer = 10;
                runTimer();
                questionNum++;
                displayQuestion();
            }
        }, 2000);
    }

<<<<<<< HEAD
=======

>>>>>>> dfdb4c1bf772630a6f4ac9c2be8c646ddf58f3c1
});