class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Resultado do Questionário",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*OBSERVAÇÃO: O jogador que respondeu correto é destacado na cor verde!",130,230);

      for(var plr in allContestants){
        debugger;

        //crie a variável resposta correta(correctAns) para igual a "2"
        //var correctAns = "2";
        //var correctAns === "2";
        //var correctAns  "2";
        //var correAns = "2";


        //se resposta correta(correctAns) for igual a resposta do jogador,
        //então preencha(fill) com verde, senão(else) preencha(fill) com vermelho

        // if (correctAns  allContestants[plr].answer)
        //   fill("Green")
        // else
        //   fill("red");

        // if (correctAns === allContestants[plr])
        //   fill(Green)
        // else
        //   fill(red);

        // if (correctAns === allContestants[plr].answer)
        //   ("Green")
        // else
        //   ("red");

        // if (correctAns === allContestants[plr].answer)
        //   fill("Green")
        // else
        //   fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }
}
