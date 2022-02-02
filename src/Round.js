
const Turn = require('./Turn');
//we need it in the takeTurn method.
//we have to make a new instance of turn,
//and it has to count the # of turns,. so we needed access to that class.

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  };

  takeTurn(guess) {
    let newTurn = new Turn(guess, currentCard)
    this.turn++;
    return newTurn
  };

  // takeTurn() {
  //
  // };


};

module.exports = Round;
