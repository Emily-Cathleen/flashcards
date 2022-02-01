class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }


  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {

  };

  };




module.exports = Turn;
