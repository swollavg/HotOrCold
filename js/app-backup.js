$(document).ready(function(){
  
  var firstGuess = true;
  var secretNumber = Math.floor(Math.random() * 100 + 1); // generates random # 1-100
  var prevCloseUserGuess = "";
  var feedback = ""; // Create a blank string to be a placeholder for the feedback you'll display back to you user.

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function newGame(){

    console.log('secretNumber: ' + secretNumber);
    $('#guessButton').click(function(event){
      event.preventDefault();
      checkAnswer();
    });

  }// new game function end

  function checkAnswer() {

    var userGuessNum = $('#userGuess').val();        
    $('#guessList').append('<li>' + userGuessNum + '</li>'); // adds number to the guess history.
    $('#userGuess').val(''); // resets text input

    if(userGuessNum == secretNumber){
      feedback = 'YOU WIN!';
    }
    else if((userGuessNum > secretNumber - 3) && (userGuessNum < secretNumber + 3)){
      feedback = 'Ridiculously Sun Scorching Hot!';
      if(!firstGuess) {
        secondaryCheck(userGuessNum);
      } 
      console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
      console.log('userGuessNum: ' + userGuessNum);
      prevCloseUserGuess = userGuessNum;
    }
    else if((userGuessNum > secretNumber - 5) && (userGuessNum < secretNumber + 5)){
      feedback = 'Very Hot';
      if(!firstGuess) {
        secondaryCheck(userGuessNum);
      }
      console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
      console.log('userGuessNum: ' + userGuessNum);
      prevCloseUserGuess = userGuessNum;
    }
    else if((userGuessNum > secretNumber - 9) && (userGuessNum < secretNumber + 9)){
      feedback = 'Hot.';
      if(!firstGuess) {
        secondaryCheck(userGuessNum);
      }
      console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
      console.log('userGuessNum: ' + userGuessNum);
      prevCloseUserGuess = userGuessNum;
    }
    else if((userGuessNum > secretNumber - 15) && (userGuessNum < secretNumber + 15)){
      feedback = 'warm';
      if(!firstGuess) {
        secondaryCheck(userGuessNum);
      }
      console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
      console.log('userGuessNum: ' + userGuessNum);
      prevCloseUserGuess = userGuessNum;
    }
    else if((userGuessNum > secretNumber - 22) && (userGuessNum < secretNumber + 22)){
      feedback = 'cold';
    }
    else if((userGuessNum > secretNumber - 35) && (userGuessNum < secretNumber + 35)){
      feedback = 'Ice cold';
    }
    else {
      feedback = 'Colder than a ring around a polar bears ass';
    }

    if(firstGuess) {
      firstGuess = false;
    }

    alert(feedback);

  }

  function secondaryCheck(currentUserGuess) {
    // Logic for secondary check. 

    var difference = currentUserGuess - prevCloseUserGuess;
    console.log('difference: ' +  difference);

    /* If the first guess is under and the second guess is over the secret number */

    if((prevCloseUserGuess < secretNumber) && (currentUserGuess > secretNumber)){
      if((currentUserGuess - secretNumber) < (secretNumber - prevCloseUserGuess)) {
        feedback += " and getting hot";
      } 

      else if((currentUserGuess - secretNumber) > (secretNumber - prevCloseUserGuess)) {
        feedback += " and getting colder";
      } 
    }

    /* If the first guess is over and the second guess is under the secret number */

    else if ((prevCloseUserGuess > secretNumber) && (currentUserGuess < secretNumber)){
      if((prevCloseUserGuess - secretNumber) < (secretNumber - currentUserGuess)) {
        feedback += " and getting colder";
      } 

      if((prevCloseUserGuess - secretNumber) > (secretNumber - currentUserGuess)) {
        feedback += " and getting hotter";
      } 
    }

    /* If the previous and current guess are either both under or both over the secret number */
    else {

      /* If the guess is under the secret number */
      if(currentUserGuess < secretNumber){
        /* Getting Hot */
        if(difference == 1) {
          feedback += " and getting hotter";
        } 
        else if(difference == 2) {
          feedback += " and getting hotter";
        }
        else if(difference == 3) {
          feedback += " and getting hotter";
        }
        else if(difference == 4) {
          feedback += " and getting hotter";
        }
        else if(difference == 5) {
          feedback += " and getting hotter";
        } 

        /* Getting Cold */
        else if(difference == -1) {
          feedback += " and getting colder";
        } 
        else if(difference == -2) {
          feedback += " and getting colder";
        }
        else if(difference == -3) {
          feedback += " and getting colder";
          
        }
        else if(difference == -4) {
          feedback += " and getting colder";   
        }
        else if(difference == -5) {
          feedback += " and getting colder";
        } 
        
    }
      


      /* If the guess is over the secret number */
      if(currentUserGuess > secretNumber){
        if(difference == -1) {
          feedback += " and getting hot";
        } 
        else if(difference == -2) {
          feedback += " and getting hot";
        }
        else if(difference == -3) {
          feedback += " and getting hot";
        }
        else if(difference == -4) {
          feedback += " and getting hot";
        }
        else if(difference == -5) {
          feedback += " and getting hot";
        } 
        /* Getting Cold */
        else if(difference == 1) {
          feedback += " and getting cold";
        } 
        else if(difference == -2) {
          feedback += " and getting cold";
        }
        else if(difference == 3) {
          feedback += " and getting cold";
          
        }
        else if(difference == 4) {
          feedback += " and getting cold";   
        }
        else if(difference == 5) {
          feedback += " and getting cold";
        }
      } 

  } /* Outer Else statement end*/

  } /* secondary function end */

  newGame();

});