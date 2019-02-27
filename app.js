/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 





//  ***************The game begins from here*********
var scores,roundScore,activePlayer,gamePlaying;

init();

// console.log(dice)





// Event Listener
document.querySelector('.btn-roll').addEventListener('click', function(){
	// state variable to check if the game is playing or it has ended 
	if (gamePlaying) {

	// what we need in this function 
	// 1. Random number
	// The dice to be rolled to a random value we use math random function
	var dice = Math.floor(Math.random()*6)+1;

	// 2. Display the result
	diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src='dice-'+dice+'.png';

	// 3. Update the round score IF the rolled number was NOT a 1
		if(dice !== 1){
			// 1. Add score
			roundScore +=dice;
			document.querySelector('#current-'+activePlayer).textContent=roundScore;
		}else{
		// 1. Change current player 
		nextPlayer();


		}

	}



});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying) {

		// 1. Add current scores to the global scores
	scores[activePlayer]+=roundScore;
	// 2. Update the UI
	document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
	// 3. Check if player has won the game
	if (scores[activePlayer]>=100) {
		document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

		gamePlaying = false;

	}else{
		nextPlayer();
	}


	}

	

});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// Changing the active player colour and designs
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	// Removing and adding css classes on html elements
	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
// scores for 2 players in an array
scores = [0,0];

// round score is one at atime 
roundScore = 0;

// Determine the active player
// By default the 0 in an array is the first element that is the first player plays first
activePlayer = 0;

// setting game state variable to true when the game begins
gamePlaying=true;
// selects the like css 
// document.querySelector('#current-'+activePlayer).textContent = dice;
// // document.querySelector('src').textContent = 'dice-'+dice+'.png';
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');


}

// Auto play
// for (var i = 0; i<=1000; i++) {
// 	if (x!==1) {
// 		var x = Math.floor(Math.random()*6)+1;
// 		console.log(x);
// 	}else{
// 		console.log('Next Player');
// 	}

// }