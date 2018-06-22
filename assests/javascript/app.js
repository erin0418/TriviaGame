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

var showQuestion;
var count = 0;
var correct = 0;
var wrong = 0;
var timer = 15;


$("#container").on("click", ".row", nextQuestion);

function displayQuestion() {
    $("#question").html(questions[count].question);
    $("#answerOne").html(questions[count].answers[0]);
    $("#answerTwo").html(questions[count].answers[1]);
    $("#answerThree").html(questions[count].answers[2]);
    $("#answerFour").html(questions[count].answers[3]);
   
    if(showQuestion === undefined) {
        showQuestion = setTimeout(nextQuestion, 15000);
}
}

function nextQuestion() {

  count++

    $("#question").html(questions[count].question);
    $("#answerOne").html(questions[count].answers[0]);
    $("#answerTwo").html(questions[count].answers[1]);
    $("#answerThree").html(questions[count].answers[2]);
    $("#answerFour").html(questions[count].answers[3]);
        
  setTimeout(displayQuestion, 15000);

  if (count === questions.length)
    score ();

}
function score () {
    if (count === 0){
        $("#answerTwo").on("click", function (){
            correct++;
            console.log(correct);
        })
    }
    else {
        wrong++;
        console.log(wrong)
    }
}

displayQuestion();
