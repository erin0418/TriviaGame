var intervalID;
var time = 30;
var questions = [{
    question: "When did the Philadelphia Flyers join the NHL?",
    answers: [1965, 1967, 1973, 1982],
},
{
    question: "Who is the team's all time highest goal scorer?",
    answers: ["Bobby Clarke", "Eric Lindros", "Reggie Leech", "Claude Giroux"],
},
{
    question: "Which of these numbers is a retired player's number?",
    answers: [18, 4, 5, 6],
},
{
    question: "Where did the Flyers win their last Stanley Cup?",
    answers: ["Philadelphia", "Buffalo", "Montreal", "New York"],
},
{
    question: "How many goals has goalie Ron Hextall scored?",
    answers: [0, 2, 1, 3],
},
{
    question: "What team did the Flyers notoriously beat in the 1970's?",
    answers: ["Montreal Canadiens", "The Globe Trotters", "New York Rangers", "The Red Army"],
},
]


function gameStart () {
    $("#question").html(questions[0].question);
    $("#answerOne").html(questions[0].answers[0]);
    $("#answerTwo").html(questions[0].answers[1]);
    $("#answerThree").html(questions[0].answers[2]);
    $("#answerFour").html(questions[0].answers[3]);
    intervalId = setInterval(decrement(), 30000);
    $("#answerOne").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerTwo").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
    $("#answerThree").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerFour").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
}
gameStart ();
function questionTwo () {
    $("#question").html(questions[1].question);
    $("#answerOne").html(questions[1].answers[0]);
    $("#answerTwo").html(questions[1].answers[1]);
    $("#answerThree").html(questions[1].answers[2]);
    $("#answerFour").html(questions[1].answers[3]);
    $("#answerOne").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerTwo").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerThree").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
    $("#answerFour").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
}
function questionThree () {
    $("#question").html(questions[2].question);
    $("#answerOne").html(questions[2].answers[0]);
    $("#answerTwo").html(questions[2].answers[1]);
    $("#answerThree").html(questions[2].answers[2]);
    $("#answerFour").html(questions[2].answers[3]);
    $("#answerOne").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerTwo").on("click", function () {
        $("#container").html("");
    });
    $("#answerThree").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
    $("#answerFour").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
}
function questionFour () {
    $("#question").html(questions[3].question);
    $("#answerOne").html(questions[3].answers[0]);
    $("#answerTwo").html(questions[3].answers[1]);
    $("#answerThree").html(questions[3].answers[2]);
    $("#answerFour").html(questions[3].answers[3]);
    $("#answerOne").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerTwo").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerThree").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerFour").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
}
function questionFive () {
    $("#question").html(questions[4].question);
    $("#answerOne").html(questions[4].answers[0]);
    $("#answerTwo").html(questions[4].answers[1]);
    $("#answerThree").html(questions[4].answers[2]);
    $("#answerFour").html(questions[4].answers[3]);
    $("#answerOne").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerTwo").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
    $("#answerThree").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerFour").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
}
function questionSix () {
    $("#question").html(questions[5].question);
    $("#answerOne").html(questions[5].answers[0]);
    $("#answerTwo").html(questions[5].answers[1]);
    $("#answerThree").html(questions[5].answers[2]);
    $("#answerFour").html(questions[5].answers[3]);
    intervalId = setInterval(decrement(), 30000);
    $("#timer").html(intervalID);
    $("#answerOne").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerTwo").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerThree").on("click", function () {
        $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
    });
    $("#answerFour").on("click", function () {
        $("#container").html("<img src='https://via.placeholder.com/350x150'>");
    });
}

function decrement () {
    time--;
    console.log(intervalID);
}


