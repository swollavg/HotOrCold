$(document).ready(function(){
 
 var firstGuess = true;
 var secretNumber;
 var prevCloseUserGuess = "";
 var feedback = ""; // Create a blank string to be a placeholder for the feedback you'll display back to you user.
 var counter = 0;
 var userGuessNum;
 /*--- Display information modal box ---*/
 $(".what").click(function(){
   $(".overlay").fadeIn(1000);
 });

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
   $(".overlay").fadeOut(1000);
 });

 $('a.new').click(function(){
 	counter = 0;
 	$('#count').text(counter);
 	$('#guessList').children().remove();
 	$('#feedback').text("Enter your Guess");
 	newGame();
 });

 $('#guessButton').click(function(event){
 	event.preventDefault();
	userGuessNum = $('#userGuess').val();

	if((userGuessNum != "") && (!isNaN(userGuessNum))) {
 		 counter += 1;
	     
	     $('#count').text(counter);
	     checkAnswer();
	}

	else{
		$('#feedback').text("Please type a number between 1-100!");
		$('#userGuess').val('');
	}
 });


 function newGame(){
   var firstGuess = true;
   secretNumber = Math.floor(Math.random() * 100 + 1); // generates random # 1-100
   var prevCloseUserGuess = "";
   var feedback = ""; // Create a blank string to be a placeholder for the feedback you'll display back to you user.

   console.log('secretNumber: ' + secretNumber);
}// new game function end

 function checkAnswer() {
   console.log('checking answer');

	   $('#guessList').append('<li>' + userGuessNum + '</li>'); // adds number to the guess history.
	   $('#userGuess').val(''); // resets text input

	   
	   if(userGuessNum == secretNumber){
	     feedback = 'YOU WIN!';
	   }
	   else if((userGuessNum > secretNumber - 6) && (userGuessNum < secretNumber + 6)){
	     feedback = 'Ridiculously Sun Scorching Hot!';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     } 
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 11) && (userGuessNum < secretNumber + 11)){
	     feedback = 'Very Hot';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 16) && (userGuessNum < secretNumber + 16)){
	     feedback = 'Hot';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 21) && (userGuessNum < secretNumber + 21)){
	     feedback = 'warm';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 26) && (userGuessNum < secretNumber + 26)){
	     feedback = 'Cold';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 35) && (userGuessNum < secretNumber + 35)){
	     feedback = 'Ice cold';
	   }
	   else {
	     feedback = 'Arctic Cold';
	   }

	   if(firstGuess) {
	     firstGuess = false;
	   }

	   $('#feedback').text(feedback);
    

    

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
   if((difference >=1) && (difference <= 5)) {
     feedback += " and getting hotter";
   } 
   

   /* Getting Cold */
   else if((difference <= -1) && (difference >= -5)) {
     feedback += " and getting colder";
   } 
}
   


   /* If the guess is over the secret number */
   if(currentUserGuess > secretNumber){
   if((difference <= -1) && (difference >= -5)) {
     feedback += " and getting hot";
   } 
   
   /* Getting Cold */
   else if((difference >= 1) && (difference <= 5)) {
     feedback += " and getting cold";
   } 
} 

} /* Outer Else statement end*/

 } /* secondary function end */

 newGame();

});
