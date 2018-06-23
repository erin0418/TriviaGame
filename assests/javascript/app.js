var questions = [{
    question: "When did the Philadelphia Flyers join the NHL?",
    answers: [1965, 1967, 1973, 1982],
    correct: 1
},
{
    question: "Who is the team's all time highest goal scorer?",
    answers: ["Bobby Clarke", "Eric Lindros", "Reggie Leech", "Claude Giroux"],
    correct: 2
},
{
    question: "Which of these numbers is a retired player's number?",
    answers: [18, 4, 5, 6],
    correct: 3
},
{
    question: "Where did the Flyers win their last Stanley Cup?",
    answers: ["Philadelphia", "Buffalo", "Montreal", "New York"],
    correct: 1
},
{
    question: "How many goals has goalie Ron Hextall scored?",
    answers: [0, 2, 1, 3],
    correct: 1
},
{
    question: "What team did the Flyers notoriously beat in the 1970's?",
    answers: ["Montreal Canadiens", "The Globe Trotters", "New York Rangers", "The Red Army"],
    correct: 3
},
]
var time;
var count = 0;
var correct = 0;
var wrong = 0;
var seconds = 15;
var unanswered = 0;

$("#container").on("click", ".row", nextQuestion);


function decrease() {
    seconds--
    $("#timer").html("Time Left: " + seconds)
    if(seconds === 0) {
        clearInterval(time);
        nextQuestion();
        seconds = 15;
    }
    }

function timer() {
    time = setInterval(decrease, 1000);
    $("#timer").html("Time Left: " + seconds)
}


// Displays first question
function displayQuestion() {
    $("#question").html(questions[count].question);
    $("#answerOne").html(questions[count].answers[0]);
    $("#answerTwo").html(questions[count].answers[1]);
    $("#answerThree").html(questions[count].answers[2]);
    $("#answerFour").html(questions[count].answers[3]);
    timer ();
}
// Displays following questions
function nextQuestion() {
  if(count++<questions.length) {
    $("#question").html(questions[count].question);
    $("#answerOne").html(questions[count].answers[0]);
    $("#answerTwo").html(questions[count].answers[1]);
    $("#answerThree").html(questions[count].answers[2]);
    $("#answerFour").html(questions[count].answers[3]);
  }
}
// Displays score page at end
function score () {
    $("#question").html("Total Score!");
    $("#answerOne").html("Answers correct: " + correct);
    $("#answerTwo").html("Answers wrong: " + wrong);
    $("#answerThree").html("Thanks for playing!");
    $("#answerFour").html(" ");
    }

// TODO: ADD SCORE COUNT FOR EACH QUESTION

displayQuestion();
