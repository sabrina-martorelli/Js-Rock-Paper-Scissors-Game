//Variables
var winner = '';
var userPoints = 0;
var computerPoints = 0;
var userChoice = '';
var ComputerChoice = '';
var choices = ['r', 'p', 's'];
var game = '';

  //Game Logic
  /*Rock: wins against scissors, loses to paper, and ties against itself.
  Paper: wins against rock, loses to scissors, and ties against itself.
  Scissors: wins against paper, loses to rock, and ties against itself.
  */
  // Assumption 
  // Player 1 = User
  // Player 2 = Computer

//User choice 
alert('We are playing Rock, Paper, Scissors!\nYou will ear 1 point everytime you win.\nFirst we are going to ask for your choice.\nSelect Cancel button if you want to finish.');

var userChoice = prompt("Please, enter your choice: r for Rock, p for Paper  or s for Scissor (lowercase!)");

//Repits until cancel is press

while (userChoice) {

  //Computer choice

  var ComputerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Concats both choices to use in switch
  var game = userChoice + ComputerChoice;

  switch (game) {
    case 'rs':
      winner = "You Win!";
      userPoints++;
      break;
    case 'rp':
      winner = "Computer Wins";
      computerPoints++;
      break;
    case 'rr':
      winner = "Is a Tie!";
      break;
    case 'ps':
      winner = "Computer Wins";
      computerPoints++;
      break;
    case 'pr':
      winner = "You Win!";
      userPoints++;
      break;
    case 'pp':
      winner = "Is a Tie!";
      break;
    case 'sr':
      winner = "Computer Wins";
      computerPoints++;
      break;
    case 'sp':
      winner = "You Win!";
      userPoints++;
      break;
    case 'ss':
      winner = "Is a Tie!";

  }


  // Returns game results

  alert('Your choice: ' + userChoice + '\nComputer Choice: ' + ComputerChoice + '\nThe Winner is: ' + winner);

  //Repeats choice for user untill cancel is press

  var userChoice = prompt("Please, enter another choice: r, p or s (lowercase!)");

};


//Returns Final Score Table

alert('--Final Score--\n' + 'User Points: ' + userPoints + '\n' + 'Computer Points: ' + computerPoints + '\n');

//Returns Final Score text

if (userPoints > computerPoints) {

  alert('You are the final winner! Congrats!\nRefresh and try again!');

} else if (userPoints < computerPoints) {

  alert('Computers are better tha people! Computer won!\n Refresh and try again!');

} else {

  alert('Is a Tie! \nRefresh and try again!');

}