var quiz=[
  {
  question: "Mine favorite football team?  ",
  answer: "Manchester united"
  }, 
  {
    question: "where do i l live?  ",
    answer: "Gurgaon"
  },
  {
    question: "My favorite food?  ",
    answer: "Pizza"
  }
]

var scores=[
  {
    name:'Yash',
    score:3
  },
  {
    name:'varad',
    score:2
  }
]

function play(question, answer){
  var userAnswer=readlineSync.question(question);
  if(answer.toUpperCase()===userAnswer.toUpperCase()){
    console.log('Correct')
    score=score+1;
  }
  else{
    console.log('Wrong Answer')
    console.log('Correct Ans- ' + answer.toUpperCase() )
  }
  console.log('Score- ' + score);
}

function highScores(scores){
  for(var i=0; i<scores.length; i++){
    console.log(scores[i].name + "   " + scores[i].score)
  }
}


var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Welcome '+userName)

var score=0;
for(var i=0; i<quiz.length; i++){
  var quizarr=quiz[i]
  play(quizarr.question, quizarr.answer)
}

console.log('Congrats, You Scored '+ score);

console.log('List of High Scorers');
highScores(scores);
