
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
    let newTurn = new Turn(guess, this.returnCurrentCard())
    this.turn++;
    let frontCard = this.deck.shift();
    this.deck.push(frontCard);

    if (newTurn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(newTurn)
    }

    return newTurn
  };

  calculatePercentCorrect() {
    let correctAnswers = this.turn - this.incorrectGuesses.length;
    let percentCorrect = ((correctAnswers % this.turn) * 100).toFixed(2)

    return percentCorrect;
};





};

module.exports = Round;
