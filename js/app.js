
$(document).ready(function(){
	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});





  	function newGame(){
  		var secretNumber = Math.floor(Math.random() * 100 + 1); // generates random # 1-100
	
  		$('#guessButton').click(function(event){
	  		event.preventDefault();
			var userGuessNum = $('#userGuess').val();
  			
  			$('#guessList').append('<li>' + userGuessNum + '</li>'); // adds number to the guess history.
			$('#userGuess').val(''); // resets text input

			alert(secretNumber)

			if(userGuessNum == secretNumber){
				alert('YOU WIN!');
			}
  			
  			else if((userGuessNum > secretNumber - 3) && (userGuessNum < secretNumber + 3)){
  				alert('Ridiculously Sun Scorching Hot!');
  			}

  			else if((userGuessNum > secretNumber - 5) && (userGuessNum < secretNumber + 5)){
  				alert('Very Hot');
  			}

  			else if((userGuessNum > secretNumber - 9) && (userGuessNum < secretNumber + 9)){
  				alert('Hot.');
  			}

  			else if((userGuessNum > secretNumber - 15) && (userGuessNum < secretNumber + 15)){
  				alert('warm');
  				
  			}

  			else if((userGuessNum > secretNumber - 22) && (userGuessNum < secretNumber + 22)){
  				alert('cold');
  			}

  			else if((userGuessNum > secretNumber - 35) && (userGuessNum < secretNumber + 35)){
  				alert('Ice cold');
  			}

  			else {
  				alert('Colder than a ring around a polar bears ass');
  			}
		});

	}// new game function end


newGame();


});


