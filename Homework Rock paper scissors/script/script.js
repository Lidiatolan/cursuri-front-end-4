var posibilites = ["rock", 'paper', 'scissors'];


userChoice = Math.random();
 if (0 < userChoice <= 0.33) {
   userChoice = "rock";
 } else if (0.34 <= userChoice <= 0.66) {
   userChoice = "paper";
 } else {
   userChoice = "scissors";
 }
console.log('User choice:',userChoice);


computerChoice = Math.random();
if (0 < computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (0.34 <= computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
console.log('Computer choice:',computerChoice);


choice1 = userChoice;
choice2 = computerChoice;  

function play(choice1, choice2) {
  if(choice1 === choice2){
    return("The result is a tie!");
  }
  if(choice1 === "rock"){
    if(choice2 === "scissors"){
      return("User wins!");
    }else{
      return("Computer wins!");
    }
  }
  if(choice1 === "paper"){
    if(choice2 === "rock"){
      return("User wins!");
    }else{
      return("Computer wins!");
    }
  } 
  if(choice1 === "scissors"){
    if(choice2 === "rock"){
      return("Computer wins!");
    }else{
      return("User wins!");
    }

  }
}
play(choice1,choice2);
console.log(play(choice1,choice2));






