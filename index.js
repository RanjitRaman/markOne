
var readlineSync = require('readline-sync');
score =0;

var highScores =[
  {
  name: "Rohan",
  score: '4'
},
{
  name: "Pravallika",
  score: '03'
},
{
  name: "Sneha",
  score: '02'
}];

function userWelcome()
{
var userName =  readlineSync.question("Hey, what is your name ");
console.log("Welcome "+userName);
}

var questionsBank=[{
  question: "1. Where does Ranjit live? ",
  answer: "kakinada"
},
{
  question: "2. Ranjit work for which company ",
  answer: "Wipro"
},
{
  question: "3. Who is Ranjit favourite music producer?",
  answer: "Martin Garrix"
},
{
  question: "4. What phone Ranjit uses? ",
  answer: "Iphone11"
},
{
  question: "5.What month Ranjit was born ",
  answer: "February"
}]

function play(question, answer) {
  var userAnswer =  readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log("You are correct! Score is "+ score);
    console.log("-----------------------");
  }
  else
  {
    console.log("You missed that! Try again."
    
    )
  }
}

function game() {
  for (var i=0; i<questionsBank.length; i++) {
    var currentQuestion = questionsBank[i];
    console.log("-------------------------");
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function scores() {
  console.log(" Your total Score is " + score +"\nBelow are the top scores");
  for(var i=0; i<=highScores.length; i++)
  {
    console.log(highScores[i]);
  }
  console.log("If you have beaten highscores, please send us a screenshot");
}


userWelcome();
game();
scores();

