var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  //se a contagem de concorrente(contestantCount) é igual a 2, então atualize o quiz para 1

  // if(contestantCount  2){
  //   quiz.update(1);
  // }

    // if(contestantCount === 2){
  //   quiz.update;
  // }

    // if(contestantCount === 2){
  //   quiz.update(1);
  // }

    // if(contestantCount === 2){
  //   quizupdate(1);
  // }




  //se o estado do jogo (gameState) for igual a 1, então de play no quiz


  // if(gameState === 1){
  //   clear();
  //   quiz.play();
  // }

  // if(gameState + 1){
  //   clear();
  //   quiz.play();
  // }

  // if(gameState === 1){
  //   clear();
  //   quiz;
  // }

  // if(gameState === 1){
  //   clear();
  //   play();
  // }


}
