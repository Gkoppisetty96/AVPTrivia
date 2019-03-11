$(document).ready(function() {
// CHANGE BACK THE TIMERS TO 5 SECONDS!!!


let triviaList = [ {
    question: "What street does Harry grow up on?",
    answerList: ["Privet Drive","Peachtree Street","Petunia Circle","Poppy Lane"] ,
    answer: 0,
},{
    question: "What's the name of the wizards' bank?",
    answerList: ["Wizengamot","Gringotts","MACUSA","Ilvernorny"],
    answer: 1,
},{
    question:"Who guards the entrance to the Gryffindor common room?",
    answerList: ["The Grey Lady","The Fat Friar","The Bloody Baron","The Fat Lady"],
    answer: 3,
},{
    question: "What does O.W.L. stand for?",
    answerList: ["Ordinary Wizarding Level","Official Wizarding Level","Outstanding Wizard Learning","Outstanding Wonderful Luck"],
    answer: 0,
},{
    question: "Which of these is not a Hogwarts House?",
    answerList: ["Gryffindor","Ravenclaw","Pukwudgie","Slytherin"],
    answer: 2,
},{
    question: "What is the closing phrase of the Maurader's Map?",
    answerList: ["All Done","Nothing to See Here","Mischief Managed","Up to No Good"],
    answer: 2,
},{
    question:"Which of the following is not used in quidditch?",
    answerList: ["Quaffles","Wiffles","Bludgers","Snitches"],
    answer: 1,
},{
    question: "What is the platform number for the Hogwarts Express?",
    answerList: ["Nine and Three-Quarters","Seven and One-Third","Eleventeen","Three and One-Quarter"],
    answer: 0,
},{
    question: "What is the name of Filch's cat?",
    answerList: ["Goose","Mrs. Norris","Buttercup","Sir Pounce"],
    answer: 1,
},{
    question: "Which of the following doesn't belong?",
    answerList: ["Moony","Scabby","Padfoot","Prongs"],
    answer: 1,
},{
    question: "What Quidditch position does Harry play?",
    answerList:["Chaser","Keeper","Beater","Seeker"] ,
    answer: 3,
},{
    question: "How do you summon a Patronus?",
    answerList: ["Patronia Paternus","Expelliarmus Patronicha","Expecto Patronum","Accio Patronus"],
    answer: 2,
},{
    question: "Which founder did the Sorting Hat belong to?",
    answerList: ["Rowena Ravenclaw","Godric Gryffindor","Salazar Slytherin","Helga Hufflepuff"],
    answer: 1,
},{
    question: "Which creature below transforms itself into a person's worst fear?",
    answerList: ["Doxy","Bowtruckle","Flobberworm","Boggart"],
    answer: 3,
},{
    question: "Who runs Gringott's wizarding bank?",
    answerList: ["Goblins","Elves","Centaurs","Dragons"],
    answer: 0,
},{
    question: "Which is not a form of currency in the wizarding world?",
    answerList: ["Sickles","Knuts","Galleons","Doxies"],
    answer: 3,
},{
    question: "What do Hermione's parents do?",
    answerList: ["Artists","Teachers","Dentists","Bankers"],
    answer: 2,
}];

let currentTrivia = 0;
let rightAnswer = 0;
let wrongAnswer = 0;
let unanswered = 0;
let seconds;
let time;
let answered = 0;
let userAnswer;

// show instructions, run function
function gameStart (){
    $("#instructions").show();
    $("#question-counter").empty();
    $("#time").empty();
    $("#rightanswers").empty();
    $("#wronganswers").empty();
    rightAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    answered = 0;
}

// hide instructions, start new game
$("#start").on('click', function(){
    $("#instructions").hide();
    playGame();
})

function playGame (){
    answered = true;
    // empty previous
    $("#notTrivia").empty();
    // question counter
    $("#question-counter").html( (currentTrivia+1) + "/" + triviaList.length);
    // put in right/wrong answers
    $("#rightanswers").html(rightAnswer);
    $("#wronganswers").html(wrongAnswer);

    // put in question
    $("#questions").html("<p>" + triviaList[currentTrivia].question + "<p>");
    // put in answers
    for (let i = 0; i < 4; i++ ) {
        var answers = $('<button>');
        answers.text(triviaList[currentTrivia].answerList[i]);
        answers.attr({'data-index': i, "type": "button"});
        answers.addClass("btn btn-outline-dark thisAnswer");
        $("#answers").append(answers);
    }

    // start countdown
    countdown();
    $(".thisAnswer").on("click", function (){
        userAnswer = $(this).data('index');
        clearInterval(time);
        userAlerts ();
    });

}

function countdown () {
    seconds = 15;
    $("#countdown").html(seconds);
    answered = true;
    time = setInterval ( function () {
        seconds --;
        $("#countdown").html(seconds);
        if (seconds < 1) {
            clearInterval (time);
            answered = false;
            userAlerts ();
        }
    }, 1000);
}

function userAlerts () {
    $("#questions").empty();
    $("#answers").empty();

    var rightText = triviaList[currentTrivia].answerList[triviaList[currentTrivia].answer];
    var rightIndex = triviaList[currentTrivia].answer;

    // check for correct/incorrect/unanswered
    if((userAnswer == rightIndex) && (answered == true)){
		rightAnswer++;
        $('#notTrivia').html("<h1>Yes, that's it!</h1>");
        console.log ("right");
	} else if((userAnswer != rightIndex) && (answered == true)){
		wrongAnswer++;
		$('#notTrivia').html("<h1>Nope, that's not it.</h1>");
        $('#notTrivia').append('The correct answer was: ' + rightText);
        console.log("wrong");
	} else{
        unanswered++;
		$('#notTrivia').html("<h1>Looks like you ran out of time!</h1>");
		$('#notTrivia').append('The correct answer was: ' + rightText);
        answered = true;
        console.log("out of time");
    }
    
    if (currentTrivia == (triviaList.length -1)) {
        setTimeout(endCard, 1000);
        console.log("game over");
    }
    else {
        currentTrivia++;
        setTimeout (playGame, 1000);
    }
}

function endCard () {
    $("#triplet").empty();
    $("#questions").empty();
    $("#answers").empty();

    $("#notTrivia").html("<h1> Let's see how well you did! </h1>");
    $("#notTrivia").append("<p> Correct Answers: " + rightAnswer + "</p>");
    $("#notTrivia").append("<p> Wrong Answers: " + wrongAnswer+ "</p>");
    $("#notTrivia").append("<p> Unanswered: " + unanswered+ "</p>");
    // make play again button
    var playAgain = $('<button>');
        playAgain.text("Play Again?");;
        playAgain.attr({"type": "button"});
        playAgain.addClass("btn btn-outline-dark");
        playAgain.attr({"id": "play-again"});
        $("#notTrivia").append(playAgain);
}

$(document).on('click', "#play-again", function() {
    $("#notTrivia").empty();
    gameStart ();
})

// run gameStart
gameStart();
console.log("begin");
});