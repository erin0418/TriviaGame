var intervalID;
var time = 30;
var imageOne = "../images/ed-snider.jpg"
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



// Variable showQuestion will hold the setInterval when we start the slideshow
var showQuestion;

// Count will keep track of the index of the currently displaying question.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#container").on("click", ".row", nextQuestion);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
// $("#stop").on("click", stopSlideshow);

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayQuestion() {
    $("#question").html(questions[count].question);
    $("#answerOne").html(questions[count].answers[0]);
    $("#answerTwo").html(questions[count].answers[1]);
    $("#answerThree").html(questions[count].answers[2]);
    $("#answerFour").html(questions[count].answers[3]);
}

function nextQuestion() {

  // TODO: Increment the count by 1.
  count++

  // TODO: Show the loading gif in the "image-holder" div.
  
    $("#question").html(questions[count].question);
    $("#answerOne").html(questions[count].answers[0]);
    $("#answerTwo").html(questions[count].answers[1]);
    $("#answerThree").html(questions[count].answers[2]);
    $("#answerFour").html(questions[count].answers[3]);
        

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayQuestion, 30000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === questions.length)
    score ();

}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  if(showQuestion === undefined) {
  showQuestion = setInterval(nextImage, 5000);
  }
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);
  showImage = undefined;
}

// This will run the display image function as soon as the page loads.
displayQuestion();

// for (i=0; i<questions.length; i++) {
//     if (i===0) {
//     $("#question").append(questions[i].question);
//     $("#answerOne").append(questions[i].answers[0]);
//     $("#answerTwo").append(questions[i].answers[1]);
//     $("#answerThree").append(questions[i].answers[2]);
//     $("#answerFour").append(questions[i].answers[3]);
//     }
//     if (i===1) { break}
//     if (nextQuestion = true) {continue}
//     $("#question").append(questions[i].question);
//     $("#answerOne").append(questions[i].answers[0]);
//     $("#answerTwo").append(questions[i].answers[1]);
//     $("#answerThree").append(questions[i].answers[2]);
//     $("#answerFour").append(questions[i].answers[3]);
//         }



// var i = 0;
// function gameStart () {
//     $("#question").html(questions[i].question);
//     $("#answerOne").html(questions[i].answers[0]);
//     $("#answerTwo").html(questions[i].answers[1]);
//     $("#answerThree").html(questions[i].answers[2]);
//     $("#answerFour").html(questions[i].answers[3]);
//     $(".row").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//         $("#text").html("The correct answer was 1967");
//         $("#timer").html("Click to go on!");
//     });
//     $("#answerTwo").on("click", function () {
//         $("#container").html("<img src='http://journeysinto.com/wp-content/uploads/2016/04/ed-snider-and-keith-allen-during-inaugural-season_std-1.jpg'>");
//         $("#text").html("Ed Snider founded the Philadelphia Flyers in 1967. He served as the President of the franchise until his recent passing in 2016.");
//         $("#timer").html("Click to go on!");
//     });
// }

// function nextQuestion () {
//     $("#timer").on("click", function (){
//         i++;
//     });
// };
// function questionTwo () {
//     $("#question").html(questions[i+1].question);
//     $("#answerOne").html(questions[1].answers[0]);
//     $("#answerTwo").html(questions[1].answers[1]);
//     $("#answerThree").html(questions[1].answers[2]);
//     $("#answerFour").html(questions[1].answers[3]);

//     $(".row").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//         $("#text").html("The correct answer was Reggie Leech.");
//         $("#timer").html("Click to go on!");
//         $("#timer").on("click", function (){
//             questionThree ();
//         });
//     });
//     $("#answerThree").on("click", function () {
//         $("#container").html("<img src='https://via.placeholder.com/350x150'>");        $("#text").html("Fun fact about Reggie.");
//         $("#timer").html("Click to go on!");
//         $("#timer").on("click", function (){
//             questionThree ();
//         });
//     });
// }


// function questionThree () {
//     $("#question").html(questions[2].question);
//     $("#answerOne").html(questions[2].answers[0]);
//     $("#answerTwo").html(questions[2].answers[1]);
//     $("#answerThree").html(questions[2].answers[2]);
//     $("#answerFour").html(questions[2].answers[3]);
//     $("#answerOne").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerTwo").on("click", function () {
//         $("#container").html("");
//     });
//     $("#answerThree").on("click", function () {
//         $("#container").html("<img src='https://via.placeholder.com/350x150'>");
//     });
//     $("#answerFour").on("click", function () {
//         $("#container").html("<img src='https://via.placeholder.com/350x150'>");
//     });
// }
// function questionFour () {
//     $("#question").html(questions[3].question);
//     $("#answerOne").html(questions[3].answers[0]);
//     $("#answerTwo").html(questions[3].answers[1]);
//     $("#answerThree").html(questions[3].answers[2]);
//     $("#answerFour").html(questions[3].answers[3]);
//     $("#answerOne").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerTwo").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerThree").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerFour").on("click", function () {
//         $("#container").html("<img src='https://via.placeholder.com/350x150'>");
//     });
// }
// function questionFive () {
//     $("#question").html(questions[4].question);
//     $("#answerOne").html(questions[4].answers[0]);
//     $("#answerTwo").html(questions[4].answers[1]);
//     $("#answerThree").html(questions[4].answers[2]);
//     $("#answerFour").html(questions[4].answers[3]);
//     $("#answerOne").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerTwo").on("click", function () {
//         $("#container").html("<img src='https://via.placeholder.com/350x150'>");
//     });
//     $("#answerThree").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerFour").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
// }
// function questionSix () {
//     $("#question").html(questions[5].question);
//     $("#answerOne").html(questions[5].answers[0]);
//     $("#answerTwo").html(questions[5].answers[1]);
//     $("#answerThree").html(questions[5].answers[2]);
//     $("#answerFour").html(questions[5].answers[3]);
//     $("#timer").html(intervalID);
//     $("#answerOne").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerTwo").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerThree").on("click", function () {
//         $("#container").html("<img src='http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi'>");
//     });
//     $("#answerFour").on("click", function () {
//         $("#container").html("<img src='https://via.placeholder.com/350x150'>");
//     });
// }
// gameStart ();
// console.log(i);
// if (i === 1) {
//     questionTwo ();
// }