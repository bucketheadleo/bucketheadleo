/*
GAME RULES: The game has 2 players, playing in rounds; 
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score 
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn 
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After        that, it's the next player's turn.
    - A player looses his ENTIRE score when he rolls two 6 in a row , but its still his run to roll as well he      got his roundscore.
    - The first player to reach 100 points or Custom final score wins the game.

*/
var score, roundScore, activePlayer, gamePlaying;

document.querySelector('.btn-new').addEventListener('click', refresh );

function refresh() {              //init function
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};
refresh();

// start game by ROLLING dice
document.querySelector('.btn-roll').addEventListener('click', function(){      
    if(gamePlaying) {
        // 1. random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display result as dice (picts)
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. update score if rolled numbers is not 1.
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;             //  E.g 0 = 0 + (3 + 4)
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            nextPlayer()
        }
        if(dice1 === 6 && dice2 === 6) {  //  
            // player loses main score but not roundscore
            score[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
        }
        
    }
} );

//   On HOLD  save score or show winnder
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
        // add our roundscore  to global score
        score[activePlayer] += roundScore;

        // update global score UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore

        // if players typed their final score only numbs
        if (input){
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // check if player (WON)  got 100 
        if (score[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else {
            // next players turn
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // switch active & reset round score
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
};
