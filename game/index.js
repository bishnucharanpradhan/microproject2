const handOptions = {
  "rock": "Rock.png",
  "paper": "Paper.png",
  "scissors": "Scissors.png"
}

let SCORE = 0;
let PC =0;
const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE AGAINST PC");
    document.getElementById("next").style.display = "none";
    setPc(PC+1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    document.getElementById("next").style.display = "flex";
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP");
    document.getElementById("next").style.display = "none";
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    document.getElementById("next").style.display = "flex";
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE AGAINST PC");
    document.getElementById("next").style.display = "none";
    setPc(PC+1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP");
    document.getElementById("next").style.display = "none";
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP");
    document.getElementById("next").style.display = "none";
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE AGAINST PC");
    document.getElementById("next").style.display = "none";
    setPc(PC+1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN AGAINST PC");
    document.getElementById("next").style.display = "flex";
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  document.getElementById("next").style.display = "none";
  document.querySelector(".dataContainer").style.display = "flex";
  document.querySelector(".winner").style.display = "none";
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}
const setPc = (newPc) => {
  PC = newPc;
  document.querySelector(".pc h1").innerText = newPc;
}




const handleRules = () => {
  document.querySelector(".rules").style.display = "flex";
};

const handleRulesClose = () => {
  document.querySelector(".rules").style.display = "none";
};
const handleNext = () => {
  document.querySelector(".winner").style.display = "flex";
  document.getElementById("next").style.display = "none";
  document.querySelector(".dataContainer").style.display = "none";
};
const handleWinnerPlay = () => {
  document.querySelector(".dataContainer").style.display = "flex";
  document.querySelector(".winner").style.display = "none";
  document.querySelector(".playingHands").style.display = "flex";
  document.querySelector(".decision").style.display = "none";
};