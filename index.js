var readlineSync = require("readline-sync");
const chalk = require("chalk");
var userName = readlineSync.question("Enter your name ");
var score = 0;
console.log("Welcome "+ userName);
console.log(chalk.magentaBright("This is a quiz about Cristiano Ronaldo"));
var highScore={
  name:"Ajay",
  score:"5",
}
var questions = [{
  question:"How old is Cristiano Ronaldo? ",
  answer:"36",
},{
  question:"How many Balloon D' ORs has Ronaldo won? ",
  answer:"5",
},{
  question:"How many clubs has Ronaldo played for? ",
  answer:"4",
},{
  question:"How many UCLs titles has Ronaldo won? ",
  answer:"5",
},{
  question:"How many kids Ronaldo has? ",
  answer:"4",
},{
  question:"What is Crisatiano Ronaldo's abbreviation? ",
  answer:"CR7",
}];

function play(question,answer){
  var userAns=readlineSync.question(question);
  if(userAns.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("Right"));
    score++;
  } else {
    console.log(chalk.red("wrong"));
  }
  console.log("Current Score is "+ score);
}
function game(){
  for(var i = 0; i< questions.length; i++){
    var currentQues = questions[i];
    play(currentQues.question,currentQues.answer);
  }
}
game();
console.log("Your final score is " + score);
if (highScore.score < score) {
  console.log("You've scored a new high score");
  console.log("New high score is: " + score);
} else {
  console.log("You couldn't beat the high score");
}