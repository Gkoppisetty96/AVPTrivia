$(document).ready(function() {

let triviaList = [ {
    question: "What street does Harry grow up on?",
    answerList: ["Privet Drive","Hedge Row","",""] ,
    answer: 1,
},{
    question: "What's the name of the wizards' bank?",
    answerList: ["Wizengamot","Gringotts","MACUSA",""],
    answer: 2,
},{
    question:"Who guards the entrance to the Gryffindor common room?",
    answerList: ["The Grey Lady","The Fat Friar","The Bloody Baron","The Fat Lady"],
    answer: 4,
},{
    question: "What does O.W.L. stand for?",
    answerList: ["Ordinary Wizarding Level","Official Wizarding Level","Outstanding Wizard Learning","Outstanding Wonderful Luck"],
    answer: 1,
},{
    question: "Which of these is not a Hogwarts House?",
    answerList: ["Gryffindor","Ravenclaw","Pukwudgie","Slytherin"],
    answer: 3,
},{
    question: "What is the closing phrase of the Maurader's Map?",
    answerList: ["All Done","Nothing to See Here","Mischief Managed","Up to No Good"],
    answer: 3,
},{
    question:"Which of the following is not used in quidditch?",
    answerList: ["Quaffles","Wiffles","Bludgers","Snitches"],
    answer: 2,
},{
    question: "What is the platform number for the Hogwarts Express?",
    answerList: ["Nine and Three-Quarters","Seven and One-Third","Eleventeen","Three and One-Quarter"],
    answer: 1,
},{
    question: "What is the name of Filch's cat?",
    answerList: ["Goose","Mrs. Norris","Buttercup","Sir Pounce"],
    answer: 2,
},{
    question: "Which of the following doesn't belong?",
    answerList: ["Moony","Scabby","Padfoot","Prongs"],
    answer: 2,
},{
    question: "What Quidditch position does Harry play?",
    answerList:["Chaser","Keeper","Beater","Seeker"] ,
    answer: 4,
},{
    question: "How do you summon a Patronus?",
    answerList: ["Patronia Paternus","Expelliarmus Patronicha","Expecto Patronum","Accio Patronus"],
    answer: 3,
},{
    question: "Which founder did the Sorting Hat belong to?",
    answerList: ["Rowena Ravenclaw","Godric Gryffindor","Salazar Slytherin","Helga Hufflepuff"],
    answer: 2,
},{
    question: "Which creature below transforms itself into a person's worst fear?",
    answerList: ["Doxy","Bowtruckle","Flobberworm","Boggart"],
    answer: 4,
},{
    question: "Who runs Gringott's wizarding bank?",
    answerList: ["Goblins","Elves","Centaurs","Dragons"],
    answer: 1,
},{
    question: "Which is not a form of currency in the wizarding world?",
    answerList: ["Sickles","Knuts","Galleons","Doxies"],
    answer: 4,
},{
    question: "What do Hermione's parents do?",
    answerList: ["Artists","Teachers","Dentists","Bankers"],
    answer: 3,
}];

let currentTrivia = 0;
let rightAnswer = 0;
let wrongAnswer = 0;
let unanswered = 0;
let seconds;
let time;
let answered = 0;
let userChoice;

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
    // question counter
    $("#question-counter").html( (currentTrivia+1) + "/" + triviaList.length);
    // put in question
    $("#questions").html("<p>" + triviaList[currentTrivia].question + "<p>");



    userAlerts();
    nextTrivia ();
}

function nextTrivia () {
// timer goes here

// go to end card if end
    endCard();
}

function userAlerts () {
    // increase variables and change counter

    // congrats
    // that's wrong
    // you ran out of time
}

function endCard () {
    // empty question and answers
    // show correct/incorrect/unanswered
    // play again?
}

$("#play-again").on('click', function(){
    gameStart ();
})

// run gameStart
gameStart();
console.log("begin");
});