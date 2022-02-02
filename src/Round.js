
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turn];
  };

  // takeTurn() {
  //
  // };


};

module.exports = Round;
